import { Button } from "./ui/Button.tsx";
import { ScreenshotFrame } from "./ui/ScreenshotFrame.tsx";
import heroScreenshot from "../assets/screenshots/screen1.jpg";
import "../styles/hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <span className="hero-badge">NuPaas</span>
        <h1 className="hero-headline">
          Deploy like Vercel. Pay
          <br />
          like Hetzner. Own everything.
        </h1>
        <p className="hero-sub">
          NuPaas is a self-hosted deployment platform for European startups.
          Modern developer experience, multi-cloud infrastructure, full data
          sovereignty — at 80% less than hyperscaler pricing.
        </p>
        <div className="hero-actions">
          <Button variant="primary" size="large" href="#apply">
            Apply for early access
          </Button>
        </div>
        <p className="hero-note">
          We're onboarding 10 design partners. Limited spots.
        </p>
        <div className="hero-screenshot" data-parallax="0.06">
          <ScreenshotFrame src={heroScreenshot} alt="NuPaas platform overview" />
        </div>
      </div>
    </section>
  );
}
