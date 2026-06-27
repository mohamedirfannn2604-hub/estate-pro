const express = require('express');
const pool = require('../db/pool');
const { ok, fail } = require('../utils/respond');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// ---------------------------------------------------------------
// GET /api/wishlist
// List the logged-in user's wishlisted properties.
// ---------------------------------------------------------------
router.get('/', requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT p.*, TRUE AS is_wishlisted
       FROM wishlists w
       JOIN properties p ON p.id = w.property_id
       WHERE w.user_id = $1
       ORDER BY w.created_at DESC`,
      [req.user.id]
    );

    const properties = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      locality: row.locality,
      city: row.city,
      listingType: row.listing_type,
      propertyType: row.property_type,
      price: Number(row.price),
      priceUnit: row.price_unit,
      sqft: row.sqft,
      bhk: row.bhk,
      bathrooms: row.bathrooms,
      badge: row.badge,
      imageEmoji: row.image_emoji,
      isWishlisted: true,
    }));

    return ok(res, { properties });
  } catch (err) {
    console.error('Get wishlist error:', err);
    return fail(res, 'Something went wrong while fetching your wishlist.', 500);
  }
});

// ---------------------------------------------------------------
// POST /api/wishlist/:propertyId
// Add a property to the wishlist (idempotent).
// ---------------------------------------------------------------
router.post('/:propertyId', requireAuth, async (req, res) => {
  const { propertyId } = req.params;
  if (!/^\d+$/.test(propertyId)) return fail(res, 'Invalid property id.', 400);

  try {
    const propertyCheck = await pool.query('SELECT id FROM properties WHERE id = $1', [propertyId]);
    if (propertyCheck.rows.length === 0) {
      return fail(res, 'Property not found.', 404);
    }

    await pool.query(
      `INSERT INTO wishlists (user_id, property_id) VALUES ($1, $2)
       ON CONFLICT (user_id, property_id) DO NOTHING`,
      [req.user.id, propertyId]
    );

    return ok(res, { message: 'Added to wishlist.', propertyId: Number(propertyId), wishlisted: true });
  } catch (err) {
    console.error('Add wishlist error:', err);
    return fail(res, 'Something went wrong while updating your wishlist.', 500);
  }
});

// ---------------------------------------------------------------
// DELETE /api/wishlist/:propertyId
// ---------------------------------------------------------------
router.delete('/:propertyId', requireAuth, async (req, res) => {
  const { propertyId } = req.params;
  if (!/^\d+$/.test(propertyId)) return fail(res, 'Invalid property id.', 400);

  try {
    await pool.query(
      'DELETE FROM wishlists WHERE user_id = $1 AND property_id = $2',
      [req.user.id, propertyId]
    );
    return ok(res, { message: 'Removed from wishlist.', propertyId: Number(propertyId), wishlisted: false });
  } catch (err) {
    console.error('Remove wishlist error:', err);
    return fail(res, 'Something went wrong while updating your wishlist.', 500);
  }
});

// ---------------------------------------------------------------
// POST /api/wishlist/:propertyId/toggle
// Convenience endpoint matching the frontend's single-click heart icon.
// ---------------------------------------------------------------
router.post('/:propertyId/toggle', requireAuth, async (req, res) => {
  const { propertyId } = req.params;
  if (!/^\d+$/.test(propertyId)) return fail(res, 'Invalid property id.', 400);

  try {
    const existing = await pool.query(
      'SELECT id FROM wishlists WHERE user_id = $1 AND property_id = $2',
      [req.user.id, propertyId]
    );

    if (existing.rows.length > 0) {
      await pool.query('DELETE FROM wishlists WHERE user_id = $1 AND property_id = $2', [req.user.id, propertyId]);
      return ok(res, { propertyId: Number(propertyId), wishlisted: false });
    } else {
      const propertyCheck = await pool.query('SELECT id FROM properties WHERE id = $1', [propertyId]);
      if (propertyCheck.rows.length === 0) {
        return fail(res, 'Property not found.', 404);
      }
      await pool.query('INSERT INTO wishlists (user_id, property_id) VALUES ($1, $2)', [req.user.id, propertyId]);
      return ok(res, { propertyId: Number(propertyId), wishlisted: true });
    }
  } catch (err) {
    console.error('Toggle wishlist error:', err);
    return fail(res, 'Something went wrong while updating your wishlist.', 500);
  }
});

module.exports = router;
