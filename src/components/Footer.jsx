import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

// Replace with your Calendly link when ready: https://calendly.com/your-name
const CALENDLY_URL = 'https://calendly.com/billyhuynh01/30min';
import LegalModal from "./LegalModal";
import "./Footer.css";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [legal, setLegal] = useState(null);

  return (
    <footer className="footer">
      <div className="footer__cta-strip">
        <h2 className="footer__cta-headline">
          Ready to build something great?
        </h2>
        <p className="footer__cta-sub">
          Book a free 30-minute discovery call. No obligation, just a
          conversation.
        </p>
        {CALENDLY_URL ? (
          <button
            className="footer__cta-btn"
            onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
          >
            Book a Free Call →
          </button>
        ) : (
          <a href="#contact" className="footer__cta-btn">
            Get in Touch →
          </a>
        )}
      </div>

      <div className="footer__main">
        <div>
          <div className="footer__logo">
            ONRAI STUDIO
            <span className="footer__logo-dot" aria-hidden="true" />
          </div>
          <p className="footer__tagline">
            A lean web development studio building digital products for
            businesses that want results.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Navigation</div>
          <ul className="footer__links">
            {navLinks.slice(0, 3).map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="footer__col-title"
            style={{ marginBottom: 20, opacity: 0 }}
          >
            —
          </div>
          <ul className="footer__links">
            {navLinks.slice(3).map((l) => (
              <li key={l.label}>
                <a href={l.href} className="footer__link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__col-title">The Climb</div>
          <ul className="footer__links">
            <li>
              <Link to="/the-climb" className="footer__link">The Climb</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Contact</div>
          <div className="footer__contact-info">
            <span className="footer__location">🇦🇺 Melbourne, Australia</span>
            <a href="mailto:onraistudio@gmail.com" className="footer__email">
              onraistudio@gmail.com
            </a>
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/company/onrai-studio"
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Onrai Studio on LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.8} />
              </a>
              <a
                href="https://www.instagram.com/onraistudio"
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Onrai Studio on Instagram"
              >
                <Instagram size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copyright">
          © 2025 Onrai Studio · ABN 00 000 000 000 · Built in Australia.
        </span>
        <div className="footer__legal">
          <button
            onClick={() => setLegal("privacy")}
            className="footer__legal-btn"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setLegal("terms")}
            className="footer__legal-btn"
          >
            Terms
          </button>
        </div>
      </div>

      {legal && <LegalModal type={legal} onClose={() => setLegal(null)} />}
    </footer>
  );
}
