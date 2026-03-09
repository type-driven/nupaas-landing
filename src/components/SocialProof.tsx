import type { ReactNode } from "react";
import "../styles/social-proof.css";

interface TechItem {
  name: string;
  icon: ReactNode;
}

const builtOn: TechItem[] = [
  {
    name: "Deno",
    icon: (
      <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor">
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-5.6 47.5c21.3-.4 42.8 2.9 63.3 10.2 60.6 21.5 105.7 70 124.5 129.6 1.5 4.7-2.1 9.3-7 9-30.6-2-60.7 7.8-83.7 28.3-22.3 19.8-35.6 47.6-37.1 77-.2 3.8-3.3 6.9-7.1 6.9h-46.6c-3.9 0-7-3.2-7.1-7.1-.7-41.5-19.4-80.6-51.5-108.1-32.1-27.4-73.7-39.8-115.2-34.2-4.8.6-9-3.3-8.1-8.1C90.2 87.4 176.4 48.9 250.4 47.5zm-122 189.8c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm46.4 108.4c-.5 3.7-3.7 6.5-7.5 6.5h-.4c-3.9-.3-7-3.6-6.8-7.5.4-9.3 1.6-18.6 3.6-27.7.9-4.1 4.9-6.6 9-5.7 4.1.9 6.6 4.9 5.7 9-.8 3.5-1.5 7.1-2 10.7l-1.6 14.7zm204.5 67.7c-33.5 47.5-85.3 79.1-143.6 88.3-4.7.7-8.8-3.3-8-8 5.2-30.4 1.2-61.8-11.4-90.2-12.2-27.6-32.5-50.7-58.1-66.3-3.3-2-4.5-6.3-2.7-9.7l22.9-43.4c1.9-3.5 6.2-4.9 9.8-3.2 36.8 17.7 66.5 47.3 84.4 83.9 17.3 35.3 23.2 75 17.1 113.5-.3 2.1.3 4.2 1.8 5.6 1.5 1.5 3.5 2.1 5.6 1.7 42.8-8 80.6-31.6 106.4-65.3 2.8-3.7 8.1-4.4 11.8-1.5 3.6 2.9 4.3 8.1 1.4 11.8-.5.6-1 1.3-1.5 1.9-8.2 10.6-23.3 28.7-35.9 40.9z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor">
        <path d="M0 0h512v512H0z" fill="#3178c6" rx="50" />
        <path d="M317 407v50c8 4 18 7 29 9s22 3 34 3c11 0 22-1 33-4s20-7 28-13 15-14 20-24 7-22 7-36c0-10-2-19-5-27s-7-15-13-21-12-11-19-16-15-9-23-13c-6-3-11-6-16-8s-8-5-11-8-5-5-7-8-2-6-2-10c0-3 1-6 2-8s4-5 6-7 6-3 10-4 8-2 13-2c3 0 7 0 11 1s8 2 12 3 7 3 10 5 6 4 7 6l24-33c-5-5-10-8-16-11s-13-5-20-7-14-3-21-3-14-1-20-1c-11 0-22 2-32 5s-19 8-27 14-14 14-19 24-7 21-7 34c0 14 4 26 11 36s19 18 34 26c6 3 12 6 18 9s10 6 14 9 7 6 10 10 3 8 3 12c0 4-1 7-2 10s-4 5-7 7-6 3-10 4-9 2-14 2c-10 0-20-2-29-7s-16-10-21-18zm-120 34h55V281h70v-45H127v45h70z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "K3s",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.3l8 4.6v9.2l-8 4.6-8-4.6V6.9l8-4.6zm0 3.2l-1.3.8v2.1L8.4 10l-1.3-.7v1.6l1.3.8 2.3-1.6v2.1l-2.3 1.6-1.3-.8v1.6l1.3.8L12 13.7l3.6 2.1 1.3-.8v-1.6l-1.3.8-2.3-1.6v-2.1l2.3 1.6 1.3-.8v-1.6l-1.3.7-2.3-1.6V6.3L12 5.5z" fill="#ffc61c" />
      </svg>
    ),
  },
  {
    name: "WireGuard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1C8.1 1 5 4.1 5 8c0 2.4 1.2 4.5 3 5.7V23l4-2.5 4 2.5V13.7c1.8-1.2 3-3.3 3-5.7 0-3.9-3.1-7-7-7zm-2 7.5c-.8 0-1.5-.7-1.5-1.5S9.2 5.5 10 5.5s1.5.7 1.5 1.5S10.8 8.5 10 8.5zm4 0c-.8 0-1.5-.7-1.5-1.5S13.2 5.5 14 5.5s1.5.7 1.5 1.5S14.8 8.5 14 8.5z" fill="#88171a" />
      </svg>
    ),
  },
  {
    name: "Vault",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1 6.5V8l11 6.5L23 8V6.5L12 0zm0 1.3l9.4 5.5L12 12.4 2.6 6.8 12 1.3zM2 9.2l10 5.9 10-5.9v1.5L12 16.6 2 10.7V9.2zm0 3.5l10 5.9 10-5.9v1.5L12 20.1 2 14.2v-1.5zm0 3.5l10 5.9 10-5.9v1.5L12 23.6 2 17.7v-1.5z" fill="#ffec6e" />
      </svg>
    ),
  },
];

