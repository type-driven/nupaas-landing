import type { ReactNode } from "react";
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/features.css";

type Pillar = {
  name: string;
  icon: ReactNode;
  features: string[];
};

const pillars: Pillar[] = [
  {
    name: "Ship",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    features: [
      "Project lifecycle management",
      "Git-push deploys with build logs",
      "Deployment history and rollback",
      "Preview environments with TTL cleanup",
      "Custom domains, DNS, and SSL",
    ],
  },
  {
    name: "Operate",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    features: [
      "Node lifecycle management",
      "Node groups and auto-scaling",
      "Multi-cloud provisioning and sync",
      "Auto-onboarding for new nodes",
      "Stack deploys across providers",
    ],
  },
  {
    name: "Secure",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    features: [
      "Org, member, invite, and access-key lifecycle",
      "Credential verification",
      "SSH key lifecycle",
      "Vault-backed secrets management",
      "Audit logs",
    ],
  },
  {
    name: "Observe",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    features: [
      "Live status dashboard with SSE stream",
      "Structured log and trace explorers",
      "Dashboards and saved searches",
      "Configurable alerts",
    ],
  },
  {
    name: "Migrate",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    features: [
      "Source control integrations",
      "Domain and DNS migration flows",
      "Supabase Lift",
      "Vercel Lift",
    ],
  },
];

export function Features() {
  return (
    <SectionWrapper alt id="features">
      <h2 className="section-heading">
        Everything you need. Nothing you don't.
      </h2>
      <div className="features-pillars reveal-children">
        {pillars.map((pillar) => (
          <div key={pillar.name} className="pillar-card">
            <div className="pillar-header">
              <div className="pillar-icon" aria-hidden="true">{pillar.icon}</div>
              <h3 className="pillar-name">{pillar.name}</h3>
            </div>
            <ul className="pillar-features">
              {pillar.features.map((f) => (
                <li key={f} className="pillar-feature-item">
                  <span className="pillar-dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
