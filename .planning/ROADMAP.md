# Roadmap: NuPaas Landing Page

## Overview

Three phases align the landing page with the marketing handoff doc. Phase 1 corrects claims and copy across the highest-visibility sections. Phase 2 updates the trust and sovereignty signals. Phase 3 restructures the two largest sections (Features and Personas). Each phase can be verified by reading the rendered page in a browser.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Copy Integrity** - Soften claims, fix hero CTA, update problem copy, align form button (completed 2026-03-09)
- [x] **Phase 2: Trust Signals** - Sovereignty section cleanup, social proof trust talking points (completed 2026-03-09)
- [x] **Phase 3: Section Restructures** - 5-pillar Features grid, expanded Personas bento (completed 2026-03-09)
- [x] **Phase 4: Incorporate Findings** - Qualify remaining 80% claims in Personas bento (completed 2026-03-11)

## Phase Details

### Phase 1: Copy Integrity
**Goal**: All public claims are defensible, CTAs are consistent, and problem framing matches the handoff doc
**Depends on**: Nothing (first phase)
**Requirements**: HERO-01, HERO-02, CLAIM-01, CLAIM-02, CLAIM-03, CLAIM-04, CLAIM-05, PROB-01, PROB-02, PROB-03, CTA-01
**Success Criteria** (what must be TRUE):
  1. Hero CTA button reads "Apply as a founding partner" and supporting note reads "We are onboarding 10 founding partners"
  2. No unqualified performance claims exist — "up to 80% less", "seconds to production", and illustrative cost framing are in place
  3. Comparison table and Solution section both carry methodology/illustrative-scenario notes
  4. Problem cards keep their punchy headings but body copy reflects Fragmented tooling / Compliance pressure / Rising ops burden framings
  5. Form submit button reads "Apply as a founding partner" matching the hero CTA
**Plans**: 1 plan

Plans:
- [ ] 01-copy-integrity-01-PLAN.md — Fix all flagged claims, CTAs, and problem card body copy across Hero, Solution, Comparison, Problem, and DesignPartnerCTA

### Phase 2: Trust Signals
**Goal**: Sovereignty section no longer makes unvalidated compliance claims, and the social proof strip includes four trust talking points
**Depends on**: Phase 1
**Requirements**: SOV-01, SOV-02, SOV-03, SOV-04, TRUST-01
**Success Criteria** (what must be TRUE):
  1. Sovereignty section heading reads "Designed for GDPR-conscious teams" (not "GDPR & Gaia-X ready")
  2. "SOC 2 ready" badge is absent from the Sovereignty section
  3. Gaia-X reference uses "Gaia-X aligned" or equivalent non-certification language throughout
  4. Social proof component shows four trust talking points above the logos strip (workflow reliability, unified model, credential lifecycle, rollout controls)
**Plans**: 1 plan

Plans:
- [ ] 02-01-PLAN.md — Fix Sovereignty card 3 copy/badges and add trust talking-points row to SocialProof

### Phase 3: Section Restructures
**Goal**: Features section presents the 5-pillar product surface and Personas section includes all five target audience cards
**Depends on**: Phase 2
**Requirements**: FEAT-01, FEAT-02, FEAT-03, FEAT-04, FEAT-05, FEAT-06, HOW-01, HOW-02, PER-01, PER-02
**Success Criteria** (what must be TRUE):
  1. Features grid shows exactly five pillar cards: Ship, Operate, Secure, Observe, Migrate — each with the specified feature list
  2. Migrate pillar explicitly surfaces Supabase Lift and Vercel Lift as named capabilities
  3. Personas section shows five cards total — the original three (bootstrapped startups, B2B SaaS, growing teams 5-20) plus "Teams migrating from Vercel/Supabase" and "Platform / DevOps / SRE teams"
**Plans**: 1 plan

Plans:
- [ ] 03-01-PLAN.md — Restructure Features to 5-pillar grid, reframe HowItWorks as Day 0/1/2, add 2 new Personas bento cards

### Phase 4: Incorporate Findings into Landing
**Goal**: All remaining unqualified "80%" claims in Personas.tsx are softened to "Up to 80%" per the CLAIM-AUDIT.md findings
**Requirements**: CLAIM-10, CLAIM-11
**Depends on**: Phase 3
**Plans:** 1 plan

Plans:
- [x] 04-01-PLAN.md — Qualify the two remaining bare "80%" instances in Personas.tsx (bento stat card + bootstrapped startups body copy)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Copy Integrity | 1/1 | Complete | 2026-03-09 |
| 2. Trust Signals | 1/1 | Complete | 2026-03-09 |
| 3. Section Restructures | 1/1 | Complete | 2026-03-09 |
| 4. Incorporate Findings | 1/1 | Complete | 2026-03-11 |