const trustPoints = [
  {
    label: "Workflow-native reliability",
    body: "Durable background workers and replayable workflows — your jobs survive restarts and infra changes.",
  },
  {
    label: "Unified cloud + self-hosted",
    body: "One navigation system for cloud-provisioned and self-hosted nodes — no context switching between control planes.",
  },
  {
    label: "Deep credential lifecycle",
    body: "SSH keys, vault-backed secrets, and access-key rotation — not only environment variables.",
  },
  {
    label: "Rollout controls by role",
    body: "Gate deployments by org or role so teams can run controlled launches without feature flag infrastructure.",
  },
];

const deploysTo: TechItem[] = [
  {
    name: "Hetzner",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3v18h18V3H3zm2 2h14v14H5V5zm3 3v8h2v-3h4v3h2V8h-2v3H10V8H8z" fill="#d50c2d" />
      </svg>
    ),
  },
  {
    name: "Scaleway",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm0 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill="#4f0599" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.8 12.5l-.9 3h-.1l-.9-3H3.5l1.5 4.5h1.4l1.5-4.5H6.8zm4.1 0l-.7 2.1-.1.5-.1-.5-.7-2.1H8l1.3 4.5h1.2L11.8 13l1.3 4h1.2L15.6 12.5h-1.3l-.7 2.1-.1.5-.1-.5-.7-2.1h-1.8zm6.7 1.3c0-.8-.5-1.4-1.5-1.4-1.1 0-1.7.6-1.8 1.4h1c.1-.3.3-.5.7-.5s.6.2.6.5v.1l-1 .2c-.9.2-1.5.5-1.5 1.3 0 .7.5 1.1 1.3 1.1.5 0 .9-.2 1.2-.5v.4h1v-2.6zm-1 1.2c0 .4-.4.7-.8.7-.3 0-.5-.1-.5-.4 0-.3.3-.4.7-.5l.6-.1v.3z" />
        <path d="M18.4 16.2c-1.8 1.3-4.4 2-6.6 2-3.1 0-5.9-1.2-8.1-3.1-.2-.1 0-.3.2-.2 2.3 1.3 5.1 2.1 8.1 2.1 2 0 4.1-.4 6.1-1.2.3-.2.6.2.3.4z" fill="#f90" />
        <path d="M19.2 15.3c-.2-.3-.5-.3-.8-.3-.8.1-1.6.2-2 .3-.2 0-.2-.2 0-.3.9-.6 2.3-.4 2.5-.2.2.2 0 1.5-.9 2.1-.1.1-.3 0-.2-.1.5-.6.7-1.2.4-1.5z" fill="#f90" />
      </svg>
    ),
  },
  {
    name: "DigitalOcean",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12h5c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5v5c5.5 0 10-4.5 10-10S17.5 2 12 2zm-5 15H2v-5h5v5zm-1.5 3H2v-2.5h3.5V20zM2 22v-1.5h1.5V22H2z" fill="#0080ff" />
      </svg>
    ),
  },
];

export function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="trust-points-grid">
          {trustPoints.map((tp) => (
            <div key={tp.label} className="trust-point">
              <span className="trust-point-label">{tp.label}</span>
              <p className="trust-point-body">{tp.body}</p>
            </div>
          ))}
        </div>
        <div className="social-proof-inner">
          <div className="social-proof-group">
            <span className="social-proof-label">Built on</span>
            <div className="social-proof-items">
              {builtOn.map((t) => (
                <span key={t.name} className="social-proof-item">
                  {t.icon}
                  {t.name}
                </span>
              ))}
            </div>
          </div>
          <div className="social-proof-divider" />
          <div className="social-proof-group">
            <span className="social-proof-label">Deploys to</span>
            <div className="social-proof-items">
              {deploysTo.map((t) => (
                <span key={t.name} className="social-proof-item">
                  {t.icon}
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
