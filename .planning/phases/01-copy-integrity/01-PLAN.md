---
phase: 01-copy-integrity
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - src/components/Hero.tsx
  - src/components/Solution.tsx
  - src/components/Comparison.tsx
  - src/components/Problem.tsx
  - src/components/DesignPartnerCTA.tsx
autonomous: true
requirements: [HERO-01, HERO-02, CLAIM-01, CLAIM-02, CLAIM-03, CLAIM-04, CLAIM-05, PROB-01, PROB-02, PROB-03, CTA-01]

must_haves:
  truths:
    - "Hero CTA button reads 'Apply as a founding partner' (not 'Apply for early access')"
    - "Hero supporting note reads 'We are onboarding 10 founding partners. Limited spots.' (already present — validated)"
    - "Solution headline reads 'For up to 80% less.' (not 'For 80% less.')"
    - "Solution annotation reads 'Seconds' / 'to production' (not '2s' / 'to production')"
    - "Solution point heading reads 'Up to 80% less than GCP' and body carries illustrative-scenario framing"
    - "Solution section has a visible methodology note below the three points"
    - "Comparison section heading reads 'The math, in an illustrative scenario'"
    - "Comparison table has a second footnote with the methodology disclaimer below the existing AWS footnote"
    - "Problem card 1 ('The US tax') body reflects Compliance pressure framing"
    - "Problem card 2 ('The DIY trap') body reflects Fragmented tooling framing"
    - "Problem card 3 ('The cost spiral') body reflects Rising ops burden framing"
    - "Form submit button reads 'Apply as a founding partner' (not 'Get early access')"
  artifacts:
    - path: "src/components/Hero.tsx"
      provides: "Updated CTA button label"
      contains: "Apply as a founding partner"
    - path: "src/components/Solution.tsx"
      provides: "Softened claims + methodology note"
      contains: "up to 80%"
    - path: "src/components/Comparison.tsx"
      provides: "Illustrative scenario heading + methodology footnote"
      contains: "illustrative scenario"
    - path: "src/components/Problem.tsx"
      provides: "Rewritten problem card body copy"
      contains: "fragmented stack"
    - path: "src/components/DesignPartnerCTA.tsx"
      provides: "Consistent form submit label"
      contains: "Apply as a founding partner"
  key_links:
    - from: "Hero.tsx"
      to: "DesignPartnerCTA.tsx"
      via: "CTA label consistency"
      pattern: "Apply as a founding partner"
    - from: "Solution.tsx headline"
      to: "Solution.tsx point heading"
      via: "both must read 'up to 80%' — not just one of them"
      pattern: "up to 80%"
    - from: "Comparison.tsx heading"
      to: "Comparison.tsx footnote"
      via: "heading sets expectation, footnote provides methodology — both required"
      pattern: "illustrative scenario"
---

<objective>
Make every public claim on the landing page defensible and align CTAs end-to-end.

Purpose: The current page contains unqualified performance claims ("80% less", "2s to production") and inconsistent CTA labels ("Apply for early access" vs "founding partner" framing everywhere else). These undermine trust and create legal exposure. This plan corrects all flagged items in CLAIM-AUDIT.md that fall within Phase 1 scope.

Output: Five updated TSX files with zero unqualified claims, consistent CTA wording, and illustrative-scenario framing on all cost comparisons.
</objective>

<execution_context>
@/Users/davidpeter/.claude/get-shit-done/workflows/execute-plan.md
@/Users/davidpeter/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/research/CLAIM-AUDIT.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Fix Hero CTA and Solution claims</name>
  <files>src/components/Hero.tsx, src/components/Solution.tsx</files>
  <action>
Apply the following exact copy changes. Do not alter any JSX structure, class names, imports, or logic — only the string content listed.

**Hero.tsx — line 24:**
Old: `Apply for early access`
New: `Apply as a founding partner`

The hero-note on line 28 already reads "We are onboarding 10 founding partners. Limited spots." — leave it unchanged (HERO-02 validated).

---

**Solution.tsx — line 27 (headline):**
Old: `For 80% less.`
New: `For up to 80% less.`

**Solution.tsx — line 43 (anno-value span inside anno-1):**
Old: `2s`
New: `Seconds`

(The anno-label span on the next line already reads "to production" — leave it unchanged.)

**Solution.tsx — line 84 (solution-point h3):**
Old: `80% less than GCP`
New: `Up to 80% less than GCP`

**Solution.tsx — lines 85–88 (solution-point p):**
Old:
```
Full production multi-cloud for ~{"€133"}/month. We route each
workload to the cheapest provider automatically.
```
New:
```
Full production multi-cloud for as low as ~{"€133"}/month in an illustrative 5-service, 2-environment scenario. NuPaas routes each workload to the most cost-effective provider.
```

