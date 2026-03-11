# HowItWorks: Day 0 / Day 1 / Day 2 Copy Recommendations

**Produced:** 2026-03-09
**Covers requirements:** HOW-01, HOW-02

---

## Section Heading

**Current:** "From zero to production in one afternoon"

**Recommendation: Keep with optional refinement.**

The current heading is punchy and benefit-led. It works well as a promise. If the Day 0/1/2 framing is adopted, consider a light evolution to signal maturity beyond "set up and deploy":

> "Provision, ship, and operate — in one afternoon."

This variant signals the full lifecycle rather than just initial go-live, without losing the urgency of the original. It also pairs cleanly with the Day 0/1/2 labels below. Either version is defensible; the revised form fits better when the steps explicitly name operations as a first-class concern.

---

## Step Copy

### Day 0 — Provision

**Step label:** `Day 0`

**Title:** Infrastructure ready before your first deploy

**Body:**
Connect your Hetzner, Scaleway, or AWS credentials and NuPaas provisions the full stack: K3s cluster, WireGuard mesh, Traefik ingress, and container registry — no YAML authoring required. Node lifecycle, cloud connector sync, and auto-onboarding are handled from the start, so your team inherits a production-grade foundation rather than building one.

---

### Day 1 — Ship

**Step label:** `Day 1`

**Title:** Git-push deploys with secrets from day one

**Body:**
Connect a Git repository and every push triggers a build, containerization, and deploy with a live URL — pull requests get isolated preview environments with automatic TTL cleanup so staging debt does not accumulate. Vault-backed secrets, domain and DNS configuration, and SSL provisioning are available on the first deploy, not retrofitted later.

---

### Day 2 — Operate

**Step label:** `Day 2`

**Title:** Observe, audit, and recover without heroics

**Body:**
A live status dashboard with SSE streaming, structured log and trace explorers, saved searches, and configurable alerts give your team visibility without assembling a monitoring stack from scratch. Credential rotation, SSH key lifecycle, audit logs, durable background workers, and rollout controls by role mean that the operational controls your on-call team needs are already in place when incidents happen.

---

## Differentiating Day 2 Aspects vs. Typical PaaS

Most PaaS tools treat Day 2 as the customer's problem. They provide deployment and may offer basic log streaming, but stop short of the operational surface that mature engineering teams actually depend on. The NuPaas Day 2 capabilities that are most differentiated against typical PaaS competitors (Railway, Render, Heroku, Fly.io) are:

**1. Durable workflows and replayable workers**
Generic PaaS platforms run containers but provide no native model for durable background jobs or replayable event-driven workers. Offering this as a platform-level primitive — not a bolt-on third-party service — is a meaningful differentiator for teams running async workloads (billing pipelines, ETL, webhook retry logic).

**2. Credential and SSH key lifecycle management**
Most PaaS tools expose environment variables; few model the full credential lifecycle (rotation, verification, SSH key issuance and revocation) as part of the platform. This matters to teams subject to audit requirements or internal security policy — it directly addresses the "compliance pressure" framing in the Problem section.

**3. Rollout controls by role**
Fine-grained deploy controls tied to org roles is rare in PaaS. It enables progressive rollouts and controlled launches without bolting on a feature flag service, which is meaningful to B2B SaaS teams shipping to specific customer segments.

**4. Audit logs as a first-class platform feature**
Audit logs are frequently sold as an enterprise add-on tier. Positioning them as available from day one reinforces the "audit-friendly controls" language in the Sovereignty section and supports the GDPR-conscious teams framing without making compliance certifications claims.

**5. SSE-streamed status dashboard**
Real-time cluster and workload status via server-sent events, rather than a polling dashboard or a separate external monitoring tool, is a developer experience differentiator that signals platform maturity without overstating performance guarantees.

---

## Copy Guidance Notes

- Do not frame Day 0/1/2 as sequential gates a customer must pass before accessing features. They are mental model labels, not onboarding phases.
- "Vault-backed secrets from day one" is a strong, specific claim. It is defensible as long as Vault integration is available at initial deploy, not deferred to a paid tier.
- Avoid "zero downtime" or "instant" language in Day 2 rollout controls copy — rollout control and recovery tooling is the claim, not guaranteed uptime.
- The phrase "without heroics" in the Day 2 title is intentional: it speaks directly to the on-call experience without making SLA claims.

---

*Research output for NuPaas landing page — HOW-01 / HOW-02*
