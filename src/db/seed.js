/**
 * Seeds the database with demo users, agent profiles, and properties
 * mirroring the data already present in the EstateAI Pro frontend.
 *
 * Usage: node src/db/seed.js
 *
 * All seeded users share the password: password123
 */
const bcrypt = require('bcryptjs');
const pool = require('./pool');

const DEMO_PASSWORD = 'password123';

const USERS = [
  { first_name: 'Priya',   last_name: 'Sharma',  email: 'buyer@demo.com',   phone: '+91 98765 43210', role: 'buyer'   },
  { first_name: 'Karan',   last_name: 'Verma',    email: 'tenant@demo.com',  phone: '+91 98765 43211', role: 'tenant'  },
  { first_name: 'Rohit',   last_name: 'Kapoor',  email: 'agent@demo.com',   phone: '+91 98765 43212', role: 'agent'   },
  { first_name: 'Neha',    last_name: 'Singh',   email: 'agent2@demo.com',  phone: '+91 98765 43213', role: 'agent'   },
  { first_name: 'Arjun',   last_name: 'Menon',   email: 'agent3@demo.com',  phone: '+91 98765 43214', role: 'agent'   },
  { first_name: 'Deepika', last_name: 'Rao',     email: 'agent4@demo.com',  phone: '+91 98765 43215', role: 'agent'   },
  { first_name: 'Vikram',  last_name: 'Builder', email: 'builder@demo.com', phone: '+91 98765 43216', role: 'builder' },
  { first_name: 'Admin',   last_name: 'User',    email: 'admin@demo.com',   phone: '+91 98765 43217', role: 'admin'   },
];

const AGENT_PROFILES = {
  'agent@demo.com':  { city: 'Mumbai',     specialization: 'Luxury Residential', experience_years: 8, deals_closed: 284, rating: 4.9 },
  'agent2@demo.com': { city: 'Bangalore',  specialization: 'Apartments',         experience_years: 6, deals_closed: 196, rating: 4.8 },
  'agent3@demo.com': { city: 'Delhi NCR',  specialization: 'Commercial',         experience_years: 5, deals_closed: 142, rating: 4.7 },
  'agent4@demo.com': { city: 'Hyderabad',  specialization: 'Villas & Plots',     experience_years: 9, deals_closed: 218, rating: 4.9 },
};

