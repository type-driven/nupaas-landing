import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/features.css";

type Pillar = {
  name: string;
  icon: string;
  features: string[];
};

const pillars: Pillar[] = [
  {
    name: "Ship",
    icon: "⚡",
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
    icon: "⚙️",
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
    icon: "🔒",
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
    icon: "📊",
    features: [
      "Live status dashboard with SSE stream",
      "Structured log and trace explorers",
      "Dashboards and saved searches",
      "Configurable alerts",
    ],
  },
  {
    name: "Migrate",
    icon: "🚀",
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
              <span className="pillar-icon" aria-hidden="true">{pillar.icon}</span>
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
