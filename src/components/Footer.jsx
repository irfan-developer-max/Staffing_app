import React, { useState } from "react";
import Logo from "../assets/Logo.png";

export default function Footer({ scrollToSection }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        {/* Company Identity */}
        <div className="footer-company-info">
          <div className="footer-logo">
            <img src={Logo} className="logo-img" alt="SAI BABU Enterprises" />
            <span className="logo-text">SAI BABU <span className="logo-highlight">Enterprises</span></span>
          </div>
          <p className="footer-tagline-text">
            Connecting premium professionals with industry-leading corporate brands. Shaping the future of strategic recruitment.
          </p>
          <div className="footer-contact-details">
            <span className="contact-item">
              <strong>Email:</strong> info@nexusstaffing.com
            </span>
            <span className="contact-item">
              <strong>Phone:</strong> (800) 555-0199
            </span>
            <span className="contact-item">
              <strong>HQ:</strong> 100 Pine St, San Francisco, CA
            </span>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="footer-links-grid">
          <div className="link-column">
            <h4>Solutions</h4>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Our Services</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About Us</a>
            <a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}>Corporate Blog</a>
          </div>

          <div className="link-column">
            <h4>Company</h4>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Success Stories</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>Contact Us</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h4>Stay Informed</h4>
          <p>Get career advice, salary reports, and market hiring updates delivered to your inbox.</p>
          
          {subscribed ? (
            <div className="newsletter-success animate-fade-in">
              <span className="success-badge">✓ Subscribed</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom">
        <span className="copyright-text">
          &copy; {new Date().getFullYear()} Nexus Staffing Solutions. All rights reserved.
        </span>
        <div className="footer-legal-links">
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#home">Cookie Settings</a>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: rgba(7, 6, 33, 0.02);
          border-top: 1px solid var(--border-color);
          padding: 5rem 0 2rem 0;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .footer-company-info {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
        }

        .logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          border-radius: 4px;
        }

        .footer-tagline-text {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .contact-item strong {
          color: var(--text-secondary);
        }

        /* Links Columns */
        .footer-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .link-column {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .link-column h4, .footer-newsletter h4 {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .link-column a {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }

        .link-column a:hover {
          color: var(--primary-cyan);
          padding-left: 3px;
        }

        /* Newsletter */
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-newsletter p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.6rem 1rem;
          color: var(--text-primary);
          outline: none;
          flex-grow: 1;
          font-size: 0.9rem;
        }

        .newsletter-input:focus {
          border-color: var(--primary-cyan);
        }

        .newsletter-btn {
          padding: 0.6rem 1.2rem !important;
          border-radius: 8px !important;
        }

        .newsletter-success {
          display: inline-block;
        }

        .success-badge {
          color: var(--primary-cyan);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Footer Bottom Bar */
        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal-links a {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-legal-links a:hover {
          color: var(--text-secondary);
        }
      `}</style>
    </footer>
  );
}
