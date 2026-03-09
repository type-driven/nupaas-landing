import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/how-it-works.css";

const steps = [
  {
    number: "Day 0",
    title: "Infrastructure ready before your first deploy",
    body: "Connect your Hetzner, Scaleway, or AWS credentials and NuPaas provisions the full stack: K3s cluster, WireGuard mesh, Traefik ingress, and container registry — no YAML authoring required. Node lifecycle, cloud connector sync, and auto-onboarding are handled from the start, so your team inherits a production-grade foundation rather than building one.",
  },
  {
    number: "Day 1",
    title: "Git-push deploys with secrets from day one",
    body: "Connect a Git repository and every push triggers a build, containerization, and deploy with a live URL — pull requests get isolated preview environments with automatic TTL cleanup so staging debt does not accumulate. Vault-backed secrets, domain and DNS configuration, and SSL provisioning are available on the first deploy, not retrofitted later.",
  },
  {
    number: "Day 2",
    title: "Observe, audit, and recover without heroics",
    body: "A live status dashboard with SSE streaming, structured log and trace explorers, saved searches, and configurable alerts give your team visibility without assembling a monitoring stack from scratch. Credential rotation, SSH key lifecycle, audit logs, durable background workers, and rollout controls by role mean that the operational controls your on-call team needs are already in place when incidents happen.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <h2 className="section-heading">
        Provision, ship, and operate — in one afternoon.
      </h2>
      <div className="steps-grid reveal-children">
        {steps.map((s) => (
          <div key={s.number} className="step-card">
            <div className="step-number">{s.number}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
