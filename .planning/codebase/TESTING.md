# Testing Patterns

**Analysis Date:** 2026-03-09

## Test Framework

**Runner:**
- None configured. No test runner detected in `package.json` devDependencies or `deno.json` tasks.
- No `jest.config.*`, `vitest.config.*`, or similar config files present.

**Assertion Library:**
- None.

**Run Commands:**
```bash
# No test commands configured
npm run build    # Build only
npm run dev      # Dev server only
npm run preview  # Preview build
```

## Test File Organization

**Location:**
- No test files exist in `src/`. Zero `.test.tsx`, `.test.ts`, `.spec.tsx`, or `.spec.ts` files found in the project source.

**Naming:**
- Not applicable — no tests exist.

**Structure:**
```
src/
├── components/    # No test files
├── styles/        # No test files
├── assets/        # No test files
├── App.tsx        # No test counterpart
└── main.tsx       # No test counterpart
```

## Current Test Coverage

**Overall:** 0% — no tests of any kind are present.

**What exists in the codebase that could be tested:**

- `src/components/ui/Button.tsx` — polymorphic button/anchor rendering logic based on `href` prop
- `src/components/ui/SectionWrapper.tsx` — IntersectionObserver-based reveal logic
- `src/components/ui/ScreenshotFrame.tsx` — conditional src/placeholder rendering
- `src/components/ui/GradientText.tsx` — polymorphic tag rendering via `as` prop
- `src/App.tsx` — `useParallax` hook with reduced-motion detection
- `src/components/DesignPartnerCTA.tsx` — form submission state machine (idle → submitting → succeeded/error)
- `src/components/Showcase.tsx` — tab rotation interval logic tied to viewport visibility

## Recommended Framework (if tests are added)

Given the Vite + React 19 + TypeScript stack with Deno compatibility, Vitest is the natural choice:

```bash
npm install -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom
```

Config location: `vitest.config.ts` (can extend `vite.config.ts`)

```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
```

## Recommended Test Structure

**File placement pattern (co-located):**
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx       # Co-located
│   │   ├── SectionWrapper.tsx
│   │   └── SectionWrapper.test.tsx
│   ├── DesignPartnerCTA.tsx
│   └── DesignPartnerCTA.test.tsx
```

**Test suite pattern:**
```typescript
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders as <a> when href is provided", () => {
    render(<Button href="#apply">Apply</Button>);
    expect(screen.getByRole("link", { name: "Apply" })).toBeInTheDocument();
  });

  it("renders as <button> when no href", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});
```

## Mocking

**Framework:** Vitest `vi` (when/if tests are added)

**Browser API mocking needed for:**
- `IntersectionObserver` — used in `SectionWrapper` (`src/components/ui/SectionWrapper.tsx`) and `Solution` (`src/components/Solution.tsx`) and `Showcase` (`src/components/Showcase.tsx`)
- `window.matchMedia` — used in `App.tsx` `useParallax` hook for `prefers-reduced-motion`
- `window.addEventListener("scroll", ...)` — used in `Navbar` (`src/components/Navbar.tsx`) and `App.tsx`

**Standard mock pattern for IntersectionObserver:**
```typescript
// src/test/setup.ts
const mockIntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
global.IntersectionObserver = mockIntersectionObserver;
```

**Standard mock for matchMedia:**
```typescript
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  })),
});
```

**What NOT to mock:**
- CSS custom properties (just use jsdom defaults)
- Static data arrays (test with real data — `features`, `steps`, `rows` etc. are pure data)
- Formspree `@formspree/react` — mock `useForm` hook return value instead

## Fixtures and Factories

**Test Data:**
- Not applicable — no tests exist yet.
- Component content is defined as module-level constants (e.g., `features`, `steps`, `rows`, `tabs`, `problems`) — these can be imported directly in tests as shared fixtures.

**Location:**
- Recommended: `src/test/` for shared setup and utilities

## Coverage

**Requirements:** None enforced.

**Vitest coverage (when added):**
```bash
npx vitest run --coverage
```

## Test Types

**Unit Tests:**
- Appropriate for: `Button`, `GradientText`, `ScreenshotFrame` — pure rendering logic based on props
- `SectionWrapper` reveal logic — IntersectionObserver callback behavior

**Integration Tests:**
- Appropriate for: `DesignPartnerCTA` — full form submission flow with mocked `useForm`
- `Showcase` — tab switching and auto-rotation with mocked timers (`vi.useFakeTimers()`)

**E2E Tests:**
- Not used. No Playwright, Cypress, or similar configured.
- Could be valuable for the form submission flow (`#apply` section) and tab interaction in `Showcase`.

## High-Priority Test Targets

Given zero current coverage, these are highest value to test first:

1. **`src/components/ui/Button.tsx`** — Core UI primitive used across the page. Test href → `<a>` branch, no-href → `<button>` branch, variant/size class application, disabled state passthrough.

2. **`src/components/DesignPartnerCTA.tsx`** — Only interactive, stateful component with external integration. Test success state render, error state render, submitting disabled state.

3. **`src/components/ui/ScreenshotFrame.tsx`** — Conditional placeholder vs image render.

4. **`src/components/Showcase.tsx`** — Tab click switching, auto-rotation via `setInterval` (use `vi.useFakeTimers()`).

---

*Testing analysis: 2026-03-09*
