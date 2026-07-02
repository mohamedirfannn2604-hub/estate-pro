EstateAI Pro — Backend
A Node.js + Express + PostgreSQL backend for the EstateAI Pro frontend, covering:
auth (JWT, role-based), property CRUD, search/filtering, wishlists, and an agents directory.
Pushing to GitHub
Extract this archive into an empty folder, then from inside that folder:
```bash
git init
git add .
git commit -m "Initial commit: EstateAI Pro backend"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
`.env` is already excluded via `.gitignore` — never commit real secrets.
Anyone cloning the repo should copy `.env.example` to `.env` and fill in their
own values before running `npm run setup`.
What's real vs. what's still mocked
Wired to the real backend: login, register, "Sign In"/"Sign Out" nav state,
the Listings page (search results, Buy/Rent toggle, City filter, sort dropdown,
pagination count), and the wishlist heart icon on property cards.
Still the original static demo (out of scope for this pass): the rest of the
buyer/tenant/agent/builder/admin dashboards, leads/leases/payments/maintenance/KYC,
the AI chat (which calls `api.anthropic.com` directly from the browser — you'll
want to proxy that through your own backend before shipping, since it has no
API key wired in and shouldn't ever get one client-side), and the property
detail page (still shows the hardcoded "Prestige Sky High" example).
1. Requirements
Node.js 18+
PostgreSQL 14+
2. Setup
```bash
npm install
cp .env.example .env   # edit DB credentials, JWT\_SECRET
npm run setup           # runs migration + seed
npm run dev             # starts on http://localhost:4000
```
Visit `http://localhost:4000` — the frontend is served from `/public/index.html`
by the same server, so there's no separate frontend process to run.
3. Demo accounts (all use password: `password123`)
Role	Email
buyer	buyer@demo.com
tenant	tenant@demo.com
agent	agent@demo.com
agent	agent2@demo.com
builder	builder@demo.com
admin	admin@demo.com
4. API summary
```
POST   /api/auth/register          create account (buyer/tenant/agent/builder)
POST   /api/auth/login             returns { user, token }
GET    /api/auth/me                requires Bearer token

GET    /api/properties             public search: q, listingType, propertyType,
                                    city, minPrice, maxPrice, bhk, minBhk, sort,
                                    page, limit
GET    /api/properties/:id
POST   /api/properties             agent/builder/admin only (status=pending
                                    unless admin)
PUT    /api/properties/:id         owner or admin only; only admin can change status
DELETE /api/properties/:id         owner or admin only
GET    /api/properties/mine/listings   agent/builder/admin only

GET    /api/wishlist               requires auth
POST   /api/wishlist/:id
DELETE /api/wishlist/:id
POST   /api/wishlist/:id/toggle

GET    /api/agents                 public, optional ?city=

GET    /api/stats                  public live counts: listings, agents, cities
                                    (admins also get pendingModeration count)
GET    /api/properties/admin/pending   admin only — listings awaiting moderation
```
All responses follow `{ success: true, data: {...} }` or
`{ success: false, error: "...", details?: \[...] }`.
5. Deployment options
Railway / Render: both support a Node web service + managed Postgres
add-on out of the box. Point `DATABASE\_URL` (or the individual `DB\_\*` vars)
at the managed instance, set `JWT\_SECRET` to a long random value, run
`npm run setup` once via their shell/console, then deploy.
Fly.io: similar — `fly postgres create`, attach it to the app, set secrets,
deploy with a basic `Dockerfile` (`node:18-slim`, `npm ci`, `npm start`).
Your own VPS: install Postgres + Node, use `pm2` or a systemd unit to keep
`node src/app.js` running, put nginx in front for TLS.
Wherever you deploy, change:
`JWT\_SECRET` to a long random value (never reuse the one in this `.env`)
`CORS\_ORIGIN` to your actual frontend origin instead of `\*`
Database credentials to the managed instance's connection info
6. Security notes for production
Rate limiting is already in place (general + stricter on `/api/auth`).
Passwords are hashed with bcrypt (cost factor 10).
Ownership/role checks are enforced server-side on every write endpoint —
the frontend's role selector is just UX, not a security boundary.
`helmet()` sets sensible default security headers.
Consider adding HTTPS termination (via your host or a reverse proxy) before
going live — this server speaks plain HTTP.
