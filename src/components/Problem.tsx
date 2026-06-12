import type { ReactNode } from "react";
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/problem.css";

interface ProblemItem {
  icon: ReactNode;
  title: string;
  body: string;
}

const problems: ProblemItem[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "The jurisdiction gap",
    body: "Modern deployment platforms offer great developer experience \u2014 but most run on US-owned infrastructure, subject to US legal jurisdiction. When a GDPR audit arrives or a customer asks where their data lives, that convenience turns into a compliance project. You\u2019re building on someone else\u2019s platform in someone else\u2019s jurisdiction, and your compliance posture pays the price.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "The DIY trap",
    body: "You could self-host. But self-hosting means assembling a fragmented stack: Kubernetes for orchestration, a CI/CD pipeline, a secrets manager, a monitoring stack, DNS and SSL tooling \u2014 each from a different vendor, each requiring ongoing maintenance. Before you\u2019ve shipped a single feature, your best engineers are maintaining glue code instead of building product.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "The cost spiral",
    body: "As your product grows, so does the operational surface area. More services, more environments, more alerts, more on-call rotations. Cloud bills compound \u2014 often 20\u201340% year over year \u2014 while the engineering time spent managing infrastructure scales right alongside them. By Series A, you\u2019re running a small ops department you never planned to hire.",
  },
];

export function Problem() {
  return (
    <SectionWrapper id="problem">
      <h2 className="section-heading">
        The European startup infrastructure dilemma
      </h2>
      <div className="problem-grid reveal-children">
        {problems.map((p) => (
          <div key={p.title} className="problem-card">
            <div className="problem-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
