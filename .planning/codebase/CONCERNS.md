# Codebase Concerns

**Analysis Date:** 2026-03-09

## Tech Debt

**Dual runtime configuration (Node/Deno split):**
- Issue: Project has both `package.json` + `package-lock.json` (Node) and `deno.json` + `deno.lock` (Deno), with the same dependencies declared in both. This creates an ambiguous, duplicated dependency surface. `deno.json` tasks use `deno run -A npm:vite` while `package.json` scripts use `vite` directly. `.npmrc` also exists, further anchoring to npm conventions.
- Files: `package.json`, `deno.json`, `deno.lock`, `package-lock.json`, `.npmrc`
- Impact: Contributors may install via npm or deno and get different resolution paths; `package-lock.json` and `deno.lock` can drift. Deployment target (Cloudflare Pages) uses npm by default, so Deno config may be dead weight.
- Fix approach: Commit to one runtime. If Cloudflare Pages drives deployment, remove `deno.json`/`deno.lock` and `deno run` tasks. If Deno is desired, remove `package.json` scripts and `package-lock.json`.

**No TypeScript config file:**
- Issue: No `tsconfig.json` is present. TypeScript compiler options are declared only in `deno.json` (under `compilerOptions`). Vite and the React plugin rely on their own defaults or `deno.json`, which is non-standard for a Vite-based project.
- Files: Root directory, `vite.config.ts`, `deno.json`
- Impact: TypeScript strict mode is not explicitly enabled, so `any` types and unsafe casts pass silently. The non-null assertion in `main.tsx` (`document.getElementById("root")!`) is the only instance, but there is no enforcement to prevent more.
- Fix approach: Add a `tsconfig.json` with `"strict": true`, `"jsx": "react-jsx"`, and appropriate `lib` settings. Reference it from `vite.config.ts`.

**No linting or formatting tooling:**
- Issue: No ESLint, Biome, Prettier, or any other linter/formatter config exists in the repo.
- Files: Root directory
- Impact: Code style is inconsistently enforced only by author convention. Inconsistencies already visible: `HowItWorks.tsx` has an unused `i` parameter in `steps.map((s, i) =>` at line 30 — this would be caught by a linter. Future contributors have no guardrails.
- Fix approach: Add `eslint.config.ts` (or `biome.json`) with React and TypeScript rules. Add a `format` and `lint` npm script. Include in CI/CD if added.

**Unused variable in HowItWorks:**
- Issue: `steps.map((s, i) => ...)` destructures `i` but never uses it inside the callback body.
- Files: `src/components/HowItWorks.tsx` line 30
- Impact: Dead code, would cause an ESLint `no-unused-vars` warning once linting is set up.
- Fix approach: Remove the `i` parameter: `steps.map((s) => ...)`.

## Known Bugs

**Navbar links point to non-existent anchors:**
- Symptoms: Clicking "Products" (href `#pricing`) and "Pricing" (href `#pricing`) in the Navbar navigates to `Comparison.tsx`'s `id="pricing"` section — this works. However, "Technologies" links to `#features` which resolves to `Features.tsx` even though the label says "Technologies", creating a label/destination mismatch. "About" links to `#problem`.
- Files: `src/components/Navbar.tsx` lines 19–30
- Trigger: User clicks nav links and finds section content does not match link label.
- Workaround: Labels and hrefs work functionally but are semantically mismatched. No crash.

**Footer links are all dead (`href="#"`):**
- Symptoms: Clicking "Architecture docs", "GitHub", "Contact", or "Twitter/X" in the footer navigates to the top of the page.
- Files: `src/components/Footer.tsx` lines 11–14
- Trigger: Any click on footer navigation.
- Workaround: None. Links are visually present but non-functional.

**`GradientText` component is imported nowhere:**
- Symptoms: `src/components/ui/GradientText.tsx` exists and is fully implemented but is not imported or used in any component. Despite the name, the component does not render a gradient — it applies `color: var(--accent)` which is a solid color. The naming is misleading.
- Files: `src/components/ui/GradientText.tsx`
- Trigger: Not a runtime bug, but represents dead code and naming confusion.
- Workaround: N/A — component is simply unused.

## Security Considerations

