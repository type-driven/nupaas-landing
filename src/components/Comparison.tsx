import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/comparison.css";

const providers = ["Railway", "AWS (DIY)", "GCP", "NuPaas"] as const;

const rows = [
  { label: "5 services, 2 envs", railway: "€200/mo", aws: "€500/mo", gcp: "€665/mo", nupaas: "€133/mo" },
  { label: "Data residency", railway: "US", aws: "Configurable*", gcp: "Configurable*", nupaas: "EU by default" },
  { label: "Vendor lock-in", railway: "High", aws: "Medium", gcp: "High", nupaas: "None" },
  { label: "Setup time", railway: "Minutes", aws: "Weeks", gcp: "Weeks", nupaas: "Hours (once)" },
  { label: "You own the infra", railway: "No", aws: "Yes", gcp: "Yes", nupaas: "Yes" },
];

const keys: Record<typeof providers[number], keyof typeof rows[number]> = {
  "Railway": "railway",
  "AWS (DIY)": "aws",
  "GCP": "gcp",
  "NuPaas": "nupaas",
};

export function Comparison() {
  return (
    <SectionWrapper id="pricing">
      <h2 className="section-heading">The math, in an illustrative scenario</h2>
      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th></th>
              {providers.map((p) => (
                <th key={p} className={p === "NuPaas" ? "highlight-col" : ""}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="row-label">{r.label}</td>
                {providers.map((p) => (
                  <td
                    key={p}
                    className={p === "NuPaas" ? "highlight-col" : ""}
                    data-label={p}
                  >
                    {r[keys[p]]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="comparison-footnote">
        *EU regions available but at premium pricing and with US-entity data processing.
      </p>
      <p className="comparison-footnote">
        Illustrative scenario: 5 services across 2 environments. NuPaas pricing based on Hetzner/Scaleway spot rates as of Q1 2026. Competitor estimates based on published list pricing. Actual costs vary by workload and configuration.
      </p>
    </SectionWrapper>
  );
}
