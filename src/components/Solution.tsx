import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/solution.css";
import solutionScreenshot from "../assets/screenshots/screen3.jpg";

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
            One platform. Full control.<br />For 80% less.
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
                <span className="anno-value">2s</span>
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
            <h3>80% less than GCP</h3>
            <p>
              Full production multi-cloud for ~{"€133"}/month. We route each
              workload to the cheapest provider automatically.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
