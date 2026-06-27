const express = require('express');
const { body, query, validationResult } = require('express-validator');
const pool = require('../db/pool');
const { ok, fail } = require('../utils/respond');
const { requireAuth, optionalAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

const PROPERTY_TYPES = ['Apartment', 'Villa', 'Penthouse', 'Office', 'Studio', 'Plot', 'House'];
const LISTING_TYPES = ['buy', 'rent'];
const SORT_OPTIONS = {
  newest: 'p.created_at DESC',
  price_low: 'p.price ASC',
  price_high: 'p.price DESC',
  sqft: 'p.sqft DESC',
};

function mapProperty(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    locality: row.locality,
    city: row.city,
    state: row.state,
    listingType: row.listing_type,
    propertyType: row.property_type,
    price: Number(row.price),
    priceUnit: row.price_unit,
    sqft: row.sqft,
    bhk: row.bhk,
    bathrooms: row.bathrooms,
    badge: row.badge,
    imageEmoji: row.image_emoji,
    amenities: row.amenities,
    status: row.status,
    isFeatured: row.is_featured,
    views: row.views,
    ownerId: row.owner_id,
    isWishlisted: row.is_wishlisted || false,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// ---------------------------------------------------------------
// GET /api/properties
// Public search & filter endpoint.
// Query params:
//   q             - free text search (title, locality, city)
//   listingType   - 'buy' | 'rent'
//   propertyType  - 'Apartment' | 'Villa' | ...
//   city          - exact city match
//   minPrice/maxPrice
//   bhk           - exact bhk count (0 = office/studio)
//   minBhk        - bhk >= value
//   sort          - 'newest' | 'price_low' | 'price_high' | 'sqft'
//   page/limit    - pagination
// ---------------------------------------------------------------
router.get(
  '/',
  optionalAuth,
  [
    query('listingType').optional().isIn(LISTING_TYPES),
    query('minPrice').optional().isFloat({ min: 0 }),
    query('maxPrice').optional().isFloat({ min: 0 }),
    query('bhk').optional().isInt({ min: 0 }),
    query('minBhk').optional().isInt({ min: 0 }),
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 100 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return fail(res, 'Validation failed', 422, errors.array());
    }

    const {
      q, listingType, propertyType, city,
      minPrice, maxPrice, bhk, minBhk,
      sort = 'newest',
    } = req.query;

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const offset = (page - 1) * limit;

    const conditions = [`p.status = 'approved'`];
    const params = [];

    if (q) {
      params.push(`%${q}%`);
      conditions.push(`(p.title ILIKE $${params.length} OR p.locality ILIKE $${params.length} OR p.city ILIKE $${params.length})`);
    }
    if (listingType) {
      params.push(listingType);
      conditions.push(`p.listing_type = $${params.length}`);
    }
    if (propertyType) {
      params.push(propertyType);
      conditions.push(`p.property_type = $${params.length}`);
    }
    if (city) {
      params.push(city);
      conditions.push(`p.city ILIKE $${params.length}`);
    }
    if (minPrice) {
      params.push(minPrice);
      conditions.push(`p.price >= $${params.length}`);
    }
    if (maxPrice) {
      params.push(maxPrice);
      conditions.push(`p.price <= $${params.length}`);
    }
    if (bhk !== undefined) {
      params.push(bhk);
      conditions.push(`p.bhk = $${params.length}`);
    }
    if (minBhk !== undefined) {
      params.push(minBhk);
      conditions.push(`p.bhk >= $${params.length}`);
    }

    const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
    const orderClause = SORT_OPTIONS[sort] || SORT_OPTIONS.newest;

    // `params` so far holds only WHERE-clause filter values — keep a copy
    // for the COUNT query before we add the wishlist/limit/offset params,
    // which only apply to the main SELECT.
    const filterParams = [...params];

    let wishlistSelect = 'FALSE AS is_wishlisted';
    if (req.user) {
      params.push(req.user.id);
      wishlistSelect = `EXISTS(SELECT 1 FROM wishlists w WHERE w.property_id = p.id AND w.user_id = $${params.length}) AS is_wishlisted`;
    }

    const dataQuery = `
      SELECT p.*, ${wishlistSelect}
      FROM properties p
      ${whereClause}
      ORDER BY ${orderClause}
      LIMIT $${params.length + 1} OFFSET $${params.length + 2}
    `;
    const countQuery = `SELECT COUNT(*) FROM properties p ${whereClause}`;

    try {
      const dataParams = [...params, limit, offset];
      const [dataResult, countResult] = await Promise.all([
        pool.query(dataQuery, dataParams),
        pool.query(countQuery, filterParams),
      ]);

      const total = parseInt(countResult.rows[0].count, 10);

      return ok(res, {
        properties: dataResult.rows.map(mapProperty),
        pagination: {
          page, limit, total,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (err) {
      console.error('Property search error:', err);
      return fail(res, 'Something went wrong while searching properties.', 500);
    }
  }
);


// ---------------------------------------------------------------
// GET /api/properties/:id
// ---------------------------------------------------------------
router.get('/:id', optionalAuth, async (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) return fail(res, 'Invalid property id.', 400);

  try {
    const wishlistJoin = req.user
      ? `, EXISTS(SELECT 1 FROM wishlists w WHERE w.property_id = p.id AND w.user_id = $2) AS is_wishlisted`
      : `, FALSE AS is_wishlisted`;

    const params = req.user ? [id, req.user.id] : [id];

    const result = await pool.query(
      `SELECT p.* ${wishlistJoin} FROM properties p WHERE p.id = $1`,
      params
    );

    if (result.rows.length === 0) {
      return fail(res, 'Property not found.', 404);
    }

    // increment view count (fire and forget)
    pool.query('UPDATE properties SET views = views + 1 WHERE id = $1', [id]).catch(() => {});

    return ok(res, { property: mapProperty(result.rows[0]) });
  } catch (err) {
    console.error('Get property error:', err);
    return fail(res, 'Something went wrong while fetching this property.', 500);
  }
});

// ---------------------------------------------------------------
// POST /api/properties
// Create a listing. Agents/builders create as 'pending' (needs admin
// approval); admins create as 'approved' immediately.
// ---------------------------------------------------------------
router.post(
  '/',
  requireAuth,
  requireRole('agent', 'builder', 'admin'),
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('locality').trim().notEmpty().withMessage('Locality is required'),
    body('city').trim().notEmpty().withMessage('City is required'),
    body('listingType').isIn(LISTING_TYPES).withMessage(`listingType must be one of: ${LISTING_TYPES.join(', ')}`),
    body('propertyType').optional().isIn(PROPERTY_TYPES),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('sqft').optional().isInt({ min: 0 }),
    body('bhk').optional().isInt({ min: 0 }),
    body('bathrooms').optional().isInt({ min: 0 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return fail(res, 'Validation failed', 422, errors.array());
    }

    const {
      title, description, locality, city, state,
      listingType, propertyType, price, sqft, bhk, bathrooms,
      badge, imageEmoji, amenities,
    } = req.body;

    const priceUnit = listingType === 'rent' ? 'month' : 'total';
    const status = req.user.role === 'admin' ? 'approved' : 'pending';

    try {
      const result = await pool.query(
        `INSERT INTO properties
          (owner_id, title, description, locality, city, state, listing_type, property_type,
           price, price_unit, sqft, bhk, bathrooms, badge, image_emoji, amenities, status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
         RETURNING *`,
        [
          req.user.id, title, description || null, locality, city, state || null,
          listingType, propertyType || 'Apartment', price, priceUnit,
          sqft || null, bhk || 0, bathrooms || 0, badge || null,
          imageEmoji || '🏠', JSON.stringify(amenities || []), status,
        ]
      );

      return ok(res, { property: mapProperty(result.rows[0]) }, 201);
    } catch (err) {
      console.error('Create property error:', err);
      return fail(res, 'Something went wrong while creating the listing.', 500);
    }
  }
);

// ---------------------------------------------------------------
// PUT /api/properties/:id
// Owner or admin can update.
// ---------------------------------------------------------------
router.put('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) return fail(res, 'Invalid property id.', 400);

  try {
    const existing = await pool.query('SELECT * FROM properties WHERE id = $1', [id]);
    if (existing.rows.length === 0) return fail(res, 'Property not found.', 404);

    const property = existing.rows[0];
    const isOwner = property.owner_id === req.user.id;
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) {
      return fail(res, 'You do not have permission to edit this property.', 403);
    }

    const updatableFields = {
      title: 'title', description: 'description', locality: 'locality', city: 'city',
      state: 'state', propertyType: 'property_type', price: 'price', sqft: 'sqft',
      bhk: 'bhk', bathrooms: 'bathrooms', badge: 'badge', imageEmoji: 'image_emoji',
      isFeatured: 'is_featured',
    };

    // Only admins may change status/approval directly through this endpoint
    if (isAdmin && req.body.status) {
      updatableFields.status = 'status';
    }

    const sets = [];
    const params = [];
    for (const [bodyKey, column] of Object.entries(updatableFields)) {
      if (req.body[bodyKey] !== undefined) {
        params.push(bodyKey === 'amenities' ? JSON.stringify(req.body[bodyKey]) : req.body[bodyKey]);
        sets.push(`${column} = $${params.length}`);
      }
    }

    if (sets.length === 0) {
      return fail(res, 'No valid fields provided to update.', 400);
    }

    sets.push(`updated_at = now()`);
    params.push(id);

    const result = await pool.query(
      `UPDATE properties SET ${sets.join(', ')} WHERE id = $${params.length} RETURNING *`,
      params
    );

    return ok(res, { property: mapProperty(result.rows[0]) });
  } catch (err) {
    console.error('Update property error:', err);
    return fail(res, 'Something went wrong while updating the listing.', 500);
  }
});

// ---------------------------------------------------------------
// DELETE /api/properties/:id
// Owner or admin can delete.
// ---------------------------------------------------------------
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) return fail(res, 'Invalid property id.', 400);

  try {
    const existing = await pool.query('SELECT owner_id FROM properties WHERE id = $1', [id]);
    if (existing.rows.length === 0) return fail(res, 'Property not found.', 404);

    const isOwner = existing.rows[0].owner_id === req.user.id;
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) {
      return fail(res, 'You do not have permission to delete this property.', 403);
    }

    await pool.query('DELETE FROM properties WHERE id = $1', [id]);
    return ok(res, { message: 'Property deleted successfully.' });
  } catch (err) {
    console.error('Delete property error:', err);
    return fail(res, 'Something went wrong while deleting the listing.', 500);
  }
});

// ---------------------------------------------------------------
// GET /api/properties/mine/listings
// Listings owned by the logged-in agent/builder.
// ---------------------------------------------------------------
router.get('/mine/listings', requireAuth, requireRole('agent', 'builder', 'admin'), async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM properties WHERE owner_id = $1 ORDER BY created_at DESC',
      [req.user.id]
    );
    return ok(res, { properties: result.rows.map(mapProperty) });
  } catch (err) {
    console.error('My listings error:', err);
    return fail(res, 'Something went wrong while fetching your listings.', 500);
  }
});

// ---------------------------------------------------------------
// GET /api/properties/admin/pending
// Admin-only: all listings awaiting moderation, regardless of owner.
// The public search endpoint above always excludes pending listings
// by design, so this is a separate route rather than a conditional
// branch in that query.
// ---------------------------------------------------------------
router.get('/admin/pending', requireAuth, requireRole('admin'), async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM properties WHERE status = 'pending' ORDER BY created_at ASC`
    );
    return ok(res, { properties: result.rows.map(mapProperty) });
  } catch (err) {
    console.error('Pending listings error:', err);
    return fail(res, 'Something went wrong while fetching pending listings.', 500);
  }
});

module.exports = router;
