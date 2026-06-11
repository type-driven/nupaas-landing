import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/solution.css";
import solutionScreenshot from "../assets/screenshots/screen3.png";

export function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <SectionWrapper alt>
      <div className="solution" ref={sectionRef}>
        <div className="solution-header">
          <span className="solution-eyebrow">A third option</span>
          <h2 className="solution-headline">
            One platform. Full control.<br />For up to 80% less.
          </h2>
        </div>

        <div className={`solution-showcase ${visible ? "solution-showcase-visible" : ""}`}>
          <div className="solution-img-wrap" data-parallax="0.05">
            <img
              src={solutionScreenshot}
              alt="NuPaas platform interface"
              className="solution-img"
            />

            {/* Floating annotations pinned to the screenshot */}
            <div className={`solution-anno solution-anno-1 ${visible ? "solution-anno-visible" : ""}`}>
              <div className="anno-line" />
              <div className="anno-bubble">
                <span className="anno-value">Seconds</span>
                <span className="anno-label">to production</span>
              </div>
            </div>

            <div className={`solution-anno solution-anno-2 ${visible ? "solution-anno-visible" : ""}`}>
              <div className="anno-bubble">
                <span className="anno-value">{"€133"}</span>
                <span className="anno-label">/mo full stack</span>
              </div>
              <div className="anno-line" />
            </div>

            <div className={`solution-anno solution-anno-3 ${visible ? "solution-anno-visible" : ""}`}>
              <div className="anno-line" />
              <div className="anno-bubble">
                <span className="anno-value">0</span>
                <span className="anno-label">lock-in</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`solution-points ${visible ? "solution-points-visible" : ""}`}>
          <div className="solution-point">
            <h3>Ship in seconds</h3>
            <p>
              Git push and it's live. Preview environments for every PR.
              Rollbacks in one click.
            </p>
          </div>
          <div className="solution-divider" />
          <div className="solution-point">
            <h3>Your cloud, your rules</h3>
            <p>
              Deploy on Hetzner, Scaleway, or any provider. Your data stays
              in Frankfurt, Paris, or Amsterdam.
            </p>
          </div>
          <div className="solution-divider" />
          <div className="solution-point">
            <h3>Up to 80% less than GCP</h3>
            <p>
              Full production multi-cloud for as low as ~{"€133"}/month in an illustrative 5-service, 2-environment scenario. NuPaas routes each workload to the most cost-effective provider.
            </p>
          </div>
        </div>
        <p className="solution-methodology">
          Cost comparisons are directional estimates based on publicly available list pricing for comparable workloads. Actual savings vary by workload, region, and configuration.
        </p>
      </div>
    </SectionWrapper>
  );
}
