import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

export default function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      {/* Top Blue Header */}
      <div className="top-header">
        <div className="container top-container">
          <div className="top-left">
            <a href="#about" className="request-talent-tab" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
              Request Talent
            </a>
          </div>
          <div className="top-right">
            <a href="#about" className="top-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Office Locations
            </a>
            <a href="#about" className="top-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M10 11V9h4v2"/></svg>
              Associate Support
            </a>
            <a href="#about" className="top-link login-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Associate Login
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            <img src={Logo} className="logo-img" alt="SAI BABU Enterprises" />
            <span className="logo-text">SAI BABU <span className="logo-highlight">Enterprises</span></span>
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            <a
              href="#home"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
              <span className={`active-line ${activeSection === "home" ? "active" : ""}`}></span>
            </a>

            {/* Dropdown Our Services */}
            <div className="nav-item-dropdown">
              <a
                href="#services"
                className={`nav-link ${activeSection === "services" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                Our Services
                <span className="dropdown-arrow">▼</span>
                <span className={`active-line ${activeSection === "services" ? "active" : ""}`}></span>
              </a>
              <div className="dropdown-menu">
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>General Staffing</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>IT Staffing</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Payroll Management</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Facility Services</a>
              </div>
            </div>

            <a
              href="#about"
              className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About Us
              <span className={`active-line ${activeSection === "about" ? "active" : ""}`}></span>
            </a>

            {/* Dropdown Resources */}
            <div className="nav-item-dropdown">
              <a
                href="#blog"
                className={`nav-link ${activeSection === "blog" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("blog");
                }}
              >
                Resources
                <span className="dropdown-arrow">▼</span>
                <span className={`active-line ${activeSection === "blog" ? "active" : ""}`}></span>
              </a>
              <div className="dropdown-menu">
                <a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}>Corporate Blog</a>
                <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Success Stories</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>Salary Reports</a>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="nav-cta">
            <button className="btn-contact-us" onClick={() => scrollToSection("about")}>
              Contact Us
            </button>
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
            className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#services"
            className={`mobile-nav-link ${activeSection === "services" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("services");
            }}
          >
            Our Services
          </a>
          <a
            href="#about"
            className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("about");
            }}
          >
            About Us
          </a>
          <a
            href="#blog"
            className={`mobile-nav-link ${activeSection === "blog" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("blog");
            }}
          >
            Resources
          </a>
          
          <hr className="mobile-divider" />
          
          <a
            href="#about"
            className="mobile-extra-link"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("about");
            }}
          >
            Request Talent
          </a>
          <a
            href="#about"
            className="mobile-extra-link"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("about");
            }}
          >
            Office Locations
          </a>
          <a
            href="#about"
            className="mobile-extra-link"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("about");
            }}
          >
            Associate Support
          </a>
          <a
            href="#about"
            className="mobile-extra-link login-mobile-link"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              scrollToSection("about");
            }}
          >
            Associate Login
          </a>

          <button
            className="btn-contact-us"
            style={{ width: "100%", marginTop: "1rem" }}
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToSection("about");
            }}
          >
            Contact Us
          </button>
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

        .dropdown-arrow {
          font-size: 0.65rem;
          margin-top: 2px;
          opacity: 0.7;
          transition: transform 0.2s ease;
        }

        .nav-item-dropdown:hover .dropdown-arrow {
          transform: rotate(180deg);
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

        /* Dropdown Menu Styles */
        .nav-item-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(7, 6, 33, 0.08);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.75rem 0;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
        }

        /* Invisible bridge to keep hover active */
        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 0;
          width: 100%;
          height: 15px;
        }

        .nav-item-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-menu a {
          display: block;
          padding: 0.65rem 1.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: left;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .dropdown-menu a:hover {
          background-color: rgba(0, 94, 166, 0.05);
          color: #005ea6;
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
      `}</style>
    </header>
  );
}
