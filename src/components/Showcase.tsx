import { useEffect, useRef, useState } from "react";
import { ScreenshotFrame } from "./ui/ScreenshotFrame.tsx";
import "../styles/showcase.css";
import showcaseScreenshot from "../assets/screenshots/screen2.jpg";

const tabs = [
  {
    badge: "DEPLOY",
    title: "Ship code, not infrastructure",
    subtitle:
      "Save hours every week with git-push deploys, automatic preview environments, and one-click rollbacks.",
    cta: "Discover Deploys",
  },
  {
    badge: "SCALE",
    title: "Multi-cloud without the complexity",
    subtitle:
      "Add nodes from any provider. NuPaas auto-joins them to your cluster and distributes workloads across Hetzner, Scaleway, and AWS.",
    cta: "Discover Scaling",
  },
  {
    badge: "SECURE",
    title: "Sovereignty built into every layer",
    subtitle:
      "Vault-backed secrets, WireGuard mesh networking, org-scoped RBAC, and full audit logs. Your data never leaves your jurisdiction.",
    cta: "Discover Security",
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const tab = tabs[activeTab];

  return (
    <section className="showcase" ref={sectionRef}>
      <div className="container">
        <div className="showcase-tabs">
          {tabs.map((t, i) => (
            <button
              key={t.badge}
              className={`showcase-tab ${i === activeTab ? "showcase-tab-active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <span className="showcase-tab-badge">{t.badge}</span>
              <span className="showcase-tab-label">{t.title}</span>
              {i === activeTab && <div className="showcase-tab-progress" />}
            </button>
          ))}
        </div>

        <div className="showcase-content">
          <div className="showcase-text" key={activeTab}>
            <span className="showcase-badge">{tab.badge}</span>
            <h2 className="showcase-title">{tab.title}</h2>
            <p className="showcase-subtitle">{tab.subtitle}</p>
            <a href="#features" className="showcase-cta">
              {tab.cta} <span aria-hidden>→</span>
            </a>
          </div>
          <div className="showcase-visual" data-parallax="0.04">
            <ScreenshotFrame
             src={showcaseScreenshot} alt={`${tab.badge.toLowerCase()} screenshot — platform ${tab.badge.toLowerCase()} interface`}
            />
            {/* Floating signal cards like Amplemarket */}
            <div className={`showcase-float showcase-float-1 ${isVisible ? "showcase-float-visible" : ""}`}>
              <div className="float-card">
                <div className="float-card-dot float-card-dot-green" />
                <div>
                  <strong>Auto-deploy triggered</strong>
                  <span>main branch • 2s ago</span>
                </div>
              </div>
            </div>
            <div className={`showcase-float showcase-float-2 ${isVisible ? "showcase-float-visible" : ""}`}>
              <div className="float-card">
                <div className="float-card-dot float-card-dot-blue" />
                <div>
                  <strong>Preview ready</strong>
                  <span>pr-142.preview.nupaas.dev</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
