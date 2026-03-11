# Requirements: NuPaas Landing Page

**Defined:** 2026-03-09
**Core Value:** Drive qualified founding partner applications from European engineering teams who need infrastructure control without the operational overhead.

## v1 Requirements

Requirements for this milestone — aligning the landing page with the marketing handoff doc.

### Hero

- [x] **HERO-01**: Hero CTA button reads "Apply as a founding partner" (not "Apply for early access")
- [x] **HERO-02**: Hero supporting note reads "We are onboarding 10 founding partners" (already correct — validate)

### Claims

- [x] **CLAIM-01**: "80% less" in Solution headline softened to "up to 80% less" or directional framing with methodology note
- [x] **CLAIM-02**: "2s to production" annotation replaced with "seconds to production" or removed
- [x] **CLAIM-03**: "€133/mo" annotation updated to be framed as illustrative scenario
- [x] **CLAIM-04**: Solution section adds a short methodology note (directional, not absolute)
- [x] **CLAIM-05**: Comparison table adopts "illustrative scenario" framing with methodology footnote
- [x] **CLAIM-10**: Personas bento stat card "80%" qualified to "Up to 80%"
- [x] **CLAIM-11**: Bootstrapped startups persona body "cuts your infra bill by 80%" qualified to "can cut your infra bill by up to 80%"

### Problem Section

- [x] **PROB-01**: Problem card 1 keeps punchy name ("The US tax") but body updated to "Fragmented tooling" framing — app delivery, infra, and security split across multiple products
- [x] **PROB-02**: Problem card 2 keeps punchy name ("The DIY trap") but body updated to "Compliance pressure" framing — data residency and governance blocking enterprise deals
- [x] **PROB-03**: Problem card 3 keeps punchy name ("The cost spiral") but body updated to "Rising ops burden" framing — cloud complexity increases before teams justify a platform org

### How It Works Section

- [ ] **HOW-01**: HowItWorks steps reframed as Day 0 / Day 1 / Day 2 operations — "Day 0: Provision", "Day 1: Ship", "Day 2: Operate"
- [ ] **HOW-02**: Each step body emphasizes the ops-readiness aspect: Day 0 covers node provisioning + cloud connector + cluster init; Day 1 covers git-push deploys, preview URLs, secrets from day one; Day 2 covers observability, alerts, workflows, credential lifecycle, rollback, audit logs

### Features Section

- [ ] **FEAT-01**: Features section restructured into 5 pillar cards: Ship, Operate, Secure, Observe, Migrate
- [ ] **FEAT-02**: Ship pillar: project lifecycle, deployment history, rollback, deployment logs, preview TTL cleanup
- [ ] **FEAT-03**: Operate pillar: node lifecycle, node groups, cloud provisioning/sync, auto-onboarding, stack deploys
- [ ] **FEAT-04**: Secure pillar: org/member/invite/access-key lifecycle, credential verification, SSH key lifecycle, vault-backed secrets, audit logs
- [ ] **FEAT-05**: Observe pillar: status dashboard + SSE stream, logs/traces explorers, dashboards, saved searches, alerts
- [ ] **FEAT-06**: Migrate pillar: source control integrations, domain/DNS flows, Supabase Lift, Vercel Lift

### Sovereignty Section

- [ ] **SOV-01**: "GDPR & Gaia-X ready" card heading softened to "Designed for GDPR-conscious teams"
- [ ] **SOV-02**: Sovereignty card copy uses "audit-friendly controls" language
- [ ] **SOV-03**: "SOC 2 ready" badge removed from Sovereignty section
- [ ] **SOV-04**: "Gaia-X" badge softened — label updated to "Gaia-X aligned" or similar non-certification language

### Social Proof / Trust Section

- [ ] **TRUST-01**: SocialProof component expanded to include 4 trust talking points above the logos strip:
  1. Workflow-native reliability: durable background workers and replayable workflows
  2. Unified cloud + self-hosted model under one navigation system
  3. Deep credential and key lifecycle support, not only environment variables
  4. Rollout controls by role/org for controlled launches

### Personas Section

- [ ] **PER-01**: Two new persona cards added: "Teams migrating from Vercel/Supabase" and "Platform / DevOps / SRE teams"
- [ ] **PER-02**: Existing 3 personas (bootstrapped startups, B2B SaaS, growing teams 5-20) preserved

### DesignPartnerCTA

- [x] **CTA-01**: Form submit button label updated to "Apply as a founding partner" (consistency with hero)

## v2 Requirements

Deferred — not in current milestone.

- Screenshot/visual updates to match platform UI
- Mobile-specific optimizations
- A/B testing integration
- Analytics events on CTA clicks

## Out of Scope

| Feature | Reason |
|---------|--------|
| Visual redesign | Copy and structure updates only per brief |
| New page sections | Scope is updates to existing sections |
| Full Gaia-X badge removal | Soften rather than remove |
| Form backend changes | Formspree ID must stay as-is |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| HERO-01 | Phase 1 | Complete |
| HERO-02 | Phase 1 | Complete |
| CLAIM-01 | Phase 1 | Complete |
| CLAIM-02 | Phase 1 | Complete |
| CLAIM-03 | Phase 1 | Complete |
| CLAIM-04 | Phase 1 | Complete |
| CLAIM-05 | Phase 1 | Complete |
| PROB-01 | Phase 1 | Complete |
| PROB-02 | Phase 1 | Complete |
| PROB-03 | Phase 1 | Complete |
| CTA-01 | Phase 1 | Complete |
| SOV-01 | Phase 2 | Complete |
| SOV-02 | Phase 2 | Complete |
| SOV-03 | Phase 2 | Complete |
| SOV-04 | Phase 2 | Complete |
| TRUST-01 | Phase 2 | Complete |
| FEAT-01 | Phase 3 | Complete |
| FEAT-02 | Phase 3 | Complete |
| FEAT-03 | Phase 3 | Complete |
| FEAT-04 | Phase 3 | Complete |
| FEAT-05 | Phase 3 | Complete |
| FEAT-06 | Phase 3 | Complete |
| HOW-01 | Phase 3 | Complete |
| HOW-02 | Phase 3 | Complete |
| PER-01 | Phase 3 | Complete |
| PER-02 | Phase 3 | Complete |
| CLAIM-10 | Phase 4 | Complete |
| CLAIM-11 | Phase 4 | Complete |

**Coverage:**
- v1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0 ✓
- All complete: 26/26

---
*Requirements defined: 2026-03-09*
*Last updated: 2026-03-11 — CLAIM-10 and CLAIM-11 added (Phase 4); all requirements marked complete*