**Solution.tsx — add methodology note after the closing `</div>` of the `solution-points` div (after line 90, before the closing `</div>` of the `solution` wrapper):**
Insert this JSX block:
```tsx
<p className="solution-methodology">
  Cost comparisons are directional estimates based on publicly available list pricing for comparable workloads. Actual savings vary by workload, region, and configuration.
</p>
```
This goes immediately after the `</div>` that closes `solution-points` and before the closing `</div>` that closes the `solution` wrapper div.
  </action>
  <verify>
    <automated>grep -n "Apply as a founding partner" src/components/Hero.tsx && grep -n "up to 80%" src/components/Solution.tsx && grep -n "Seconds" src/components/Solution.tsx && grep -n "Up to 80% less than GCP" src/components/Solution.tsx && grep -n "solution-methodology" src/components/Solution.tsx</automated>
  </verify>
  <done>
    - Hero.tsx line 24 contains "Apply as a founding partner"
    - Solution.tsx headline contains "up to 80%"
    - Solution anno-1 value reads "Seconds" (not "2s")
    - Solution point heading reads "Up to 80% less than GCP"
    - Solution point body references "illustrative 5-service, 2-environment scenario"
    - solution-methodology paragraph is present in Solution.tsx
  </done>
</task>

<task type="auto">
  <name>Task 2: Add illustrative-scenario framing to Comparison</name>
  <files>src/components/Comparison.tsx</files>
  <action>
Apply the following exact copy changes. Do not alter table data, class names, imports, or structure.

**Comparison.tsx — line 15 (section heading):**
Old: `The math speaks for itself`
New: `The math, in an illustrative scenario`

**Comparison.tsx — methodology footnote (add after the existing `comparison-footnote` paragraph, before the closing `</SectionWrapper>`):**
The existing footnote (line 41) reads:
```tsx
<p className="comparison-footnote">
  *EU regions available but at premium pricing and with US-entity data processing.
</p>
```
Add a second paragraph immediately after it:
```tsx
<p className="comparison-footnote">
  Illustrative scenario: 5 services across 2 environments. NuPaas pricing based on Hetzner/Scaleway spot rates as of Q1 2026. Competitor estimates based on published list pricing. Actual costs vary by workload and configuration.
</p>
```
Do not remove or modify the first footnote. Both footnotes should be present.
  </action>
  <verify>
    <automated>grep -n "illustrative scenario" src/components/Comparison.tsx && grep -c "comparison-footnote" src/components/Comparison.tsx</automated>
  </verify>
  <done>
    - Comparison.tsx heading reads "The math, in an illustrative scenario"
    - Two comparison-footnote paragraphs are present (grep count = 2)
    - Second footnote includes "Hetzner/Scaleway spot rates" and "Actual costs vary"
  </done>
</task>

<task type="auto">
  <name>Task 3: Rewrite Problem card bodies and fix form CTA</name>
  <files>src/components/Problem.tsx, src/components/DesignPartnerCTA.tsx</files>
  <action>
Apply the following exact copy changes. Do not alter headings, icons, class names, or any JSX structure — only the `body` strings in the problems array and the submit button label.

**Problem.tsx — Card 1 body (currently the `body` field for "The US tax"):**
Old:
```
"Vercel, Railway, and Render give you great DX \u2014 but your data sits in US-owned data centers, you pay US prices, and one GDPR audit turns into a legal project. You\u2019re renting someone else\u2019s platform in someone else\u2019s jurisdiction."
```
New (use unicode escapes to match file convention):
```
"Vercel, Railway, and Render offer great developer experience \u2014 but your data sits in US-owned infrastructure, subject to US legal jurisdiction. When a GDPR audit arrives or a customer asks where their data lives, that convenience turns into a compliance project. You\u2019re building on someone else\u2019s platform in someone else\u2019s jurisdiction, and your compliance posture pays the price."
```

**Problem.tsx — Card 2 body (currently the `body` field for "The DIY trap"):**
Old:
```
"You could self-host. Set up Kubernetes, configure CI/CD, build monitoring, wire up secrets management. That\u2019s 3 months of your best engineer\u2019s time \u2014 and you still don\u2019t have product-market fit."
```
New:
```
"You could self-host. But self-hosting means assembling a fragmented stack: Kubernetes for orchestration, a CI/CD pipeline, a secrets manager, a monitoring stack, DNS and SSL tooling \u2014 each from a different vendor, each requiring ongoing maintenance. Before you\u2019ve shipped a single feature, your best engineers are maintaining glue code instead of building product."
```

