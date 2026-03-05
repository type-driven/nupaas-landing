import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/how-it-works.css";

const steps = [
  {
    number: "01",
    title: "Connect your cloud",
    body: "Bring your Hetzner, Scaleway, or AWS credentials. NuPaas provisions and configures your nodes automatically \u2014 K3s cluster, WireGuard mesh, Traefik ingress, container registry. No YAML.",
  },
  {
    number: "02",
    title: "Push your code",
    body: "Connect a Git repo. NuPaas builds, containerizes, and deploys. Every PR gets a preview URL. Merge to main and it's live.",
  },
  {
    number: "03",
    title: "Scale without thinking",
    body: "Add nodes from any provider. NuPaas auto-joins them to your cluster and distributes workloads. Multi-cloud by default, not by effort.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <h2 className="section-heading">
        From zero to production in one afternoon
      </h2>
      <div className="steps-grid reveal-children">
        {steps.map((s, i) => (
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
