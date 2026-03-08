# Coding Conventions

**Analysis Date:** 2026-03-09

## Naming Patterns

**Files:**
- PascalCase for React component files: `Hero.tsx`, `SectionWrapper.tsx`, `GradientText.tsx`
- kebab-case for CSS files, mirroring component names: `hero.css`, `gradient-text.css`, `screenshot-frame.css`
- Lowercase for config and utility files: `vite.config.ts`, `deno.json`
- `.tsx` extension used for all files that contain JSX, even if they don't use React hooks

**Components:**
- PascalCase for all component function names: `export function Hero()`, `export function SectionWrapper()`
- Named exports only — no default exports anywhere in `src/`
- All components in `src/main.tsx` are imported with explicit `.tsx` extensions: `import { App } from "./App.tsx"`

**Interfaces and Types:**
- PascalCase for all interface/type names: `ButtonProps`, `SectionWrapperProps`, `TechItem`, `ProblemItem`
- Interfaces defined immediately above the component that uses them
- Props interfaces suffixed with `Props`: `ButtonProps`, `ScreenshotFrameProps`, `AccentTextProps`
- Non-props interfaces named descriptively without suffix: `TechItem`, `ProblemItem`

**Variables and Local State:**
- camelCase for all variables, state names, handlers: `activeTab`, `setActiveTab`, `isVisible`, `sectionRef`
- Module-level data arrays use camelCase: `const rows = [...]`, `const features = [...]`, `const steps = [...]`
- Constants that are configuration values use UPPER_SNAKE_CASE: `const FORMSPREE_ID = "xdalqpbq"`
- Loop variables use single letters for inline maps: `(f) =>`, `(r) =>`, `(s, i) =>`, `(t) =>`

**CSS Classes:**
- kebab-case for all class names: `hero-content`, `section-heading`, `btn-primary`, `showcase-tab-active`
- BEM-influenced naming: block (`hero`), element (`hero-bg`, `hero-content`, `hero-headline`), modifier (`nav-scrolled`, `showcase-tab-active`)
- State classes use `-active`, `-visible`, `-scrolled`, `-revealed` suffixes
- Utility classes: `.container`, `.section`, `.section-alt`, `.reveal-children`

## Code Style

**Formatting:**
- No ESLint or Prettier config detected — no automated formatting enforcement
- 2-space indentation observed throughout all source files
- Trailing commas on multi-line arrays and objects
- Single quotes for string values in TypeScript/TSX
- Double quotes for JSX attribute string values

**Imports:**
- All React hook imports are named: `import { useEffect, useRef, useState } from "react"`
- Type-only imports use `import type`: `import type { ReactNode, CSSProperties } from "react"`
- Explicit `.tsx` file extensions in all relative imports (required by Deno compatibility)

**TypeScript:**
- `interface` preferred over `type` for component props
- Props use `interface ... extends HTMLButtonElement` pattern for native element extension: `interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>`
- Non-null assertion `!` used in `createRoot(document.getElementById("root")!)` — acceptable at entry point
- No `any` types detected anywhere in the codebase
- `as` prop pattern for polymorphic components: `as?: "span" | "h1" | "h2" | "h3" | "p"`

## Import Organization

**Order (observed pattern):**
1. React and third-party library imports
2. Local component imports (relative paths with `.tsx` extension)
3. Asset imports (images, SVGs)
4. CSS imports (always last, one per component)

**Examples:**
```tsx
// Third-party first
import { useForm, ValidationError } from "@formspree/react";
// Local components
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import { Button } from "./ui/Button.tsx";
// CSS last
import "../styles/cta.css";
```

**Path Aliases:**
- None configured. All imports use relative paths.
- `../../styles/` for CSS from `src/components/ui/` subdirectory
- `../styles/` for CSS from `src/components/` directory

## Component Structure Patterns

**Typical section component layout:**
1. Imports (third-party → local → assets → CSS)
2. Local interface definitions (if needed)
3. Module-level data arrays (content separate from markup)
4. Named export function
5. JSX return using `SectionWrapper` or a raw `<section>`

