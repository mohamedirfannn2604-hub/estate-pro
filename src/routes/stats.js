const express = require('express');
const pool = require('../db/pool');
const { ok, fail } = require('../utils/respond');
const { optionalAuth } = require('../middleware/auth');

const router = express.Router();

// ---------------------------------------------------------------
// GET /api/stats
// Public, real-time platform counts — used by the homepage hero,
// the Agents page banner, and the registration modal. Every number
// here is a live COUNT() against the database; nothing is hardcoded.
//
// If the requester is an authenticated admin, the response also
// includes pendingModeration — the live count of listings awaiting
// approval, used for the Admin Dashboard's moderation badge.
// ---------------------------------------------------------------
router.get('/', optionalAuth, async (req, res) => {
  try {
    const [listings, agents, cities] = await Promise.all([
      pool.query(`SELECT COUNT(*) FROM properties WHERE status = 'approved'`),
      pool.query(`SELECT COUNT(*) FROM users WHERE role = 'agent' AND is_active = TRUE`),
      pool.query(`SELECT COUNT(DISTINCT city) FROM properties WHERE status = 'approved'`),
    ]);

    const data = {
      listings: parseInt(listings.rows[0].count, 10),
      agents: parseInt(agents.rows[0].count, 10),
      cities: parseInt(cities.rows[0].count, 10),
    };

    if (req.user && req.user.role === 'admin') {
      const pending = await pool.query(`SELECT COUNT(*) FROM properties WHERE status = 'pending'`);
      data.pendingModeration = parseInt(pending.rows[0].count, 10);
    }

    return ok(res, data);
  } catch (err) {
    console.error('Stats error:', err);
    return fail(res, 'Something went wrong while fetching platform stats.', 500);
  }
});

module.exports = router;
