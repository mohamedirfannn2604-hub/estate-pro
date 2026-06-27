-- ============================================================
-- EstateAI Pro — Database Schema
-- ============================================================

DROP TABLE IF EXISTS wishlists CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS agent_profiles CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- ---------------------------------------------------------------
-- USERS  (buyer | tenant | agent | builder | admin)
-- ---------------------------------------------------------------
CREATE TABLE users (
  id              SERIAL PRIMARY KEY,
  first_name      VARCHAR(80)  NOT NULL,
  last_name       VARCHAR(80)  NOT NULL,
  email           VARCHAR(255) NOT NULL UNIQUE,
  phone           VARCHAR(20),
  password_hash   VARCHAR(255) NOT NULL,
  role            VARCHAR(20)  NOT NULL DEFAULT 'buyer'
                  CHECK (role IN ('buyer','tenant','agent','builder','admin')),
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role  ON users(role);

-- ---------------------------------------------------------------
-- AGENT PROFILES (extra fields shown on the Agents page)
-- ---------------------------------------------------------------
CREATE TABLE agent_profiles (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  city            VARCHAR(120),
  specialization  VARCHAR(120),
  experience_years INTEGER DEFAULT 0,
  deals_closed    INTEGER DEFAULT 0,
  rating          NUMERIC(2,1) DEFAULT 0.0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------
-- PROPERTIES
-- ---------------------------------------------------------------
CREATE TABLE properties (
  id              SERIAL PRIMARY KEY,
  owner_id        INTEGER REFERENCES users(id) ON DELETE SET NULL,
  title           VARCHAR(200) NOT NULL,
  description     TEXT,
  locality        VARCHAR(160) NOT NULL,
  city            VARCHAR(100) NOT NULL,
  state           VARCHAR(100),
  listing_type    VARCHAR(10) NOT NULL CHECK (listing_type IN ('buy','rent')),
  property_type   VARCHAR(40) NOT NULL DEFAULT 'Apartment', -- Apartment, Villa, Penthouse, Office, Studio...
  price           NUMERIC(14,2) NOT NULL,         -- stored as raw rupees (e.g. 28500000.00)
  price_unit      VARCHAR(10) NOT NULL DEFAULT 'total', -- 'total' for buy, 'month' for rent
  sqft            INTEGER,
  bhk             INTEGER DEFAULT 0,
  bathrooms       INTEGER DEFAULT 0,
  badge           VARCHAR(40),                     -- Premium, Ready, New Launch, Verified, etc.
  image_emoji     VARCHAR(10) DEFAULT '🏠',
  amenities       JSONB DEFAULT '[]',
  status          VARCHAR(20) NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending','approved','rejected','sold','rented')),
  is_featured     BOOLEAN NOT NULL DEFAULT FALSE,
  views           INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_properties_city       ON properties(city);
CREATE INDEX idx_properties_listing    ON properties(listing_type);
CREATE INDEX idx_properties_type       ON properties(property_type);
CREATE INDEX idx_properties_price      ON properties(price);
CREATE INDEX idx_properties_bhk        ON properties(bhk);
CREATE INDEX idx_properties_status     ON properties(status);
CREATE INDEX idx_properties_owner      ON properties(owner_id);

-- ---------------------------------------------------------------
-- WISHLISTS  (buyer <-> property, many-to-many)
-- ---------------------------------------------------------------
CREATE TABLE wishlists (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  property_id     INTEGER NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, property_id)
);

CREATE INDEX idx_wishlists_user ON wishlists(user_id);
