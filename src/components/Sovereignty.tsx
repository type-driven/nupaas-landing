import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/sovereignty.css";

export function Sovereignty() {
  return (
    <SectionWrapper alt id="sovereignty">
      <h2 className="section-heading">
        Security and sovereignty, built in
      </h2>
      <p className="sovereignty-intro">
        Not bolted on as an afterthought. Every layer of NuPaas is designed so
        you stay in control of your infrastructure, your data, and your
        compliance posture.
      </p>

      <div className="sovereignty-cards reveal-children">
        {/* Card 1: Access Control */}
        <div className="sovereignty-card">
          <div className="sovereignty-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h3>Access control & governance</h3>
          <p>
            Fine-grained role-based access control with organization and project
            scopes. Least-privilege permissions by default, comprehensive audit
            trails for every user action, deployment, and configuration change.
          </p>
          <div className="sovereignty-tags">
            <span className="sovereignty-tag">RBAC</span>
            <span className="sovereignty-tag">Audit logs</span>
            <span className="sovereignty-tag">Project scopes</span>
          </div>
        </div>

        {/* Card 2: Stack Ownership */}
        <div className="sovereignty-card">
          <div className="sovereignty-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" />
              <circle cx="6" cy="6" r="1" fill="var(--accent)" />
              <circle cx="6" cy="18" r="1" fill="var(--accent)" />
            </svg>
          </div>
          <h3>You own the entire stack</h3>
          <p>
            Your servers, your cloud account, your Kubernetes cluster. No
            US-owned intermediary processing your data. When a customer asks
            "where does our data live?" you point to a rack in Frankfurt and
            say "right there."
          </p>
          <div className="sovereignty-tags">
            <span className="sovereignty-tag">Your infrastructure</span>
            <span className="sovereignty-tag">No vendor lock-in</span>
            <span className="sovereignty-tag">Full portability</span>
          </div>
        </div>

        {/* Card 3: Compliance & Gaia-X */}
        <div className="sovereignty-card">
          <div className="sovereignty-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3>Designed for GDPR-conscious teams, Gaia-X aligned</h3>
          <p>
            GDPR compliance is baked into the architecture, not bolted on as a
            checkbox. NuPaas is designed for teams with GDPR-conscious data
            handling requirements, with audit-friendly controls and deployment
            patterns that align with the Gaia-X trust framework for sovereign
            cloud services.
          </p>
          <div className="sovereignty-badges">
            <div className="sovereignty-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              GDPR
            </div>
            <div className="sovereignty-badge sovereignty-badge-gaiax">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeLinecap="round" />
              </svg>
              Gaia-X aligned
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
