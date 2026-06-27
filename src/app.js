require('dotenv').config({ quiet: true });

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');
const wishlistRoutes = require('./routes/wishlist');
const agentRoutes = require('./routes/agents');
const statsRoutes = require('./routes/stats');
const { fail } = require('./utils/respond');

const app = express();

// ---------------------------------------------------------------
// Core middleware
// ---------------------------------------------------------------
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Generic rate limiter — generous, but stops obvious abuse
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(generalLimiter);

// Stricter limiter specifically for auth endpoints (brute-force protection)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many attempts. Please try again later.' },
});

// ---------------------------------------------------------------
// Routes
// ---------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok', timestamp: new Date().toISOString() } });
});

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/stats', statsRoutes);

// ---------------------------------------------------------------
// Serve the frontend (single-file HTML app)
// ---------------------------------------------------------------
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// ---------------------------------------------------------------
// 404 handler
// ---------------------------------------------------------------
app.use((req, res) => {
  return fail(res, `Route not found: ${req.method} ${req.originalUrl}`, 404);
});

// ---------------------------------------------------------------
// Global error handler
// ---------------------------------------------------------------
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  return fail(res, 'An unexpected error occurred.', 500);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 EstateAI Pro API running on http://localhost:${PORT}`);
});

module.exports = app;
