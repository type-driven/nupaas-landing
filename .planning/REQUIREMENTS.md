# Requirements: NuPaas Landing Page

**Defined:** 2026-03-09
**Core Value:** Drive qualified founding partner applications from European engineering teams who need infrastructure control without the operational overhead.

## v1 Requirements

Requirements for this milestone — aligning the landing page with the marketing handoff doc.

### Hero

- [ ] **HERO-01**: Hero CTA button reads "Apply as a founding partner" (not "Apply for early access")
- [ ] **HERO-02**: Hero supporting note reads "We are onboarding 10 founding partners" (already correct — validate)

### Claims

- [ ] **CLAIM-01**: "80% less" in Solution headline softened to "up to 80% less" or directional framing with methodology note
- [ ] **CLAIM-02**: "2s to production" annotation replaced with "seconds to production" or removed
- [ ] **CLAIM-03**: "€133/mo" annotation updated to be framed as illustrative scenario
- [ ] **CLAIM-04**: Solution section adds a short methodology note (directional, not absolute)
- [ ] **CLAIM-05**: Comparison table adopts "illustrative scenario" framing with methodology footnote

### Problem Section

- [ ] **PROB-01**: Problem card 1 keeps punchy name ("The US tax") but body updated to "Fragmented tooling" framing — app delivery, infra, and security split across multiple products
- [ ] **PROB-02**: Problem card 2 keeps punchy name ("The DIY trap") but body updated to "Compliance pressure" framing — data residency and governance blocking enterprise deals
- [ ] **PROB-03**: Problem card 3 keeps punchy name ("The cost spiral") but body updated to "Rising ops burden" framing — cloud complexity increases before teams justify a platform org

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

- [ ] **CTA-01**: Form submit button label updated to "Apply as a founding partner" (consistency with hero)

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
| HERO-01, HERO-02 | Phase 1 | Pending |
| CLAIM-01–05 | Phase 1 | Pending |
| PROB-01–03 | Phase 1 | Pending |
| CTA-01 | Phase 1 | Pending |
| SOV-01–04 | Phase 2 | Pending |
| TRUST-01 | Phase 2 | Pending |
| FEAT-01–06 | Phase 3 | Pending |
| PER-01–02 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-09*
*Last updated: 2026-03-09 after initial definition*
