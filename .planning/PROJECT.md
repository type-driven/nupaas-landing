# NuPaas Landing Page

## What This Is

A marketing landing page for NuPaas — a unified control plane for self-hosted and multi-cloud operations. The page targets European engineering teams who have outgrown managed platforms (Heroku, Railway, Vercel) and need infrastructure control without the DIY burden. The goal is to drive founding partner applications.

## Core Value

Drive qualified founding partner applications from European engineering teams who need infrastructure control without the operational overhead — the application form and CTA must always work.

## Requirements

### Validated

- ✓ Hero section with founding partner CTA — existing
- ✓ Problem section with 3 pain point cards — existing
- ✓ Solution/showcase with feature callouts — existing
- ✓ Features grid — existing
- ✓ Comparison table (cost/sovereignty) — existing
- ✓ Sovereignty section (security, access control, data residency) — existing
- ✓ Personas/bento grid — existing
- ✓ Founding partner application form (Formspree) — existing
- ✓ Social proof strip (built on / deploys to logos) — existing

### Active

- [ ] Update Hero CTA from "Apply for early access" to "Apply as a founding partner"
- [ ] Soften flagged claims: "80% less" → "up to 80%", "2s to production" → "seconds", "SOC 2 ready" remove, "Gaia-X ready" → "Gaia-X aligned"
- [ ] Add methodology note to Comparison table ("illustrative scenario" framing)
- [ ] Update Sovereignty: remove "SOC 2 ready" badge, soften "GDPR & Gaia-X ready" card to "designed for GDPR-conscious teams" language
- [ ] Restructure Features to 5 pillars: Ship, Operate, Secure, Observe, Migrate
- [ ] Update Problem section: keep punchy names ("US tax" etc.), rewrite body copy to match doc framings (Fragmented tooling, Compliance pressure, Rising ops burden)
- [ ] Add 2 new personas: Vercel/Supabase migration teams, DevOps/SRE mixed-infra teams (keep existing 3)
- [ ] Expand SocialProof: add 4 trust talking points above existing logos

### Out of Scope

- Gaia-X badge removal entirely — soften rather than remove, preserves positioning
- New page sections beyond what the doc specifies — scope is updates to existing sections
- Visual redesign — copy and structure updates only

## Context

This is an existing Vite + React + TypeScript landing page. The marketing handoff document (`../platform/docs/marketing/landing-page-featureset.md`) defines the desired positioning, copy framework, ICP, and specific claims guidance. The codebase is component-per-section — each section is its own TSX file with companion CSS.

Key copy guidance from the handoff doc:
- Frame comparisons as "illustrative scenario", not absolute guarantees
- Prefer "designed for GDPR-conscious teams" and "audit-friendly controls" language
- Avoid unqualified "SOC 2 ready" or "Gaia-X ready" unless externally validated
- Avoid "80% less cost" as a universal promise; avoid "2 seconds to production" as guaranteed runtime

ICP (from doc):
1. European startups/SaaS teams outgrowing Heroku/Railway/Vercel simplicity
2. Platform, DevOps, and SRE teams running mixed infra (self-hosted + cloud)
3. Engineering orgs migrating from managed platforms without a full replatform

## Constraints

- **Copy**: Follow handoff doc claim guidance — no unqualified compliance or performance claims
- **Structure**: Keep existing component-per-section architecture
- **Form**: Formspree integration must not change (FORMSPREE_ID = "xdalqpbq")
- **Visual**: No visual redesign — typography, colors, layout system unchanged
- **Stack**: Vite + React + TypeScript — no framework changes

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Soften claims (not remove) | "Up to 80%", "seconds to production" preserve marketing impact while being defensible | — Pending |
| Blend problem framing | Keep punchy names ("US tax"), update body to doc's framings — best of both | — Pending |
| Full 5-pillar Features restructure | Doc explicitly defines Ship/Operate/Secure/Observe/Migrate as the product surface | — Pending |
| Add personas, keep existing | User wants Vercel/Supabase migration + DevOps/SRE added without removing current 3 | — Pending |

---
*Last updated: 2026-03-09 after initialization*
