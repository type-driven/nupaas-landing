---
phase: 01-copy-integrity
plan: 01
subsystem: copy
tags: [claims, cta, compliance, copy-integrity]
dependency_graph:
  requires: []
  provides: [defensible-claims, consistent-cta-labels]
  affects: [Hero.tsx, Solution.tsx, Comparison.tsx, Problem.tsx, DesignPartnerCTA.tsx]
tech_stack:
  added: []
  patterns: [surgical-string-replacement, jsx-annotation]
key_files:
  created: []
  modified:
    - src/components/Hero.tsx
    - src/components/Solution.tsx
    - src/components/Comparison.tsx
    - src/components/Problem.tsx
    - src/components/DesignPartnerCTA.tsx
decisions:
  - "Soften claims rather than remove: 'up to 80%' and 'Seconds to production' preserve marketing impact while remaining defensible"
  - "Both solution-methodology and comparison footnote added: two distinct placements provide contextual disclosure at point of claim"
  - "Problem card headings kept unchanged, only bodies rewritten: preserves punchy naming while aligning body to doc framings"
metrics:
  duration: ~8 minutes
  completed: 2026-03-09
  tasks_completed: 3
  files_modified: 5
requirements: [HERO-01, HERO-02, CLAIM-01, CLAIM-02, CLAIM-03, CLAIM-04, CLAIM-05, PROB-01, PROB-02, PROB-03, CTA-01]
---

# Phase 1 Plan 1: Copy Integrity — Defensible Claims and Aligned CTAs Summary

All public claims on the NuPaas landing page are now defensible, CTAs are end-to-end consistent, and problem card body copy aligns with the three handoff doc framings (Compliance pressure, Fragmented tooling, Rising ops burden).

---

## Changes by File

### src/components/Hero.tsx

| Location | Old | New |
|----------|-----|-----|
| Line 24 — CTA button label | `Apply for early access` | `Apply as a founding partner` |

Hero-note on line 28 (`We are onboarding 10 founding partners. Limited spots.`) confirmed present and left unchanged (HERO-02 pre-validated).

---

### src/components/Solution.tsx

| Location | Old | New |
|----------|-----|-----|
| Line 27 — section headline | `For 80% less.` | `For up to 80% less.` |
| Line 43 — anno-1 value span | `2s` | `Seconds` |
| Line 84 — solution-point h3 | `80% less than GCP` | `Up to 80% less than GCP` |
| Lines 85–88 — solution-point body | `Full production multi-cloud for ~€133/month. We route each workload to the cheapest provider automatically.` | `Full production multi-cloud for as low as ~€133/month in an illustrative 5-service, 2-environment scenario. NuPaas routes each workload to the most cost-effective provider.` |
| After solution-points div — added | *(absent)* | `<p className="solution-methodology">Cost comparisons are directional estimates based on publicly available list pricing for comparable workloads. Actual savings vary by workload, region, and configuration.</p>` |

---

### src/components/Comparison.tsx

| Location | Old | New |
|----------|-----|-----|
| Line 15 — section heading | `The math speaks for itself` | `The math, in an illustrative scenario` |
| After existing footnote — added | *(absent)* | Second `<p className="comparison-footnote">` with: `Illustrative scenario: 5 services across 2 environments. NuPaas pricing based on Hetzner/Scaleway spot rates as of Q1 2026. Competitor estimates based on published list pricing. Actual costs vary by workload and configuration.` |

Both `comparison-footnote` paragraphs now present (grep count = 2).

---

### src/components/Problem.tsx

Card headings ("The US tax", "The DIY trap", "The cost spiral") left unchanged.

| Card | Old body (summary) | New body — theme |
|------|--------------------|-----------------|
| Card 1 "The US tax" | "...one GDPR audit turns into a legal project. You're renting someone else's platform..." | Compliance pressure: "...your compliance posture pays the price." |
| Card 2 "The DIY trap" | "Set up Kubernetes...That's 3 months of your best engineer's time..." | Fragmented tooling: "...assembling a fragmented stack...maintaining glue code instead of building product." |
| Card 3 "The cost spiral" | "AWS bills grow 20–40%...every euro of burn..." | Rising ops burden: "...operational surface area...ops department you never planned to hire." |

---

### src/components/DesignPartnerCTA.tsx

| Location | Old | New |
|----------|-----|-----|
| Line 95 — submit button ternary | `"Get early access"` | `"Apply as a founding partner"` |

`"Sending..."` state left unchanged. `FORMSPREE_ID = "xdalqpbq"` confirmed unchanged.

---

## Verification Results

All grep checks passed:

- "Apply as a founding partner" present in Hero.tsx (line 24) and DesignPartnerCTA.tsx (line 95)
- "Apply for early access" and "Get early access" — zero matches in both files
- "For up to 80% less" present in Solution.tsx (line 27)
- "Up to 80% less than GCP" present in Solution.tsx (line 84)
- "For 80% less." — zero matches
- "Seconds" present in Solution.tsx (line 43)
- `"2s"` — zero matches
- "solution-methodology" present in Solution.tsx (line 90)
- "illustrative scenario" present in Comparison.tsx (line 15)
- `comparison-footnote` count = 2
- "fragmented stack" present in Problem.tsx (line 31)
- "compliance posture" present in Problem.tsx (line 20)
- "ops department" present in Problem.tsx (line 41)

## Build Verification

```
vite v6.4.1 building for production...
77 modules transformed.
Built in 379ms — exit 0, zero TypeScript errors
```

## Deviations from Plan

None — plan executed exactly as written. All line numbers matched. No structural changes required. No auto-fixes needed.

## Requirements Addressed

| Requirement | Description | Status |
|-------------|-------------|--------|
| HERO-01 | Hero CTA button reads "Apply as a founding partner" | Done |
| HERO-02 | Hero note reads "10 founding partners. Limited spots." | Pre-validated, confirmed unchanged |
| CLAIM-01 | Solution headline: "For up to 80% less." | Done |
| CLAIM-02 | Anno-1 value: "Seconds" (not "2s") | Done |
| CLAIM-03 | Solution point heading: "Up to 80% less than GCP" | Done |
| CLAIM-04 | Comparison heading: illustrative scenario framing | Done |
| CLAIM-05 | Comparison + Solution methodology notes present | Done |
| PROB-01 | Card 1 body: Compliance pressure framing | Done |
| PROB-02 | Card 2 body: Fragmented tooling framing | Done |
| PROB-03 | Card 3 body: Rising ops burden framing | Done |
| CTA-01 | Form submit button: "Apply as a founding partner" | Done |

## Self-Check: PASSED

All modified files confirmed present. Commit `c3a01bb` confirmed in git log.
