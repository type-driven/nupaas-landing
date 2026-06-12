import { Button } from "./ui/Button.tsx";
import { ScreenshotFrame } from "./ui/ScreenshotFrame.tsx";
import heroScreenshot from "../assets/screenshots/screen1.png";
import "../styles/hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <h1 className="hero-headline">
          Own your platform
          <br />
          without building one from scratch.
        </h1>
        <p className="hero-sub">
          NuPaas gives European teams one control plane for deployments,
          infrastructure, secrets, and observability across self-hosted and
          cloud environments.
        </p>
        <div className="hero-actions">
          <Button variant="primary" size="large" href="#apply">
            Apply as a founding partner
          </Button>
        </div>
        <p className="hero-note">
          We are onboarding 10 founding partners. Limited spots.
        </p>
        <div className="hero-screenshot" data-parallax="0.06">
          <ScreenshotFrame src={heroScreenshot} alt="NuPaas platform overview" />
        </div>
      </div>
    </section>
  );
}
