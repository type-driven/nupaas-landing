# NuPaas Landing Page — Claim Audit

**Audit date:** 2026-03-09
**Auditor:** Marketing Claims Audit (per handoff doc guidance in PROJECT.md)
**Scope:** All user-facing claims across Hero, Solution, Problem, Features, Comparison, Sovereignty, Personas, DesignPartnerCTA

---

## Flagged Claims — Replacement Copy Sheet

| # | Location | Component | Current copy | Issue | Replacement copy |
|---|----------|-----------|--------------|-------|-----------------|
| 1 | `Hero.tsx` line 24 | Hero CTA button | `Apply for early access` | CTA label does not match the founding partner framing used in the rest of the page (PROJECT.md Active task: update CTA) | `Apply as a founding partner` |
| 2 | `Solution.tsx` line 27 | Solution headline | `For 80% less.` | Unqualified absolute cost claim — not defensible as a universal promise | `For up to 80% less.` |
| 3 | `Solution.tsx` line 43–44 | Screenshot annotation (anno-1) | `2s` / `to production` | Implies a guaranteed 2-second runtime; not defensible as a universal figure | `Seconds` / `to production` |
| 4 | `Solution.tsx` line 84–89 | Solution point heading + body | `80% less than GCP` / `Full production multi-cloud for ~€133/month. We route each workload to the cheapest provider automatically.` | Unqualified 80% claim tied to GCP comparison; absolute pricing figure presented without scenario context | Heading: `Up to 80% less than GCP` / Body: `Full production multi-cloud for as low as ~€133/month in an illustrative 5-service, 2-environment scenario. NuPaas routes each workload to the most cost-effective provider.` |
| 5 | `Comparison.tsx` line 15 | Comparison section heading | `The math speaks for itself` | Heading implies the comparison is objective fact; needs illustrative framing | `The math, in an illustrative scenario` |
| 6 | `Comparison.tsx` — no methodology note | Comparison table footer | *(no methodology note present)* | Handoff doc requires comparisons to be framed as "illustrative scenario" with a methodology note | Add below the existing footnote: `Illustrative scenario: 5 services across 2 environments. NuPaas pricing based on Hetzner/Scaleway spot rates as of Q1 2026. Competitor estimates based on published list pricing. Actual costs vary by workload and configuration.` |
| 7 | `Sovereignty.tsx` line 72 | Sovereignty card 3 heading | `GDPR & Gaia-X ready` | "Gaia-X ready" is unqualified; handoff doc requires "Gaia-X aligned" | `Designed for GDPR-conscious teams, Gaia-X aligned` |
| 8 | `Sovereignty.tsx` line 73–77 | Sovereignty card 3 body | `GDPR compliance is the architecture, not a checkbox. NuPaas deployments are designed to qualify for a Gaia-X Self-Description credential — the EU trust framework for sovereign cloud services.` | Implies qualification for Gaia-X credential (unvalidated); combine with GDPR framing guidance | `GDPR compliance is baked into the architecture, not bolted on as a checkbox. NuPaas is designed for teams with GDPR-conscious data handling requirements, with audit-friendly controls and deployment patterns that align with the Gaia-X trust framework for sovereign cloud services.` |
| 9 | `Sovereignty.tsx` lines 92–98 | Sovereignty badge | `SOC 2 ready` badge (lock icon) | Unqualified compliance claim — handoff doc requires removal of the SOC 2 ready badge | Remove the SOC 2 ready `<div class="sovereignty-badge">` block entirely (lines 92–98) |
| 10 | `Personas.tsx` line 13–14 | Bento stat card (row 1) | `80%` / `lower infra costs` | Absolute stat without qualification; mirrors the unqualified 80% claim | `Up to 80%` / `lower infra costs` |
| 11 | `Personas.tsx` lines 22–24 | Bootstrapped startups persona body | `NuPaas cuts your infra bill by 80% so you can extend your runway and focus on product.` | Unqualified 80% claim | `NuPaas can cut your infra bill by up to 80%, helping you extend runway and stay focused on product.` |
| 12 | `DesignPartnerCTA.tsx` line 95 | Form submit button | `Get early access` | Inconsistent with "founding partner" framing used in the section heading (line 15) | `Apply as a founding partner` |

---

## Problem Section — Replacement Body Copy

Keep the punchy headings unchanged. Replace body copy to reflect the three handoff doc framings: **Fragmented tooling**, **Compliance pressure**, **Rising ops burden**.

### Card 1 — "The US tax"

**Theme:** Compliance pressure

> Vercel, Railway, and Render offer great developer experience — but your data sits in US-owned infrastructure, subject to US legal jurisdiction. When a GDPR audit arrives or a customer asks where their data lives, that convenience turns into a compliance project. You're building on someone else's platform in someone else's jurisdiction, and your compliance posture pays the price.

---

### Card 2 — "The DIY trap"

**Theme:** Fragmented tooling

> You could self-host. But self-hosting means assembling a fragmented stack: Kubernetes for orchestration, a CI/CD pipeline, a secrets manager, a monitoring stack, DNS and SSL tooling — each from a different vendor, each requiring ongoing maintenance. Before you've shipped a single feature, your best engineers are maintaining glue code instead of building product.

---

### Card 3 — "The cost spiral"

**Theme:** Rising ops burden

> As your product grows, so does the operational surface area. More services, more environments, more alerts, more on-call rotations. Cloud bills compound — often 20–40% year over year — while the engineering time spent managing infrastructure scales right alongside them. By Series A, you're running a small ops department you never planned to hire.

---

## Summary of Issue Categories

| Category | Count | Files affected |
|----------|-------|---------------|
| Unqualified "80%" cost claim | 4 | Solution.tsx, Personas.tsx |
| Guaranteed "2s to production" | 1 | Solution.tsx |
| Unqualified "SOC 2 ready" badge | 1 | Sovereignty.tsx |
| Unqualified "Gaia-X ready" | 1 | Sovereignty.tsx |
| Missing comparison methodology note | 2 | Comparison.tsx |
| CTA label inconsistency | 2 | Hero.tsx, DesignPartnerCTA.tsx |
| Problem card body copy (reframe) | 3 | Problem.tsx |

**Total flagged items: 12 copy changes + 3 Problem card rewrites**
