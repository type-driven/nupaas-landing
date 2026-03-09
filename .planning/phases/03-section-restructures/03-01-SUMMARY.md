---
phase: 03-section-restructures
plan: "01"
subsystem: marketing-components
tags: [features, how-it-works, personas, copy, restructure]
dependency_graph:
  requires: []
  provides: [5-pillar-features, day0-day1-day2-steps, expanded-personas]
  affects: [src/components/Features.tsx, src/styles/features.css, src/components/HowItWorks.tsx, src/components/Personas.tsx, src/styles/personas.css]
tech_stack:
  added: []
  patterns: [bento-grid, pillar-card-grid, day0-day1-day2-ops-framing]
key_files:
  created: []
  modified:
    - src/components/Features.tsx
    - src/styles/features.css
    - src/components/HowItWorks.tsx
    - src/components/Personas.tsx
    - src/styles/personas.css
decisions:
  - "5-pillar card grid (Ship/Operate/Secure/Observe/Migrate) replaces flat 10-item feature list"
  - "Day 0/1/2 labels replace 01/02/03 numerals; heading evolved to signal ops lifecycle"
  - "Two new persona rows appended to bento (4 new cards total: 2 stat + 2 persona)"
  - "personas.css nth-child rules extended to cards 10-13 for correct 3-column grid placement"
metrics:
  duration: "~15 minutes"
  completed_date: "2026-03-09"
  tasks_completed: 3
  files_modified: 5
---

# Phase 3 Plan 01: Section Restructures Summary

**One-liner:** 5-pillar card grid (Ship/Operate/Secure/Observe/Migrate) with Supabase/Vercel Lift, Day 0/1/2 ops-readiness steps, and two new bento persona cards for migration and DevOps/SRE ICPs.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Restructure Features to 5-pillar card grid | 8a08fb9 | src/components/Features.tsx, src/styles/features.css |
| 2 | Reframe HowItWorks as Day 0 / Day 1 / Day 2 | 8a08fb9 | src/components/HowItWorks.tsx |
| 3 | Add two new persona cards to Personas bento | 8a08fb9 | src/components/Personas.tsx, src/styles/personas.css |

## What Was Built

**Features (Task 1):** Replaced the flat 10-item `features-grid` with a `features-pillars` 5-column grid. Each pillar card (`pillar-card`) has a header with icon + name and an unordered feature list with dot indicators. The Migrate pillar explicitly names "Supabase Lift" and "Vercel Lift" as capabilities. Old CSS classes (`.features-grid`, `.feature-item`, `.feature-dot`, `.feature-name`, `.feature-detail`) were removed entirely.

**HowItWorks (Task 2):** Replaced step number labels from "01"/"02"/"03" to "Day 0"/"Day 1"/"Day 2". Updated section heading from "From zero to production in one afternoon" to "Provision, ship, and operate — in one afternoon." Step titles and body copy replaced verbatim from DAY0-DAY1-DAY2.md research. CSS unchanged.

**Personas (Task 3):** Appended 4 new bento cards after the existing 9 — one stat card + one persona card each for rows 4 and 5. New personas: "Teams migrating from Vercel / Supabase" and "Platform / DevOps / SRE teams". Updated personas.css nth-child rules to place cards 10-13 correctly in the 3-column grid, and extended mobile breakpoint selectors to include nth-child(11) and nth-child(12).

## Decisions Made

- **Pillar icon choice:** Used emoji icons as specified in the plan (⚡ ⚙️ 🔒 📊 🚀) for fast visual differentiation without new assets.
- **Bento row structure for rows 4-5:** Row 4 = [stat col1][persona-wide cols2-3], Row 5 = [persona-wide cols1-2][stat col3]. This matches the alternating rhythm of the existing bento.
- **No CSS changes to HowItWorks:** "Day 0" renders wider than "01" in the step-number div but fits within the card at the existing 3rem font-size.

## Deviations from Plan

None — plan executed exactly as written.

## Verification

- `npm run build` exited 0 with no TypeScript or module errors (77 modules transformed)
- Features: 5 pillar cards confirmed (Ship, Operate, Secure, Observe, Migrate)
- Migrate pillar contains "Supabase Lift" and "Vercel Lift" at lines 60-61
- HowItWorks: "Day 0"/"Day 1"/"Day 2" at lines 6/11/16; heading at line 26
- Personas: "Teams migrating from Vercel / Supabase" at line 65, "Platform / DevOps / SRE teams" at line 73
- personas.css: nth-child(11) and nth-child(12) rules present at lines 111, 116, 132-133, 150-151

## Self-Check: PASSED
