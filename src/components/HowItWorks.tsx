import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper.tsx";
import "../styles/how-it-works.css";
import day0Svg from "../assets/day0.svg";
import day1Svg from "../assets/day1.svg";
import day2Svg from "../assets/day2.svg";

const steps = [
  {
    number: "01",
    title: "Connect your cloud",
    body: "Bring your Hetzner, Scaleway, or AWS credentials. NuPaas provisions and configures your nodes automatically \u2014 K3s cluster, WireGuard mesh, Traefik ingress, container registry. No YAML.",
  },
  {
    number: "02",
    title: "Push your code",
    body: "Connect a Git repo. NuPaas builds, containerizes, and deploys. Every PR gets a preview URL. Merge to main and it\u2019s live.",
  },
  {
    number: "03",
    title: "Scale without thinking",
    body: "Add nodes from any provider. NuPaas auto-joins them to your cluster and distributes workloads. Multi-cloud by default, not by effort.",
  },
];

const illustrations = [day0Svg, day1Svg, day2Svg];

// When each card becomes visible (ms after section enters view).
// 01 plays a ~3s animation; 02 appears at 1/3, 03 at 2/3.
const REVEAL_AT = [0, 1000, 2000];

export function HowItWorks() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timers = REVEAL_AT.map((delay, i) =>
      setTimeout(() => setVisibleCount(i + 1), delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <SectionWrapper className="how-it-works-section">
      <h2 className="section-heading">
        From zero to production in one afternoon
      </h2>
      <div ref={gridRef} className="steps-grid">
        {steps.map((s, i) => (
          <div key={s.number} className={`step-card ${i < visibleCount ? "step-visible" : ""}`}>
            <div className="step-illustration">
              {i < 2 ? (
                <object
                  type="image/svg+xml"
                  data={inView ? illustrations[i] : undefined}
                  aria-label={s.title}
                />
              ) : (
                <img src={illustrations[i]} alt={s.title} />
              )}
            </div>
            <div className="step-number">{s.number}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
