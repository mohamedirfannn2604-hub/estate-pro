const express = require('express');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const pool = require('../db/pool');
const { signToken } = require('../utils/jwt');
const { ok, fail } = require('../utils/respond');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

const ALLOWED_ROLES = ['buyer', 'tenant', 'agent', 'builder'];
// Note: 'admin' is intentionally excluded from self-registration.
// Admin accounts must be created directly in the database.

function sanitizeUser(row) {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    role: row.role,
    createdAt: row.created_at,
  };
}

// ---------------------------------------------------------------
// POST /api/auth/register
// ---------------------------------------------------------------
router.post(
  '/register',
  [
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
    body('email').trim().isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('phone').optional().trim(),
    body('role').optional().isIn(ALLOWED_ROLES).withMessage(`Role must be one of: ${ALLOWED_ROLES.join(', ')}`),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return fail(res, 'Validation failed', 422, errors.array());
    }

    const { firstName, lastName, email, password, phone } = req.body;
    const role = req.body.role || 'buyer';

    try {
      const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
      if (existing.rows.length > 0) {
        return fail(res, 'An account with this email already exists.', 409);
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const result = await pool.query(
        `INSERT INTO users (first_name, last_name, email, phone, password_hash, role)
         VALUES ($1,$2,$3,$4,$5,$6)
         RETURNING id, first_name, last_name, email, phone, role, created_at`,
        [firstName, lastName, email, phone || null, passwordHash, role]
      );

      const user = result.rows[0];

      // If registering as an agent, create an empty agent profile too
      if (role === 'agent') {
        await pool.query(
          `INSERT INTO agent_profiles (user_id) VALUES ($1)`,
          [user.id]
        );
      }

      const token = signToken({ id: user.id, email: user.email, role: user.role });

      return ok(res, { user: sanitizeUser(user), token }, 201);
    } catch (err) {
      console.error('Register error:', err);
      return fail(res, 'Something went wrong while creating your account.', 500);
    }
  }
);

// ---------------------------------------------------------------
// POST /api/auth/login
// ---------------------------------------------------------------
router.post(
  '/login',
  [
    body('email').trim().isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return fail(res, 'Validation failed', 422, errors.array());
    }

    const { email, password } = req.body;

    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];

      // Use a generic error message for both "no such user" and "wrong password"
      // to avoid leaking which emails are registered.
      if (!user) {
        return fail(res, 'Invalid email or password.', 401);
      }

      if (!user.is_active) {
        return fail(res, 'This account has been deactivated.', 403);
      }

      const passwordMatches = await bcrypt.compare(password, user.password_hash);
      if (!passwordMatches) {
        return fail(res, 'Invalid email or password.', 401);
      }

      const token = signToken({ id: user.id, email: user.email, role: user.role });

      return ok(res, { user: sanitizeUser(user), token });
    } catch (err) {
      console.error('Login error:', err);
      return fail(res, 'Something went wrong while signing in.', 500);
    }
  }
);

// ---------------------------------------------------------------
// GET /api/auth/me
// ---------------------------------------------------------------
router.get('/me', requireAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    const user = result.rows[0];
    if (!user) {
      return fail(res, 'User not found.', 404);
    }
    return ok(res, { user: sanitizeUser(user) });
  } catch (err) {
    console.error('Me error:', err);
    return fail(res, 'Something went wrong while fetching your profile.', 500);
  }
});

module.exports = router;
