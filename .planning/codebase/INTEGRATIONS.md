# External Integrations

**Analysis Date:** 2026-03-09

## APIs & External Services

**Form Handling:**
- Formspree - Receives design partner application form submissions
  - SDK/Client: `@formspree/react` ^2.0.0
  - Form ID: `xdalqpbq` (hardcoded in `src/components/DesignPartnerCTA.tsx`)
  - Usage: `useForm(FORMSPREE_ID)` hook drives the contact form; `ValidationError` renders field errors
  - Auth: No API key required in client — form ID alone identifies the endpoint
  - Honeypot spam protection: hidden `_gotcha` field included in form

## Data Storage

**Databases:**
- None — this is a fully static marketing/landing site with no backend

**File Storage:**
- Local static assets served by Vite/Cloudflare Pages
  - Screenshots: `src/assets/screenshots/screen1.jpg`, `screen2.jpg`, `screen3.jpg`
  - Logo: `src/assets/nupaas.svg`
  - Favicon: `public/favicon.svg`

**Caching:**
- None (Cloudflare Pages provides CDN caching at the edge automatically)

## Authentication & Identity

**Auth Provider:**
- None — no user authentication in this application

## Monitoring & Observability

**Error Tracking:**
- None detected

**Analytics:**
- None detected (no Google Analytics, Plausible, PostHog, Segment, or similar)

**Logs:**
- Browser console only; no server-side logging

## CI/CD & Deployment

**Hosting:**
- Cloudflare Pages (static CDN)
- Deploy command: `wrangler pages deploy` (via `npm run deploy` in `package.json`)
- No `wrangler.toml` present — uses Cloudflare Pages classic build config

**CI Pipeline:**
- None detected (no GitHub Actions, CircleCI, or similar config files)

## Environment Configuration

**Required env vars:**
- None required for build or runtime
- No `.env` files exist in the project

**Secrets location:**
- No secrets present; Formspree form ID (`xdalqpbq`) is a public identifier embedded directly in `src/components/DesignPartnerCTA.tsx`

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- Formspree form submissions POST to `https://formspree.io/f/xdalqpbq` (handled internally by the `@formspree/react` SDK)

## External Font Loading

**Google Fonts:**
- Loaded via `<link>` tags in `index.html`
- Families: Manrope (weights 400–800) and Poppins (weights 300–600)
- Requests go to `fonts.googleapis.com` and `fonts.gstatic.com`
- Preconnect hints present for both origins

---

*Integration audit: 2026-03-09*
