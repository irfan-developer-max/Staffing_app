import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Footer({ scrollToSection }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetSection) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(targetSection);
      }, 150);
    } else {
      scrollToSection(targetSection);
    }
  };

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
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src={Logo} className="logo-img" alt="SAI BABU Enterprises" />
              <span className="logo-text">SAI BABU <span className="logo-highlight">Enterprises</span></span>
            </Link>
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
            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Our Services
            </Link>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              About Us
            </Link>
            <a href="#industry" onClick={(e) => handleNavClick(e, "industry")}>Industries</a>
          </div>

          <div className="link-column">
            <h4>Company</h4>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              About Us
            </Link>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Contact Us
            </Link>
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
          background: linear-gradient(135deg, #001f3f 0%, #003a6c 100%);
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
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

        .footer-logo .logo-text {
          color: #ffffff;
        }

        .logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          border-radius: 4px;
        }

        .footer-tagline-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .footer-contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .contact-item strong {
          color: #ffffff;
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
          color: #ffffff;
        }

        .link-column a {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .link-column a:hover {
          color: #f9cb15;
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
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.6rem 1rem;
          color: #ffffff;
          outline: none;
          flex-grow: 1;
          font-size: 0.9rem;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-input:focus {
          border-color: #f9cb15;
        }

        .newsletter-btn {
          padding: 0.6rem 1.2rem !important;
          border-radius: 8px !important;
          background: #e31b23 !important;
          color: #ffffff !important;
        }

        .newsletter-btn:hover {
          background: #c11219 !important;
        }

        .newsletter-success {
          display: inline-block;
        }

        .success-badge {
          color: #f9cb15;
          background: rgba(249, 203, 21, 0.1);
          border: 1px solid rgba(249, 203, 21, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Footer Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal-links a {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-legal-links a:hover {
          color: #ffffff;
        }
      `}</style>
    </footer>
  );
}