**Formspree form ID is hardcoded in source:**
- Risk: The Formspree endpoint ID `xdalqpbq` is committed in plain text in source code. Anyone with access to the repository can observe submissions or spam the endpoint.
- Files: `src/components/DesignPartnerCTA.tsx` line 6
- Current mitigation: Formspree has its own spam protection (honeypot field at line 50 is implemented). The `_gotcha` honeypot is present and correct.
- Recommendations: Move `FORMSPREE_ID` to a Vite environment variable (`import.meta.env.VITE_FORMSPREE_ID`) so it can be rotated without a code change. Add Formspree's reCAPTCHA or hCaptcha integration if spam volume increases.

**No Content Security Policy (CSP):**
- Risk: The app loads Google Fonts from `fonts.googleapis.com` and `fonts.gstatic.com` without a CSP header. No meta-tag CSP is defined in `index.html`. Cloudflare Pages does not add a CSP by default.
- Files: `index.html`
- Current mitigation: The app is read-only (no user-generated content displayed), which reduces XSS surface.
- Recommendations: Add a `_headers` file for Cloudflare Pages that sets `Content-Security-Policy` to at minimum restrict scripts to `'self'` and explicitly allowlist `fonts.googleapis.com`/`fonts.gstatic.com`.

**Google Fonts loaded via third-party CDN:**
- Risk: Loading fonts from `fonts.googleapis.com` means a Google-operated third party processes end-user IP addresses on page load. For a product positioning itself on EU data sovereignty, this is a marketing contradiction visible to technically literate visitors.
- Files: `index.html` lines 9–11
- Current mitigation: None.
- Recommendations: Self-host the Manrope and Poppins font files (download from Google Fonts, serve from `/public/fonts/`) and update `global.css` to use `@font-face` declarations.

## Performance Bottlenecks

**Unoptimized screenshot images (JPG, no srcSet, no lazy loading):**
- Problem: Three JPEG screenshots total 1.54 MB (`screen1.jpg`: 740 KB, `screen2.jpg`: 440 KB, `screen3.jpg`: 364 KB). They are served as-is with no `loading="lazy"`, no `srcSet` for responsive sizes, and no WebP conversion. The hero screenshot (`screen1.jpg` at 740 KB) is above the fold and blocks LCP.
- Files: `src/assets/screenshots/screen1.jpg`, `screen2.jpg`, `screen3.jpg`; `src/components/Hero.tsx`, `src/components/Showcase.tsx`, `src/components/Solution.tsx`; `src/components/ui/ScreenshotFrame.tsx`
- Cause: `ScreenshotFrame` renders a plain `<img>` with no optimization attributes. Vite does not auto-convert or compress imported images by default.
- Improvement path: Add `vite-plugin-imagemin` or `vite-imagetools` to compress and convert images to WebP at build time. Add `loading="lazy"` to below-fold images in `Showcase` and `Solution`. Add explicit `width`/`height` attributes to prevent layout shift.

**`will-change: transform` applied to all `[data-parallax]` elements globally:**
- Problem: `global.css` applies `will-change: transform` to every `[data-parallax]` element unconditionally. This instructs the browser to promote these elements to their own compositor layer permanently, consuming GPU memory even when the parallax effect is not active.
- Files: `src/styles/global.css` line 86
- Cause: `will-change` is set statically in CSS rather than being toggled programmatically during scroll.
- Improvement path: Remove the static CSS rule and instead set `willChange = 'transform'` in the `onScroll` handler when scrolling begins, and remove it after scrolling stops (via a debounced reset).

**Multiple independent `IntersectionObserver` instances:**
- Problem: Three separate `IntersectionObserver` instances are created: one in every `SectionWrapper` mount (up to 9 instances for 9 sections), one in `Showcase`, and one in `Solution`. Each observer runs independently.
- Files: `src/components/ui/SectionWrapper.tsx`, `src/components/Showcase.tsx`, `src/components/Solution.tsx`
- Cause: No shared observer utility. Each component creates its own instance on mount.
- Improvement path: Create a shared `useInView` hook in `src/hooks/useInView.ts` that uses a single root-level `IntersectionObserver` with a callback map keyed by element. This reduces observer count from O(N sections) to 1.

## Fragile Areas