// price stored in raw rupees; price_unit 'total' (buy) or 'month' (rent)
const PROPERTIES = [
  { title: 'Prestige Sky High',     locality: 'Bandra West',    city: 'Mumbai',     state: 'Maharashtra', listing_type: 'buy',  property_type: 'Apartment', price: 28500000, price_unit: 'total', sqft: 1540, bhk: 3, bathrooms: 3, badge: 'Premium',    image_emoji: '🏙', status: 'approved', is_featured: true,  owner_email: 'agent@demo.com' },
  { title: 'Brigade Triumph',       locality: 'Koramangala',    city: 'Bangalore',  state: 'Karnataka',    listing_type: 'buy',  property_type: 'Apartment', price: 12400000, price_unit: 'total', sqft: 1180, bhk: 3, bathrooms: 2, badge: 'Ready',       image_emoji: '🏘', status: 'approved', is_featured: false, owner_email: 'agent2@demo.com' },
  { title: 'DLF Park Residences',   locality: 'Sector 54',      city: 'Gurgaon',    state: 'Haryana',      listing_type: 'buy',  property_type: 'Apartment', price: 18500000, price_unit: 'total', sqft: 1850, bhk: 4, bathrooms: 3, badge: 'New Launch',  image_emoji: '🏗', status: 'approved', is_featured: true,  owner_email: 'agent3@demo.com' },
  { title: 'Lodha Serenity Villa',  locality: 'Palava City',    city: 'Thane',      state: 'Maharashtra',  listing_type: 'buy',  property_type: 'Villa',     price: 38000000, price_unit: 'total', sqft: 3200, bhk: 4, bathrooms: 4, badge: 'Luxury',      image_emoji: '🏡', status: 'approved', is_featured: false, owner_email: 'builder@demo.com' },
  { title: 'Godrej Summit',         locality: 'Whitefield',     city: 'Bangalore',  state: 'Karnataka',    listing_type: 'buy',  property_type: 'Apartment', price: 8800000,  price_unit: 'total', sqft: 1020, bhk: 2, bathrooms: 2, badge: 'Verified',    image_emoji: '🏢', status: 'approved', is_featured: false, owner_email: 'agent2@demo.com' },
  { title: 'Sea View Penthouse',    locality: 'Marine Lines',   city: 'Mumbai',     state: 'Maharashtra',  listing_type: 'buy',  property_type: 'Penthouse', price: 55000000, price_unit: 'total', sqft: 2800, bhk: 4, bathrooms: 4, badge: 'Premium',     image_emoji: '🌊', status: 'approved', is_featured: true,  owner_email: 'agent@demo.com' },
  { title: 'Urban Studio',          locality: 'Indiranagar',    city: 'Bangalore',  state: 'Karnataka',    listing_type: 'rent', property_type: 'Apartment', price: 38000,    price_unit: 'month', sqft: 520,  bhk: 1, bathrooms: 1, badge: 'Rent',        image_emoji: '🏠', status: 'approved', is_featured: false, owner_email: 'agent2@demo.com' },
  { title: 'Hiranandani 2BHK',      locality: 'Powai',          city: 'Mumbai',     state: 'Maharashtra',  listing_type: 'rent', property_type: 'Apartment', price: 55000,    price_unit: 'month', sqft: 940,  bhk: 2, bathrooms: 2, badge: 'Rent',        image_emoji: '🏘', status: 'approved', is_featured: false, owner_email: 'agent@demo.com' },
  { title: 'Phoenix Towers Office', locality: 'BKC',            city: 'Mumbai',     state: 'Maharashtra',  listing_type: 'buy',  property_type: 'Office',    price: 22000000, price_unit: 'total', sqft: 1200, bhk: 0, bathrooms: 2, badge: 'Commercial',  image_emoji: '🏢', status: 'approved', is_featured: false, owner_email: 'builder@demo.com' },
  { title: 'Prestige Sunrise 3BHK', locality: 'Hiranandani',    city: 'Mumbai',     state: 'Maharashtra',  listing_type: 'rent', property_type: 'Apartment', price: 78000,    price_unit: 'month', sqft: 1450, bhk: 3, bathrooms: 3, badge: 'Rent',        image_emoji: '🏘', status: 'approved', is_featured: false, owner_email: 'agent@demo.com' },
  { title: 'Hebbal Lakeview Flat',  locality: 'Hebbal',         city: 'Bangalore',  state: 'Karnataka',    listing_type: 'buy',  property_type: 'Apartment', price: 9600000,  price_unit: 'total', sqft: 1100, bhk: 2, bathrooms: 2, badge: 'Verified',    image_emoji: '🏞', status: 'pending',  is_featured: false, owner_email: 'agent3@demo.com' },
  { title: 'Sobha Dream Acres',     locality: 'Panathur',       city: 'Bangalore',  state: 'Karnataka',    listing_type: 'buy',  property_type: 'Apartment', price: 7200000,  price_unit: 'total', sqft: 980,  bhk: 2, bathrooms: 2, badge: 'Ready',       image_emoji: '🏡', status: 'approved', is_featured: false, owner_email: 'agent4@demo.com' },
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    console.log('Clearing existing data...');
    await client.query('TRUNCATE wishlists, properties, agent_profiles, users RESTART IDENTITY CASCADE');

    console.log('Seeding users...');
    const passwordHash = await bcrypt.hash(DEMO_PASSWORD, 10);
    const emailToId = {};

    for (const u of USERS) {
      const res = await client.query(
        `INSERT INTO users (first_name, last_name, email, phone, password_hash, role)
         VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`,
        [u.first_name, u.last_name, u.email, u.phone, passwordHash, u.role]
      );
      emailToId[u.email] = res.rows[0].id;
    }

    console.log('Seeding agent profiles...');
    for (const [email, profile] of Object.entries(AGENT_PROFILES)) {
      await client.query(
        `INSERT INTO agent_profiles (user_id, city, specialization, experience_years, deals_closed, rating)
         VALUES ($1,$2,$3,$4,$5,$6)`,
        [emailToId[email], profile.city, profile.specialization, profile.experience_years, profile.deals_closed, profile.rating]
      );
    }

    console.log('Seeding properties...');
    for (const p of PROPERTIES) {
      await client.query(
        `INSERT INTO properties
          (owner_id, title, description, locality, city, state, listing_type, property_type,
           price, price_unit, sqft, bhk, bathrooms, badge, image_emoji, status, is_featured)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
        [
          emailToId[p.owner_email], p.title, p.description || null, p.locality, p.city, p.state,
          p.listing_type, p.property_type, p.price, p.price_unit, p.sqft, p.bhk, p.bathrooms,
          p.badge, p.image_emoji, p.status, p.is_featured,
        ]
      );
    }

    await client.query('COMMIT');
    console.log('✅ Seed complete.');
    console.log('');
    console.log('Demo accounts (all use password: ' + DEMO_PASSWORD + '):');
    USERS.forEach(u => console.log(`  ${u.role.padEnd(8)} -> ${u.email}`));
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Seed failed:', err);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
