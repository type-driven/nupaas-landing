# Architecture

**Analysis Date:** 2026-03-09

## Pattern Overview

**Overall:** Single-page marketing site — static React app with no routing, no backend, and no state management library.

**Key Characteristics:**
- Linear page composition: `App.tsx` sequences all section components top-to-bottom in a single render tree
- No client-side routing — the page is one URL, all navigation is anchor links (`#section-id`)
- All data is static — feature lists, comparison rows, testimonials are defined as in-module constants (no API calls)
- One external integration: Formspree for form submission in `src/components/DesignPartnerCTA.tsx`

## Layers

**UI Primitives (`src/components/ui/`):**
- Purpose: Reusable, layout-agnostic building blocks shared across sections
- Location: `src/components/ui/`
- Contains: `Button.tsx`, `GradientText.tsx`, `ScreenshotFrame.tsx`, `SectionWrapper.tsx`
- Depends on: CSS from `src/styles/`
- Used by: Section components in `src/components/`

**Section Components (`src/components/`):**
- Purpose: Each file renders one named section of the landing page
- Location: `src/components/`
- Contains: `Hero.tsx`, `Navbar.tsx`, `SocialProof.tsx`, `Showcase.tsx`, `Problem.tsx`, `Solution.tsx`, `HowItWorks.tsx`, `Features.tsx`, `Comparison.tsx`, `Sovereignty.tsx`, `Personas.tsx`, `DesignPartnerCTA.tsx`, `Footer.tsx`
- Depends on: UI primitives, their paired CSS from `src/styles/`, static in-file data constants
- Used by: `src/App.tsx`

**App Root (`src/App.tsx`):**
- Purpose: Composes all section components in page order and owns the `useParallax` scroll hook
- Location: `src/App.tsx`
- Contains: Ordered JSX tree of all sections, `useParallax` custom hook
- Depends on: All section components
- Used by: `src/main.tsx`

**Styles (`src/styles/`):**
- Purpose: Per-component CSS files plus global design tokens
- Location: `src/styles/`
- Contains: `variables.css` (design tokens), `reset.css`, `global.css` (layout, animation, typography), plus one CSS file per component
- Depends on: Nothing (pure CSS)
- Used by: Components import their matching CSS directly

## Data Flow

**Page Render:**

1. `index.html` loads `/src/main.tsx` as an ES module
2. `main.tsx` calls `createRoot` and renders `<App />`
3. `App.tsx` executes `useParallax()` (attaches passive scroll listener) and returns the full section tree
4. Each section renders immediately with static inline data; no loading states

**Form Submission:**

1. User fills the early access form in `DesignPartnerCTA.tsx`
2. `@formspree/react` `useForm("xdalqpbq")` hook handles field state and submission
3. On success, the form is replaced by a confirmation message (`state.succeeded === true`)
4. No local state is persisted; the result is purely in React state

**Scroll Animations:**

1. `SectionWrapper` attaches an `IntersectionObserver` to its `<section>` element on mount
2. When 8% of the section enters the viewport, the `section-revealed` CSS class is applied
3. CSS transitions in `global.css` handle the fade-up reveal; child stagger uses CSS `animation-delay`
4. `useParallax` in `App.tsx` listens to scroll events and applies `translateY` to elements with `[data-parallax]`

**State Management:**
- No global state. Each component manages its own local state via `useState`/`useEffect`
- `Showcase.tsx` holds `activeTab` state and an `isVisible` state (from `IntersectionObserver`) for auto-rotating tabs

## Key Abstractions

**`SectionWrapper`:**
- Purpose: Consistent section layout (padding, container, background) plus scroll-reveal animation
- Examples: `src/components/ui/SectionWrapper.tsx` — used by `Features.tsx`, `Comparison.tsx`, `DesignPartnerCTA.tsx`, `Sovereignty.tsx`, `Personas.tsx`, `HowItWorks.tsx`, `Problem.tsx`, `Solution.tsx`, `SocialProof.tsx`
- Pattern: Wrap section content in `<SectionWrapper id="anchor-id" alt={boolean}>`. Pass `alt` for the alternate background color. Add `reveal-children` class to inner grid elements to enable staggered child animation.

**`Button`:**
- Purpose: Single interactive element abstraction that renders either `<button>` or `<a>` depending on whether `href` is passed
- Examples: `src/components/ui/Button.tsx` — used by `Hero.tsx`, `Navbar.tsx`, `DesignPartnerCTA.tsx`
- Pattern: `<Button variant="primary|secondary|ghost" size="default|large" href="#anchor">Label</Button>`

**`ScreenshotFrame`:**
- Purpose: Renders a platform screenshot with a styled frame; shows a placeholder SVG if `src` is omitted
- Examples: `src/components/ui/ScreenshotFrame.tsx` — used by `Hero.tsx`, `Showcase.tsx`
- Pattern: `<ScreenshotFrame src={importedJpg} alt="description" />`

**`GradientText`:**
- Purpose: Renders text in the accent color (`--accent`); accepts a polymorphic `as` tag prop
- Examples: `src/components/ui/GradientText.tsx`
- Pattern: `<GradientText as="span">highlighted word</GradientText>`

## Entry Points

**HTML Shell:**
- Location: `index.html`
- Triggers: Browser request or Vite dev server
- Responsibilities: Sets page metadata, loads Google Fonts, mounts `<div id="root">`, loads `src/main.tsx`

**React Entry:**
- Location: `src/main.tsx`
- Triggers: Browser ES module execution
- Responsibilities: Calls `createRoot`, renders `<App />`, imports `src/styles/global.css`

**App Component:**
- Location: `src/App.tsx`
- Triggers: React render
- Responsibilities: Registers parallax scroll handler, sequences all page sections

## Error Handling

**Strategy:** Minimal — this is a static content site. The only fallible operation is form submission.

**Patterns:**
- Formspree errors: `ValidationError` components from `@formspree/react` display per-field errors; a fallback `<p class="form-error">` is shown when `state.errors.getFormErrors().length > 0`
- Missing screenshot assets: `ScreenshotFrame` renders a styled SVG placeholder if `src` is undefined or not provided

## Cross-Cutting Concerns

**Logging:** None — no analytics or error tracking detected
**Validation:** Client-side only via Formspree's `useForm` hook and HTML `required` attributes
**Authentication:** Not applicable — fully public site
**Accessibility:** `prefers-reduced-motion` media query disables all CSS animations and the JS parallax effect; `aria-hidden` used on decorative arrow in `Showcase.tsx`

---

*Architecture analysis: 2026-03-09*