**Reveal animation only supports up to 10 children:**
- Files: `src/styles/global.css` lines 62–71
- Why fragile: The `.reveal-children` stagger animation uses explicit `:nth-child(1)` through `:nth-child(10)` selectors. The `Features` component renders 10 items — exactly at the limit. Any addition of an 11th feature item will not animate. `Personas` bento grid has 9 items (safe for now). No `nth-child(n+11)` fallback exists.
- Safe modification: Add a fallback rule `.section-revealed .reveal-children > *:nth-child(n+11) { animation-delay: 0.75s; }` or switch to a CSS custom property computed per-child via JavaScript.
- Test coverage: None — no tests exist.

**Showcase tab rotation resets on re-entry:**
- Files: `src/components/Showcase.tsx` lines 47–53
- Why fragile: The `setInterval` for auto-advancing tabs is tied to the `isVisible` state from `IntersectionObserver`. Every time the section exits and re-enters the viewport, the interval restarts from tab 0 implicitly because `isVisible` toggles off then on, clearing and restarting the interval. The `activeTab` state is not reset, so the interval picks up from the current tab — but this interaction is subtle and easy to break when refactoring.
- Safe modification: Keep `activeTab` and the interval logic in sync by ensuring any manual tab click resets the interval timer.
- Test coverage: None.

**`Button` component silently drops button-specific props when rendered as `<a>`:**
- Files: `src/components/ui/Button.tsx`
- Why fragile: When `href` is provided, the component renders an `<a>` and spreads `...props` (which are typed as `ButtonHTMLAttributes`) onto it. Attributes like `disabled`, `type`, and `form` are valid on `<button>` but not on `<a>`, potentially producing invalid HTML. The `disabled` prop passed from `DesignPartnerCTA` (`src/components/DesignPartnerCTA.tsx` line 93) is only applied when the button submits — no anchor-rendered Button receives `disabled` today, but the type system does not prevent it.
- Safe modification: Create separate props branches: when `href` is set, accept `AnchorHTMLAttributes`; otherwise accept `ButtonHTMLAttributes`. Use a discriminated union type.
- Test coverage: None.

## Scaling Limits

**Formspree free tier:**
- Current capacity: Formspree free plan allows 50 submissions/month.
- Limit: Above 50 submissions/month, new applications are silently dropped or rejected depending on plan.
- Scaling path: Upgrade Formspree plan, or migrate to a self-hosted form backend (e.g., a Cloudflare Worker writing to a D1 database or sending via Resend).

## Dependencies at Risk

**`@formspree/react` v2 is unmaintained:**
- Risk: `@formspree/react` at `^2.0.0` is pinned to a major version that has not received updates and the Formspree React SDK has low npm download velocity. The `useForm` hook API it provides could break with React 19's new async hooks model.
- Impact: Form submissions fail or behave unexpectedly on React 19.
- Migration plan: Test explicitly against React 19. If issues arise, replace with a direct `fetch` call to the Formspree REST API, removing the SDK dependency entirely.

## Missing Critical Features

**No mobile navigation menu:**
- Problem: On screens below 768px the `.nav-links` and `.nav-links-left` are hidden via `display: none` with no mobile menu replacement. Only the logo and the "Get Started" CTA button are visible.
- Blocks: Mobile users cannot navigate to any anchor section via the nav. All internal navigation disappears on mobile.

**No Open Graph / social sharing metadata:**
- Problem: `index.html` has no `og:title`, `og:description`, `og:image`, `twitter:card`, or `twitter:image` meta tags.
- Blocks: Links shared to Twitter/X, LinkedIn, or Slack render as plain URLs with no preview card — a significant conversion hit for a landing page distributed via social media.

**No favicon for non-SVG contexts:**
- Problem: Only an SVG favicon is defined (`/favicon.svg`). Many contexts (browser tab list on Firefox, iOS home screen, Twitter card generators) do not support SVG favicons. No `.ico` or PNG fallbacks are provided.
- Blocks: Brand visibility in shared link previews and older browser tab bars.

## Test Coverage Gaps

**Zero tests exist:**
- What's not tested: All components, the `useParallax` hook, the `SectionWrapper` reveal logic, the `Showcase` auto-tab rotation, and the `DesignPartnerCTA` form submission flow.
- Files: All files under `src/`
- Risk: Any refactor of interaction logic (parallax, scroll reveal, tab animation, form state) can break silently. Form error handling path in `DesignPartnerCTA` (lines 97–99) has never been exercised automatically.
- Priority: Medium — this is a static marketing site, so functional correctness matters more than unit coverage, but the form submission is conversion-critical and deserves at least one integration test.

---

*Concerns audit: 2026-03-09*
