import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/comparison.css";

const rows = [
  { label: "5 services, 2 envs", railway: "€200/mo", aws: "€500/mo", gcp: "€665/mo", nupaas: "€133/mo" },
  { label: "Data residency", railway: "US", aws: "Configurable*", gcp: "Configurable*", nupaas: "EU by default" },
  { label: "Vendor lock-in", railway: "High", aws: "Medium", gcp: "High", nupaas: "None" },
  { label: "Setup time", railway: "Minutes", aws: "Weeks", gcp: "Weeks", nupaas: "Hours (once)" },
  { label: "You own the infra", railway: "No", aws: "Yes", gcp: "Yes", nupaas: "Yes" },
];

export function Comparison() {
  return (
    <SectionWrapper id="pricing">
      <h2 className="section-heading">The math speaks for itself</h2>
      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th></th>
              <th>Railway</th>
              <th>AWS (DIY)</th>
              <th>GCP</th>
              <th className="highlight-col">NuPaas</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="row-label">{r.label}</td>
                <td>{r.railway}</td>
                <td>{r.aws}</td>
                <td>{r.gcp}</td>
                <td className="highlight-col">{r.nupaas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="comparison-footnote">
        *EU regions available but at premium pricing and with US-entity data processing.
      </p>
    </SectionWrapper>
  );
}
