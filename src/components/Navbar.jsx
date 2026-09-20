import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AnimatedEnterpriseLogo from "../components/AnimatedEnterpriseLogo.jsx";

export default function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, targetSection) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(targetSection);
      }, 150);
    } else {
      scrollToSection(targetSection);
    }
  };

  const isHomeActive = location.pathname === "/" && activeSection === "home";
  const isServicesActive = location.pathname === "/services";
  const isAboutActive = location.pathname === "/about";
  const isIndustryActive = location.pathname === "/industries";

  return (
    <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      {/* Top Blue Header */}
      <div className="top-header">
        <div className="container top-container">
          <div className="top-left">
            <Link to="/contact" className="request-talent-tab">
              Request Talent
            </Link>
          </div>
          <div className="top-right">
            <a href="#about" className="top-link" onClick={(e) => handleNavClick(e, "about")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              Office Locations
            </a>
            <a href="#about" className="top-link" onClick={(e) => handleNavClick(e, "about")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M10 11V9h4v2" /></svg>
              Associate Support
            </a>
            <a href="#about" className="top-link login-link" onClick={(e) => handleNavClick(e, "about")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              Associate Login
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <section className="hero">
            <AnimatedEnterpriseLogo />
          </section>
          {/* Desktop Links */}
          <div className="nav-links">
            <a
              href="#home"
              className={`nav-link ${isHomeActive ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
              <span className={`active-line ${isHomeActive ? "active" : ""}`}></span>
            </a>

            <Link
              to="/services"
              className={`nav-link ${isServicesActive ? "active" : ""}`}
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Our Services
              <span className={`active-line ${isServicesActive ? "active" : ""}`}></span>
            </Link>

            <Link
              to="/about"
              className={`nav-link ${isAboutActive ? "active" : ""}`}
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About Us
              <span className={`active-line ${isAboutActive ? "active" : ""}`}></span>
            </Link>

            <Link
              to="/industries"
              className={`nav-link ${isIndustryActive ? "active" : ""}`}
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Industries
              <span className={`active-line ${isIndustryActive ? "active" : ""}`}></span>
            </Link>
          </div>

          {/* Contact Button */}
          <div className="nav-cta">
            <Link to="/contact" className="btn-contact-us">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`hamburger ${mobileMenuOpen ? "hamburger-open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-nav ${mobileMenuOpen ? "mobile-nav-open" : ""}`}>
        <div className="mobile-nav-links">
          <a
            href="#home"
            className={`mobile-nav-link ${isHomeActive ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "home")}
          >
            Home
          </a>
          <Link
            to="/services"
            className={`mobile-nav-link ${isServicesActive ? "active" : ""}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Our Services
          </Link>
          <Link
            to="/about"
            className={`mobile-nav-link ${isAboutActive ? "active" : ""}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            About Us
          </Link>
          <Link
            to="/industries"
            className={`mobile-nav-link ${isIndustryActive ? "active" : ""}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Industries
          </Link>

          <hr className="mobile-divider" />

          <Link
            to="/contact"
            className="mobile-extra-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Talent
          </Link>
          <a
            href="#about"
            className="mobile-extra-link"
            onClick={(e) => handleNavClick(e, "about")}
          >
            Office Locations
          </a>
          <a
            href="#about"
            className="mobile-extra-link"
            onClick={(e) => handleNavClick(e, "about")}
          >
            Associate Support
          </a>
          <a
            href="#about"
            className="mobile-extra-link login-mobile-link"
            onClick={(e) => handleNavClick(e, "about")}
          >
            Associate Login
          </a>

          <Link
            to="/contact"
            className="btn-contact-us"
            style={{ width: "100%", marginTop: "1rem", textAlign: "center", textDecoration: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Styling for Navbar */}
      <style>{`
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }

        .header-wrapper.scrolled {
          transform: translateY(-38px);
          box-shadow: 0 10px 30px -10px rgba(7, 6, 33, 0.08);
        }

        /* Top Blue Header */
        .top-header {
          background-color: #005ea6;
          height: 38px;
          display: flex;
          align-items: center;
          width: 100%;
          overflow: visible;
        }

        .top-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          width: 100%;
        }

        .top-left {
          display: flex;
          align-items: flex-end;
          height: 100%;
        }

        /* Request Talent Tab */
        .request-talent-tab {
          background: #ffffff;
          color: #005ea6;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 28px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          position: relative;
          z-index: 5;
          margin-left: 20px;
          border-radius: 8px 8px 0 0;
          transition: color 0.2s ease;
        }

        .request-talent-tab::before {
          content: '';
          position: absolute;
          left: -12px;
          bottom: 0;
          width: 20px;
          height: 38px;
          background: #ffffff;
          transform: skewX(-22deg);
          transform-origin: bottom left;
          border-radius: 6px 0 0 0;
          z-index: -1;
        }

        .request-talent-tab::after {
          content: '';
          position: absolute;
          right: -12px;
          bottom: 0;
          width: 20px;
          height: 38px;
          background: #ffffff;
          transform: skewX(22deg);
          transform-origin: bottom right;
          border-radius: 0 6px 0 0;
          z-index: -1;
        }

        .request-talent-tab:hover {
          color: #004b87;
        }

        .top-right {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }

        .top-link {
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: opacity 0.2s ease;
        }

        .top-link:hover {
          opacity: 0.85;
        }

        .login-link {
          color: #f9cb15; /* Yellow/gold link */
        }

        .login-link:hover {
          color: #ffde59;
        }

        .top-icon {
          flex-shrink: 0;
        }

        /* Main White Navbar */
        .navbar {
          background: #ffffff;
          height: 80px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          width: 100%;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
        }

        .logo-img {
          height: 48px;
          width: auto;
          object-fit: contain;
          border-radius: 4px;
        }

        .logo-highlight {
          color: var(--accent-pink);
        }

        .logo-text {
          color: #070621;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 1.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }


        .active-line {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #005ea6;
          border-radius: 2px;
          opacity: 0;
          transform: scaleX(0);
          transition: transform 0.25s ease, opacity 0.25s ease;
          transform-origin: center;
        }

        .active-line.active {
          opacity: 1;
          transform: scaleX(1);
          box-shadow: 0 1px 6px rgba(0, 94, 166, 0.4);
        }


        /* Contact Us Button */
        .btn-contact-us {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #005ea6;
          color: #ffffff;
          border: none;
          outline: none;
          padding: 0.7rem 1.6rem;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .btn-contact-us:hover {
          background-color: #004b87;
          transform: translateY(-1px);
        }

        /* Hamburger Styles */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1010;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          transition: all 0.3s ease;
        }

        @media (max-width: 900px) {
          .hamburger {
            display: flex;
          }
          .nav-links, .nav-cta {
            display: none;
          }
          .top-header {
            display: none;
          }
          .header-wrapper.scrolled {
            transform: translateY(0);
          }
        }

        .hamburger-open span:first-child {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger-open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-open span:last-child {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Nav Dropdown */
        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: var(--backdrop-blur);
          -webkit-backdrop-filter: var(--backdrop-blur);
          border-left: 1px solid var(--border-color);
          z-index: 999;
          transition: var(--transition-normal);
          display: flex;
          flex-direction: column;
          padding: 5rem 2rem 2rem 2rem;
          overflow-y: auto;
        }

        .mobile-nav-open {
          right: 0;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          width: 100%;
        }

        .mobile-nav-link {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: #005ea6;
          border-color: #005ea6;
        }

        .mobile-divider {
          border: 0;
          height: 1px;
          background: var(--border-color);
          margin: 0.5rem 0;
        }

        .mobile-extra-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-muted);
          padding: 0.2rem 0;
          display: block;
          transition: color 0.2s ease;
        }

        .mobile-extra-link:hover {
          color: #005ea6;
        }

        .login-mobile-link {
          color: #bfa11b; /* gold tone for mobile contrast */
        }

        .login-mobile-link:hover {
          color: #005ea6;
        }

        @media (max-width: 480px) {
          .nav-logo {
            font-size: 1.1rem;
            gap: 0.4rem;
          }
          .logo-img {
            height: 38px;
          }
        }
      `}</style>
    </header>
  );
}
