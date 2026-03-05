import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  alt?: boolean;
  className?: string;
}

export function SectionWrapper({
  children,
  id,
  alt = false,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${alt ? "section-alt" : ""} ${revealed ? "section-revealed" : ""} ${className}`.trim()}
      style={{
        padding: "var(--section-padding)",
        backgroundColor: alt ? "var(--bg-section-alt)" : "var(--bg-primary)",
      }}
    >
      <div className="container">{children}</div>
    </section>
  );
}
