import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/features.css";

const features = [
  { name: "Git push deploys", detail: "Connect any repo, auto-build, auto-deploy" },
  { name: "Preview environments", detail: "Every PR gets a live URL with TTL cleanup" },
  { name: "Managed databases", detail: "One-click provisioning with health monitoring" },
  { name: "Secrets management", detail: "Vault-backed, auto-rotation, org-scoped" },
  { name: "Multi-cloud", detail: "Hetzner, Scaleway, AWS, DigitalOcean \u2014 mix and match" },
  { name: "WireGuard mesh", detail: "Encrypted private networking across all providers" },
  { name: "RBAC & audit logs", detail: "Org-scoped permissions, full activity trail" },
  { name: "Custom domains & SSL", detail: "Automatic Let's Encrypt, DNS management" },
  { name: "Real-time monitoring", detail: "Alerts, health checks, resource dashboards" },
  { name: "Self-hosted Git", detail: "Built-in Gitea with SSO \u2014 no GitHub dependency" },
];

export function Features() {
  return (
    <SectionWrapper alt id="features">
      <h2 className="section-heading">
        Everything you need. Nothing you don't.
      </h2>
      <div className="features-grid reveal-children">
        {features.map((f) => (
          <div key={f.name} className="feature-item">
            <div className="feature-dot" />
            <div>
              <strong className="feature-name">{f.name}</strong>
              <span className="feature-detail">{f.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