**Problem.tsx — Card 3 body (currently the `body` field for "The cost spiral"):**
Old:
```
"AWS bills grow 20\u201340% year over year. By Series A you\u2019re spending \u20AC2K/month on infrastructure that should cost \u20AC400. Every euro of burn that goes to cloud providers is a euro that doesn\u2019t go to product."
```
New:
```
"As your product grows, so does the operational surface area. More services, more environments, more alerts, more on-call rotations. Cloud bills compound \u2014 often 20\u201340% year over year \u2014 while the engineering time spent managing infrastructure scales right alongside them. By Series A, you\u2019re running a small ops department you never planned to hire."
```

---

**DesignPartnerCTA.tsx — line 95 (submit button label):**
Old: `"Get early access"`
New: `"Apply as a founding partner"`

The ternary is: `{state.submitting ? "Sending..." : "Get early access"}`
Change only the "Get early access" string — leave "Sending..." unchanged.
New ternary: `{state.submitting ? "Sending..." : "Apply as a founding partner"}`
  </action>
  <verify>
    <automated>grep -n "fragmented stack" src/components/Problem.tsx && grep -n "compliance posture" src/components/Problem.tsx && grep -n "ops department" src/components/Problem.tsx && grep -n "Apply as a founding partner" src/components/DesignPartnerCTA.tsx</automated>
  </verify>
  <done>
    - Problem.tsx card 1 body contains "compliance posture pays the price"
    - Problem.tsx card 2 body contains "fragmented stack" and "glue code"
    - Problem.tsx card 3 body contains "ops department you never planned to hire"
    - DesignPartnerCTA.tsx submit label reads "Apply as a founding partner"
    - All three punchy card headings ("The US tax", "The DIY trap", "The cost spiral") remain unchanged
    - FORMSPREE_ID const "xdalqpbq" is unchanged
  </done>
</task>

</tasks>

<verification>
After all three tasks complete, run the full suite:

```bash
grep -n "Apply as a founding partner" src/components/Hero.tsx src/components/DesignPartnerCTA.tsx
grep -n "Apply for early access\|Get early access" src/components/Hero.tsx src/components/DesignPartnerCTA.tsx
grep -n "For up to 80% less\|Up to 80% less than GCP" src/components/Solution.tsx
grep -n "For 80% less\.\|80% less than GCP\"" src/components/Solution.tsx
grep -n "Seconds" src/components/Solution.tsx
grep -rn "\"2s\"" src/components/Solution.tsx
grep -n "solution-methodology" src/components/Solution.tsx
grep -n "illustrative scenario" src/components/Comparison.tsx
grep -c "comparison-footnote" src/components/Comparison.tsx
grep -n "fragmented stack" src/components/Problem.tsx
grep -n "compliance posture" src/components/Problem.tsx
grep -n "ops department" src/components/Problem.tsx
```

Expected: The second grep in each pair (searching for old text) returns no matches. All first greps return matches.

Then confirm the dev server renders without errors:
```bash
npm run build 2>&1 | tail -20
```
</verification>

<success_criteria>
1. Hero CTA button reads "Apply as a founding partner" — verified by grep
2. Solution headline reads "For up to 80% less." — verified by grep
3. Solution anno reads "Seconds / to production" — verified by grep
4. Solution point heading reads "Up to 80% less than GCP" with illustrative-scenario body — verified by grep
5. Solution methodology note paragraph is present — verified by grep
6. Comparison heading reads "The math, in an illustrative scenario" — verified by grep
7. Two comparison-footnote paragraphs present, second contains methodology text — verified by grep count = 2
8. Problem card bodies match the Fragmented tooling / Compliance pressure / Rising ops burden framings from CLAIM-AUDIT.md — verified by grep on key phrases
9. DesignPartnerCTA submit button reads "Apply as a founding partner" — verified by grep
10. No unqualified "80% less" or "2s" claims remain in Hero, Solution, Comparison, or DesignPartnerCTA
11. `npm run build` exits 0 with no TypeScript errors
</success_criteria>

<output>
After completion, create `.planning/phases/01-copy-integrity/01-copy-integrity-01-SUMMARY.md` with:
- What was changed (file by file, with old → new for each change)
- Any deviations from the plan (e.g., line numbers that differed)
- Build verification result
- Requirements addressed: HERO-01, HERO-02, CLAIM-01, CLAIM-02, CLAIM-03, CLAIM-04, CLAIM-05, PROB-01, PROB-02, PROB-03, CTA-01
</output>
