# Technology Stack

**Analysis Date:** 2026-03-09

## Languages

**Primary:**
- TypeScript/TSX - All application source code in `src/`
- CSS - Component-scoped stylesheets in `src/styles/`

**Secondary:**
- HTML - Single entry point at `index.html`

## Runtime

**Environment:**
- Node.js v25.6.1 (via npm scripts: `npm run dev`, `npm run build`)
- Deno 2.6.9 (alternative runtime via `deno.json` tasks; supports `deno run -A npm:vite`)

**Package Manager:**
- npm 11.9.0 (primary, `package-lock.json` present)
- Deno also supported via `deno.lock` and `deno.json` import maps
- Lockfile: both `package-lock.json` and `deno.lock` present

## Frameworks

**Core:**
- React 19 - UI rendering, component model
- No router — single-page static site, no client-side routing

**Build/Dev:**
- Vite 6 - Dev server (port 3000) and production bundler
- `@vitejs/plugin-react` 4 - Babel-based JSX transform for Vite

**Deployment:**
- Wrangler 4 - Cloudflare Pages deployment CLI (`wrangler pages deploy`)

## Key Dependencies

**Critical:**
- `react` ^19.0.0 - Core UI framework
- `react-dom` ^19.0.0 - DOM rendering
- `@formspree/react` ^2.0.0 - Form submission to Formspree service (used in `src/components/DesignPartnerCTA.tsx`)

**DevDependencies:**
- `vite` ^6.0.0 - Build tooling
- `@vitejs/plugin-react` ^4.0.0 - React JSX support in Vite
- `wrangler` ^4.0.0 - Cloudflare Pages deployment

## Configuration

**Environment:**
- No `.env` files present
- No runtime environment variables required for the frontend build
- Formspree form ID is hardcoded in source: `FORMSPREE_ID = "xdalqpbq"` in `src/components/DesignPartnerCTA.tsx`

**Build:**
- `vite.config.ts` - Vite config with React plugin, dev server on port 3000
- `deno.json` - Deno import map, compilerOptions (jsx: react-jsx, lib: dom/esnext), and task aliases
- `tsconfig` - Not present; TypeScript config is embedded in `deno.json` compilerOptions

**Fonts:**
- Google Fonts loaded via `<link>` in `index.html`: Manrope (400–800) and Poppins (300–600)

## Platform Requirements

**Development:**
- Node.js ≥18 (Wrangler 4 requirement) or Deno 2.x
- `npm install` to restore `node_modules`
- `npm run dev` starts Vite at `http://localhost:3000`

**Production:**
- Cloudflare Pages (static hosting)
- Build: `npm run build` → Vite outputs to `dist/`
- Deploy: `npm run deploy` runs build then `wrangler pages deploy`
- No server-side runtime required — fully static output

---

*Stack analysis: 2026-03-09*
