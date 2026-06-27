const express = require('express');
const pool = require('../db/pool');
const { ok, fail } = require('../utils/respond');

const router = express.Router();

// ---------------------------------------------------------------
// GET /api/agents
// Public list of agents with their profile stats, for the Agents page.
// Optional query: city
// ---------------------------------------------------------------
router.get('/', async (req, res) => {
  const { city } = req.query;
  const conditions = [`u.role = 'agent'`, `u.is_active = TRUE`];
  const params = [];

  if (city) {
    params.push(city);
    conditions.push(`ap.city ILIKE $${params.length}`);
  }

  try {
    const result = await pool.query(
      `SELECT u.id, u.first_name, u.last_name, ap.city, ap.specialization,
              ap.experience_years, ap.deals_closed, ap.rating
       FROM users u
       LEFT JOIN agent_profiles ap ON ap.user_id = u.id
       WHERE ${conditions.join(' AND ')}
       ORDER BY ap.deals_closed DESC NULLS LAST`,
      params
    );

    const agents = result.rows.map((row) => ({
      id: row.id,
      name: `${row.first_name} ${row.last_name}`,
      city: row.city,
      specialization: row.specialization,
      experienceYears: row.experience_years,
      dealsClosed: row.deals_closed,
      rating: row.rating ? Number(row.rating) : null,
      initials: `${row.first_name?.[0] || ''}${row.last_name?.[0] || ''}`.toUpperCase(),
    }));

    return ok(res, { agents });
  } catch (err) {
    console.error('List agents error:', err);
    return fail(res, 'Something went wrong while fetching agents.', 500);
  }
});

module.exports = router;
