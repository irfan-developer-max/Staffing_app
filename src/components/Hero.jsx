import React from "react";
import HR from "../assets/HR1.png";

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-split-container">
        {/* Left Side: Blue Background and Content */}
        <div className="hero-left-split">
          <div className="hero-content-wrapper">
            <h1 className="hero-title">
              Connecting Elite Talent with Pioneering Companies
            </h1>
            <p className="hero-description">
              Nexus Staffing is a premium talent acquisition partner. We streamline recruitment processes across Technology, Finance, Engineering, and Healthcare to build high-performance teams.
            </p>
            <div className="hero-actions">
              <button className="btn btn-hero-primary" onClick={() => scrollToSection("about")}>
                Hire Top Talent &rsaquo;
              </button>
              <button className="btn btn-hero-secondary" onClick={() => scrollToSection("about")}>
                Apply as Talent &rsaquo;
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="hero-right-split"></div>
      </div>

      {/* Trusted Partners Section */}
      <div className="trusted-partners-section">
        <h3 className="trusted-partners-title">Our Trusted Partners</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            <img src="https://www.junnasolar.com/images/logo.png" alt="Junna Solar" className="partner-logo" />
            <img src="https://avishkarindustries.com/wp-content/uploads/2026/04/db4007b5-79fc-4d48-92e5-2cee6f3f40d4.jpg" alt="Avishkar Industries" className="partner-logo" />
            <img src="https://thermocables.com/wp-content/uploads/2024/12/Thermocables-logo-2-2.png" alt="Thermocables" className="partner-logo" />
            <img src="https://www.radiantappliances.com/images/logos/it_logo.png" alt="Radiant Appliances" className="partner-logo" />
            <img src="https://www.indosolsolar.com/wp-content/uploads/2024/09/Indosol-Solar.png" alt="Indosol Solar" className="partner-logo" />
            <img src="https://solargroup.com/img/logo.png" alt="Solar Group" className="partner-logo" />
            <img src="https://www.nmdc.co.in/assets/images/logo.png" alt="NMDC" className="partner-logo" />
            <img src="https://mic.co.in/wp-content/uploads/2024/09/mic-ele-e1706100975746.png" alt="MIC" className="partner-logo" />

            <img src="https://www.junnasolar.com/images/logo.png" alt="Junna Solar" className="partner-logo" />
            <img src="https://avishkarindustries.com/wp-content/uploads/2026/04/db4007b5-79fc-4d48-92e5-2cee6f3f40d4.jpg" alt="Avishkar Industries" className="partner-logo" />
            <img src="https://thermocables.com/wp-content/uploads/2024/12/Thermocables-logo-2-2.png" alt="Thermocables" className="partner-logo" />
            <img src="https://www.radiantappliances.com/images/logos/it_logo.png" alt="Radiant Appliances" className="partner-logo" />
            <img src="https://www.indosolsolar.com/wp-content/uploads/2024/09/Indosol-Solar.png" alt="Indosol Solar" className="partner-logo" />
            <img src="https://solargroup.com/img/logo.png" alt="Solar Group" className="partner-logo" />
            <img src="https://www.nmdc.co.in/assets/images/logo.png" alt="NMDC" className="partner-logo" />
            <img src="https://mic.co.in/wp-content/uploads/2024/09/mic-ele-e1706100975746.png" alt="MIC" className="partner-logo" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 118px; /* account for top-bar + main navbar */
          background-color: #ffffff;
          overflow: hidden;
          width: 100%;
        }

        .hero-split-container {
          display: flex;
          min-height: 580px;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 1;
          isolation: isolate;
        }

        .hero-left-split {
          flex: 0 0 52%;
          background: linear-gradient(135deg, #003a6c 0%, #005ea6 100%);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem 5rem calc(2.5vw + 1.5rem);
          position: relative;
          z-index: 2;
          clip-path: polygon(0 0, 100% 0, calc(100% - 90px) 100%, 0 100%);
        }

        @media (min-width: 1684px) {
          .hero-left-split {
            padding-left: calc((100vw - 1600px) / 2 + 1.5rem);
          }
        }

        /* Slanted Right Border Line with skew */
        .hero-left-split::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 100%;
          background: #ffffff;
          transform: skewX(-8.5deg);
          transform-origin: top right;
          z-index: 10;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 5;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        .hero-title {
          font-size: 3.0rem;
          line-height: 1.15;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-top: 0.8rem;
        }

        /* Pill Buttons */
        .btn-hero-primary {
          background-color: #e31b23;
          color: #ffffff;
          border: none;
          outline: none;
          padding: 0.85rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-hero-primary:hover {
          background-color: #c11219;
          transform: translateY(-1px);
        }

        .btn-hero-secondary {
          background-color: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          outline: none;
          padding: 0.85rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-hero-secondary:hover {
          background-color: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        /* Right Side Split */
        .hero-right-split {
          flex: 0 0 calc(48% + 90px);
          background-image: url(${HR});
          background-size: cover;
          background-position: center;
          margin-left: -90px;
          z-index: 1;
          position: relative;
        }

        /* Trusted Partners Section */
        .trusted-partners-section {
          margin-top: 3rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
          text-align: center;
          position: relative;
          z-index: 10;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
        }

        .trusted-partners-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .marquee-container {
          display: flex;
          overflow: hidden;
          width: 100%;
          user-select: none;
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }

        .marquee-content {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: space-around;
          gap: 4.5rem;
          min-width: 100%;
          animation: scrollMarquee 30s linear infinite;
        }

        .partner-logo {
          height: 44px;
          max-width: 130px;
          object-fit: contain;
          opacity: 0.8;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .partner-logo:hover {
          opacity: 1;
          transform: scale(1.06);
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .hero-left-split {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 900px) {
          .hero-split-container {
            flex-direction: column;
            min-height: auto;
          }
          .hero-left-split {
            flex: 0 0 100%;
            padding: 4rem 2rem;
          }
          .hero-left-split::after {
            display: none; /* remove slant on mobile */
          }
          .hero-right-split {
            flex: 0 0 100%;
            height: 320px;
            margin-left: 0;
          }
          .hero-content-wrapper {
            max-width: 100%;
            text-align: center;
            align-items: center;
          }
          .hero-actions {
            justify-content: center;
            width: 100%;
          }
          .hero-section {
            padding-top: 80px; /* smaller header on mobile */
          }
        }

        @media (max-width: 600px) {
          .hero-actions {
            flex-direction: column;
            gap: 0.8rem;
          }
          .hero-actions button {
            width: 100%;
          }
          .hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
