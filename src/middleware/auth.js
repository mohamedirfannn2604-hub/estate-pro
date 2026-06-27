const { verifyToken } = require('../utils/jwt');
const { fail } = require('../utils/respond');

/**
 * Verifies a Bearer JWT and attaches the decoded payload to req.user.
 * Rejects the request if the token is missing or invalid.
 */
function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return fail(res, 'Authentication required. Provide a Bearer token.', 401);
  }

  try {
    req.user = verifyToken(token); // { id, email, role }
    return next();
  } catch (err) {
    return fail(res, 'Invalid or expired token.', 401);
  }
}

/**
 * Attaches req.user if a valid token is present, but does not
 * reject the request if it's missing. Useful for endpoints whose
 * behavior changes slightly when a user is logged in (e.g. search
 * results showing wishlist state) but that are otherwise public.
 */
function optionalAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme === 'Bearer' && token) {
    try {
      req.user = verifyToken(token);
    } catch (err) {
      // ignore invalid token in optional mode
    }
  }
  return next();
}

/**
 * Restricts access to one or more roles. Must be used after requireAuth.
 * Usage: requireRole('admin') or requireRole('agent', 'builder')
 */
function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return fail(res, 'Authentication required.', 401);
    }
    if (!allowedRoles.includes(req.user.role)) {
      return fail(res, 'You do not have permission to perform this action.', 403);
    }
    return next();
  };
}

module.exports = { requireAuth, optionalAuth, requireRole };
