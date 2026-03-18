import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-tagline">
          Self-hosted PaaS for Europe. Deploy like it's 2026. Pay like it's yours.
        </p>
        {/* <nav className="footer-links">
          <a href="#">Architecture docs</a>
          <a href="#">GitHub</a>
          <a href="#">Contact</a>
          <a href="#">Twitter/X</a>
        </nav> */}
        <p className="footer-legal">
          NuPaas is built by Type Driven. Based in Europe.
        </p>
      </div>
    </footer>
  );
}
