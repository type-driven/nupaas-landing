# Codebase Structure

**Analysis Date:** 2026-03-09

## Directory Layout

```
nupaas-landing/
├── public/                  # Static assets served at root URL
│   └── favicon.svg          # Site favicon
├── src/                     # All application source code
│   ├── assets/              # Imported static assets (bundled by Vite)
│   │   ├── nupaas.svg       # Logo used by Navbar
│   │   └── screenshots/     # Product screenshots used by Hero and Showcase
│   │       ├── screen1.jpg
│   │       ├── screen2.jpg
│   │       └── screen3.jpg
│   ├── components/          # React components (one file per page section)
│   │   ├── ui/              # Reusable primitive components
│   │   │   ├── Button.tsx
│   │   │   ├── GradientText.tsx
│   │   │   ├── ScreenshotFrame.tsx
│   │   │   └── SectionWrapper.tsx
│   │   ├── Comparison.tsx
│   │   ├── DesignPartnerCTA.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Navbar.tsx
│   │   ├── Personas.tsx
│   │   ├── Problem.tsx
│   │   ├── Showcase.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Solution.tsx
│   │   └── Sovereignty.tsx
│   ├── styles/              # CSS files — one per component plus globals
│   │   ├── variables.css    # All CSS custom properties (design tokens)
│   │   ├── reset.css        # CSS reset
│   │   ├── global.css       # Body, typography, container, scroll-reveal animations
│   │   ├── button.css
│   │   ├── comparison.css
│   │   ├── cta.css
│   │   ├── features.css
│   │   ├── footer.css
│   │   ├── gradient-text.css
│   │   ├── hero.css
│   │   ├── how-it-works.css
│   │   ├── nav.css
│   │   ├── personas.css
│   │   ├── problem.css
│   │   ├── screenshot-frame.css
│   │   ├── showcase.css
│   │   ├── social-proof.css
│   │   ├── solution.css
│   │   └── sovereignty.css
│   ├── App.tsx              # Root component — sequences all sections
│   └── main.tsx             # React entry point
├── index.html               # HTML shell — sets metadata, loads fonts, mounts #root
├── vite.config.ts           # Vite configuration (React plugin, port 3000)
├── package.json             # Dependencies and scripts
├── deno.json                # Deno configuration (present alongside npm)
├── deno.lock                # Deno lockfile
└── package-lock.json        # npm lockfile
```

## Directory Purposes

**`src/components/ui/`:**
- Purpose: Primitive UI components reused by multiple section components
- Contains: Layout primitives (`SectionWrapper`), interactive elements (`Button`), display utilities (`GradientText`, `ScreenshotFrame`)
- Key files: `src/components/ui/SectionWrapper.tsx` — the scroll-reveal wrapper used by most sections

**`src/components/`:**
- Purpose: One React component per named landing page section
- Contains: Self-contained sections that import their own CSS and define static data as in-file constants
- Key files: `src/components/DesignPartnerCTA.tsx` — the only component with external API integration (Formspree)

**`src/styles/`:**
- Purpose: All CSS, organized per component with global tokens at the top
- Contains: Design token definitions in `variables.css`, global layout rules in `global.css`, component-scoped CSS files
- Key files: `src/styles/variables.css` — single source of truth for all colors, spacing, typography, and shadow values

**`src/assets/`:**
- Purpose: Static assets imported directly into components and bundled by Vite
- Contains: SVG logo and JPEG product screenshots
- Key files: `src/assets/screenshots/screen1.jpg` (Hero), `src/assets/screenshots/screen2.jpg` (Showcase)

**`public/`:**
- Purpose: Assets served at root URL without processing
- Contains: `favicon.svg` only
- Generated: No — manually placed
- Committed: Yes

## Key File Locations

**Entry Points:**
- `index.html`: HTML shell, page metadata, Google Fonts preconnect
- `src/main.tsx`: React bootstrap (`createRoot`), global CSS import

**Configuration:**
- `vite.config.ts`: Vite build config — React plugin, dev server port 3000
- `package.json`: npm scripts (`dev`, `build`, `preview`, `deploy`), dependency versions
- `deno.json`: Deno config (project uses both npm and Deno tooling)

**Core Logic:**
- `src/App.tsx`: Page composition order and `useParallax` scroll hook
- `src/components/ui/SectionWrapper.tsx`: Scroll-reveal animation system
- `src/components/DesignPartnerCTA.tsx`: Formspree integration, early access form

**Design System:**
- `src/styles/variables.css`: All CSS custom properties
- `src/styles/global.css`: Typography, `.container`, `.section` / `.section-revealed` classes, `.reveal-children` stagger system

## Naming Conventions

**Files:**
- Section components: PascalCase matching section name — `Hero.tsx`, `HowItWorks.tsx`, `DesignPartnerCTA.tsx`
- UI primitives: PascalCase — `Button.tsx`, `SectionWrapper.tsx`
- CSS files: kebab-case matching component name — `hero.css`, `how-it-works.css`, `screenshot-frame.css`
- Assets: lowercase with hyphens — `nupaas.svg`, `screen1.jpg`

**Directories:**
- All lowercase: `components/`, `ui/`, `styles/`, `assets/`, `screenshots/`

**Exports:**
- All components use named exports (`export function ComponentName`), never default exports

## Where to Add New Code

**New Landing Page Section:**
- Component: `src/components/NewSection.tsx` — named export, import `SectionWrapper` for scroll-reveal, import its CSS
- CSS: `src/styles/new-section.css` — scoped styles using BEM-like class names (e.g., `.new-section`, `.new-section-title`)
- Register: Add import and `<NewSection />` to `src/App.tsx` in the desired position

**New UI Primitive:**
- Implementation: `src/components/ui/NewPrimitive.tsx`
- CSS: `src/styles/new-primitive.css` (imported inside the component file)

**New Static Asset (image/svg):**
- Import-bundled (used in JSX): place in `src/assets/` and use `import assetUrl from "../assets/filename.ext"`
- Served at root URL (e.g., referenced in HTML): place in `public/`

**Utilities / Hooks:**
- No `utils/` or `hooks/` directory exists. Custom hooks are currently co-located in the component that uses them (`useParallax` in `App.tsx`). A shared hook should go in `src/hooks/` (directory does not exist yet — create it).

## Special Directories

**`.planning/`:**
- Purpose: GSD planning documents (architecture maps, phase plans)
- Generated: No — created by GSD tooling
- Committed: Yes (per project convention)

**`node_modules/`:**
- Purpose: npm package dependencies
- Generated: Yes (`npm install`)
- Committed: No

---

*Structure analysis: 2026-03-09*
