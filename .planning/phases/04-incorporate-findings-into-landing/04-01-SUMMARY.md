---
phase: 04-incorporate-findings-into-landing
plan: 01
subsystem: ui
tags: [react, copy, claims, personas, landing]

# Dependency graph
requires:
  - phase: 01-copy-integrity
    provides: Defensible claim audit (CLAIM-AUDIT.md) identifying all unqualified absolute stats
provides:
  - Personas.tsx with both 80% claims qualified — CLAIM-10 and CLAIM-11 closed
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns: []

key-files:
  created: []
  modified:
    - src/components/Personas.tsx

key-decisions:
  - "Use 'Up to 80%' (title case) in stat card to match display emphasis; use lowercase 'up to 80%' in persona body for natural prose flow"
  - "Softened bootstrapped startups body to 'can cut ... helping you' to preserve marketing impact while being defensible — matches CLAIM-AUDIT.md recommendation"

patterns-established: []

requirements-completed: [CLAIM-10, CLAIM-11]

# Metrics
duration: 1min
completed: 2026-03-11
---

# Phase 4 Plan 01: Incorporate Findings — Qualify 80% Claims in Personas Summary

**Personas bento stat card and bootstrapped startups body copy both qualified with "Up to 80%" / "up to 80%" to close the last two defensibility gaps from the claim audit.**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-03-11T12:27:21Z
- **Completed:** 2026-03-11T12:28:02Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- CLAIM-10 closed: Bento stat card now reads "Up to 80%" instead of bare "80%"
- CLAIM-11 closed: Bootstrapped startups persona body now reads "can cut your infra bill by up to 80%, helping you extend runway and stay focused on product."
- No bare "80%" claims remain anywhere in Personas.tsx
- Build passes clean with no TypeScript errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Qualify "80%" claims in Personas bento (CLAIM-10, CLAIM-11)** - `a89b244` (fix)

**Plan metadata:** (docs commit follows)

## Files Created/Modified

- `src/components/Personas.tsx` - Two targeted copy changes: stat card value and bootstrapped startups persona body

## Decisions Made

- Used "Up to 80%" (title case) in the stat card to match the surrounding display emphasis; used lowercase "up to 80%" in persona body for natural prose flow — consistent with CLAIM-AUDIT.md recommendations.
- Body copy changed from assertive "cuts your infra bill by 80%" to hedged "can cut your infra bill by up to 80%, helping you extend runway and stay focused on product." — preserves marketing impact while being defensible.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All CLAIM-AUDIT.md items are now closed (phases 1-4 together addressed all flagged claims)
- Landing page copy is fully defensible and audit-clean
- No blockers for future phases

---
*Phase: 04-incorporate-findings-into-landing*
*Completed: 2026-03-11*