**Data separation pattern:**
Content arrays are defined at module level outside the component function, keeping component bodies lean:
```tsx
const features = [
  { name: "Git push deploys", detail: "Connect any repo, auto-build, auto-deploy" },
  // ...
];

export function Features() {
  return (
    <SectionWrapper alt id="features">
      {features.map((f) => (
        <div key={f.name} className="feature-item">...</div>
      ))}
    </SectionWrapper>
  );
}
```

**Custom hook pattern:**
Hooks extracted into named functions above the component when logic is reusable:
```tsx
function useParallax() {
  useEffect(() => { /* ... */ }, []);
}

export function App() {
  useParallax();
  return <>{/* ... */}</>;
}
```

## CSS Architecture

**Organization:**
- One CSS file per component, located in `src/styles/`
- Component CSS imported directly in the component file (co-located by reference, separate by location)
- Global styles split across: `reset.css` → `variables.css` → `global.css`
- `global.css` imports `reset.css` and `variables.css` using `@import`

**Design token system:**
All colors, spacing, typography, and transitions use CSS custom properties defined in `src/styles/variables.css`:
- `var(--accent)`, `var(--bg-primary)`, `var(--text-secondary)`
- `var(--section-padding)`, `var(--container-max)`, `var(--card-radius)`
- `var(--transition-fast)`, `var(--transition-base)`, `var(--transition-slow)`

**Responsive breakpoints:**
Defined as media queries overriding `:root` variables directly in `src/styles/global.css`:
- `1024px`: large tablets
- `768px`: mobile
- `480px`: small mobile

**Animation patterns:**
- Scroll reveal via IntersectionObserver in `SectionWrapper` — adds `.section-revealed` class
- Child stagger via `.reveal-children` class — CSS `nth-child` animation delays (up to 10 children)
- Parallax via `data-parallax` attribute — JavaScript scroll handler in `App.tsx`
- Accessibility: `@media (prefers-reduced-motion: reduce)` disables all animation globally

## HTML/JSX Patterns

**Unicode escaping:**
Special characters in JSX string content are escaped as Unicode to avoid encoding issues:
```tsx
{"You\u2019re watching every euro."}  // apostrophe
{"\u20AC200+/month"}                   // euro sign
{"team of 2\u201320 engineers"}        // en dash
```

**SVG icons:**
Inline SVG elements used throughout for technology logos and feature icons. No icon library dependency. SVGs defined inline inside data arrays at module level.

**Conditional class names:**
Template literals used for conditional classes:
```tsx
className={`nav ${scrolled ? "nav-scrolled" : ""}`}
className={`section ${alt ? "section-alt" : ""} ${revealed ? "section-revealed" : ""} ${className}`.trim()}
```

## Error Handling

**Strategy:** Minimal — this is a static marketing page. Form submission errors handled via Formspree's `state.errors` object.

**Patterns:**
- Form error display: `{state.errors && state.errors.getFormErrors().length > 0 && <p className="form-error">...`
- Field-level errors: `<ValidationError prefix="Company" field="company" errors={state.errors} />`
- Form success state: conditional render via `{state.succeeded ? <SuccessUI /> : <FormUI />}`
- IntersectionObserver: `if (!el) return` guard before observer setup

## Logging

**Framework:** None. No logging library.

**Patterns:** No `console.log` statements found. No error reporting configured.

## Comments

**When to Comment:**
- Section-level JSX blocks: `{/* Row 1 */}`, `{/* Floating annotations pinned to the screenshot */}`
- CSS sections: `/* Scroll reveal — sections fade up when entering viewport */`

**JSDoc/TSDoc:**
- Not used anywhere in the codebase.

## Module Design

**Exports:**
- Named exports only for all components: `export function Hero()`
- No barrel/index files — components imported directly by path

**Barrel Files:**
- Not used. `App.tsx` imports each component individually.

---

*Convention analysis: 2026-03-09*
