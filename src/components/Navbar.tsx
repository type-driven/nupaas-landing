import { useEffect, useState } from "react";
import { Button } from "./ui/Button.tsx";
import "../styles/nav.css";
import logo from "../assets/nupaas.svg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <nav className="nav-links nav-links-left">
          <a href="#problem">About</a>
          <a href="#features">Technologies</a>
          <a href="#pricing">Products</a>
        </nav>
        <a href="/" className="nav-logo">
          <img src={logo} alt="" className="nav-logo-img" />
          NuPaas
        </a>
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#personas">Team</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <Button variant="primary" size="default" href="#apply">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
