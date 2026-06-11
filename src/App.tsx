import { useEffect } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { SocialProof } from "./components/SocialProof.tsx";
import { Showcase } from "./components/Showcase.tsx";
import { Problem } from "./components/Problem.tsx";
import { Solution } from "./components/Solution.tsx";
import { HowItWorks } from "./components/HowItWorks.tsx";
import { Features } from "./components/Features.tsx";
import { Comparison } from "./components/Comparison.tsx";
import { Sovereignty } from "./components/Sovereignty.tsx";
import { Personas } from "./components/Personas.tsx";
import { DesignPartnerCTA } from "./components/DesignPartnerCTA.tsx";
import { Footer } from "./components/Footer.tsx";

function useParallax() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Disable parallax on mobile/tablet — causes janky scroll on touch devices
    const isMobile = window.matchMedia("(max-width: 1024px)").matches
      || "ontouchstart" in window;
    if (isMobile) return;

    function onScroll() {
      const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax || "0.08");
        const offset = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${offset}px)`;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function App() {
  useParallax();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Showcase />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Comparison />
        <Sovereignty />
        <Personas />
        <DesignPartnerCTA />
      </main>
      <Footer />
    </>
  );
}
