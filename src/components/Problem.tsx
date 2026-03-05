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
    title: "The US tax",
    body: "Vercel, Railway, and Render give you great DX \u2014 but your data sits in US-owned data centers, you pay US prices, and one GDPR audit turns into a legal project. You\u2019re renting someone else\u2019s platform in someone else\u2019s jurisdiction.",
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
    body: "You could self-host. Set up Kubernetes, configure CI/CD, build monitoring, wire up secrets management. That\u2019s 3 months of your best engineer\u2019s time \u2014 and you still don\u2019t have product-market fit.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "The cost spiral",
    body: "AWS bills grow 20\u201340% year over year. By Series A you\u2019re spending \u20AC2K/month on infrastructure that should cost \u20AC400. Every euro of burn that goes to cloud providers is a euro that doesn\u2019t go to product.",
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
