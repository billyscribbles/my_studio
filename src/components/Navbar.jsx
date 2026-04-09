import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          ONRAI STUDIO
          <span className="navbar__logo-dot" aria-hidden="true" />
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          <Link to="/services" className="navbar__link">Services</Link>
          <Link to="/portfolio" className="navbar__link">Portfolio</Link>
          <Link to="/ai" className="navbar__link">AI</Link>
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/contact">
            <button className="navbar__cta">Get a Quote</button>
          </Link>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`navbar__mobile${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <Link to="/services" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/portfolio" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          Portfolio
        </Link>
        <Link to="/ai" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          AI
        </Link>
        <Link to="/about" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <button className="navbar__mobile-cta">Get a Quote</button>
        </Link>
      </nav>
    </header>
  );
}
