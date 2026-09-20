import React, { useState } from "react";
import CompanyLogo from "../assets/Logo.png";
import AnimatedEnterpriseLogo from "./AnimatedEnterpriseLogo";

export default function Services() {
  const [activeWheelItem, setActiveWheelItem] = useState(null);

  const leftServices = [
    {
      title: "Temp Staffing",
      desc: "Flexible staffing solutions for short-term business needs"
    },
    {
      title: "Permanent Recruitment",
      desc: "Skilled talent for long-term growth and success"
    },
    {
      title: "NAPS Apprentice",
      desc: "Nurturing future workforce through apprenticeship"
    }
  ];

  const rightServices = [
    {
      title: "Payroll Management",
      desc: "Accurate payroll processing with full compliance"
    },
    {
      title: "Facility Management Services",
      desc: "Integrated facility solutions for smooth operations"
    },
    {
      title: "Freshers Connect Program",
      desc: "Connecting fresh talent with the right opportunities"
    }
  ];

  const wheelItems = [
    {
      title: "Workforce Management",
      desc: "Efficient management for maximum productivity",
      left: "9.5%",
      top: "50%",
      labelStyle: { right: "120%", top: "50%", transform: "translateY(-50%)", textAlign: "right" },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: "Smart Hiring",
      desc: "Technology-driven hiring for quality workforce",
      left: "21.4%",
      top: "21.4%",
      labelStyle: { right: "110%", bottom: "110%", textAlign: "right" },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )
    },
    {
      title: "Right People",
      desc: "We find the right people for the role",
      left: "50%",
      top: "9.5%",
      labelStyle: { bottom: "125%", left: "50%", transform: "translateX(-50%)", textAlign: "center" },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Compliance & Safety",
      desc: "Ensuring safety and legal compliance",
      left: "78.6%",
      top: "21.4%",
      labelStyle: { left: "110%", bottom: "110%", textAlign: "left" },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Payroll Excellence",
      desc: "Timely payroll with transparency",
      left: "90.5%",
      top: "50%",
      labelStyle: { left: "120%", top: "50%", transform: "translateY(-50%)", textAlign: "left" },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      )
    },

  ];

  const handleScrollToContact = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="services-section">
      {/* 1. Header */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            How we can <span className="highlight-red">help</span>
          </h2>
          <p className="section-subtitle">
            End-to-end workforce solutions tailored to your business needs
          </p>
        </div>

        {/* 2. Main 3-Column Dashboard */}
        <div className="services-dashboard-grid">
          {/* Left Column Services List */}
          <div className="dashboard-column side-column-list">
            {leftServices.map((service, index) => (
              <div key={index} className="side-service-card" onClick={handleScrollToContact}>
                <div className="card-content-block">
                  <span className="card-service-title">{service.title}</span>
                  <span className="card-service-desc">{service.desc}</span>
                </div>
                <span className="card-arrow-red">&rsaquo;</span>
              </div>
            ))}
          </div>

          {/* Center Column Wheel Diagram */}
          <div className="dashboard-column center-wheel-column">
            <div className="circular-wheel-wrapper">
              
              {/* Semi-circular Ring Band (Left Red, Right Blue) with Top Gap */}
              <svg className="wheel-svg-band" viewBox="0 0 420 420">
                {/* Red Semi-circle (Left side) stops before top center */}
                <path 
                  d="M 40 210 A 170 170 0 0 1 175 44" 
                  stroke="#e31b23" 
                  strokeWidth="36" 
                  fill="none" 
                />
                {/* Blue Semi-circle (Right side) starts after top center */}
                <path 
                  d="M 245 44 A 170 170 0 0 1 380 210" 
                  stroke="#003a6c" 
                  strokeWidth="36" 
                  fill="none" 
                />
              </svg>

              {/* Central Logo White Circle */}
              <div className="center-logo-circle" style={{ padding: '0 20px' }}>
                <AnimatedEnterpriseLogo />
              </div>

              {/* Interactive Node circles positioned mathematically around the arch */}
              {wheelItems.map((item, index) => (
                <div 
                  key={index}
                  className={`wheel-node-item ${activeWheelItem === index ? 'active-node' : ''}`}
                  style={{ left: item.left, top: item.top }}
                  onClick={() => setActiveWheelItem(index)}
                >
                  {item.icon}

                  {/* Positioning text callout */}
                  <div className="node-label-box" style={item.labelStyle}>
                    <h5 className="label-title">{item.title}</h5>
                    <p className="label-desc">{item.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Mobile Active Wheel Item Box */}
          {activeWheelItem !== null && (
            <div className="mobile-active-wheel-box">
              <div className="card-content-block" style={{ alignItems: 'center', textAlign: 'center' }}>
                <span className="card-service-title">{wheelItems[activeWheelItem].title}</span>
                <span className="card-service-desc" style={{ marginTop: '0.5rem' }}>{wheelItems[activeWheelItem].desc}</span>
              </div>
            </div>
          )}

          {/* Right Column Services List */}
          <div className="dashboard-column side-column-list">
            {rightServices.map((service, index) => (
              <div key={index} className="side-service-card" onClick={handleScrollToContact}>
                <div className="card-content-block">
                  <span className="card-service-title">{service.title}</span>
                  <span className="card-service-desc">{service.desc}</span>
                </div>
                <span className="card-arrow-red">&rsaquo;</span>
              </div>
            ))}
          </div>
        </div>


      </div>



      <style>{`
        .services-section {
          background-color: #f8fafc;
          padding: 6rem 0 0 0;
          width: 100%;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: #0c1a30;
          margin-bottom: 0.5rem;
        }

        .highlight-red {
          color: #e31b23;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          font-weight: 500;
        }

        /* 3-Column Dashboard Grid */
        .services-dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 2rem;
          align-items: center;
          width: 100%;
          margin-bottom: 5rem;
        }

        /* Side column cards */
        .side-column-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .side-service-card {
          background: #ffffff;
          border: 1px solid rgba(7, 6, 33, 0.05);
          border-radius: 12px;
          padding: 1.5rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .side-service-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(7, 6, 33, 0.06);
        }

        .card-content-block {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-right: 0.5rem;
        }

        .card-service-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0c1a30;
        }

        .card-service-desc {
          font-size: 0.82rem;
          line-height: 1.45;
          color: #64748b;
        }

        .card-arrow-red {
          font-size: 1.6rem;
          font-weight: 700;
          color: #e31b23;
          flex-shrink: 0;
          line-height: 1;
        }

        /* Center column wheel diagram */
        .center-wheel-column {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circular-wheel-wrapper {
          position: relative;
          width: 420px;
          height: 420px;
          flex-shrink: 0;
        }

        .wheel-svg-band {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .center-logo-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(7, 6, 33, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          text-align: center;
        }

        .center-logo-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          margin-bottom: 0.5rem;
          border-radius: 4px;
        }

        .center-logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #0c1a30;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .center-logo-subtext {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          font-weight: 700;
          margin-top: 0.15rem;
        }

        /* Workers overlay image removed */

        /* Node circles styled premium */
        .wheel-node-item {
          position: absolute;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 12;
          color: #334155;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
        }

        .wheel-node-item svg {
          width: 18px;
          height: 18px;
          transition: transform 0.2s ease;
        }

        .wheel-node-item:hover {
          transform: translate(-50%, -50%) scale(1.12);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
          color: #005ea6;
        }

        .wheel-node-item:hover svg {
          transform: scale(1.05);
        }

        /* Node labels positioned absolute */
        .node-label-box {
          position: absolute;
          width: 125px;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .label-title {
          font-family: 'Outfit', sans-serif;
          font-size: 0.76rem;
          font-weight: 800;
          color: #0c1a30;
          line-height: 1.25;
        }

        .label-desc {
          font-size: 0.64rem;
          line-height: 1.3;
          color: #64748b;
        }

        /* Stats Metrics Banner */
        .stats-metrics-banner {
          background: #ffffff;
          border: 1px solid rgba(7, 6, 33, 0.05);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1.5rem;
          margin-bottom: 5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }

        .stat-metric-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 94, 166, 0.06);
          color: #005ea6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon-wrapper svg {
          width: 22px;
          height: 22px;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .stat-value {
          font-family: 'Outfit', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: #0c1a30;
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
          margin-top: 0.2rem;
        }

        /* CTA box in stats banner */
        .stats-cta-card {
          background: linear-gradient(135deg, #001a35 0%, #00305a 100%);
          border-radius: 10px;
          padding: 1.2rem 1.6rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-grow: 0;
          cursor: pointer;
          transition: transform 0.2s ease;
          box-shadow: 0 8px 20px rgba(0, 26, 53, 0.15);
        }

        .stats-cta-card:hover {
          transform: translateY(-1px);
        }

        .cta-heading-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          text-align: left;
          max-width: 170px;
          line-height: 1.35;
        }

        .btn-cta-red {
          background: #e31b23;
          color: #ffffff;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: background 0.2s ease;
          outline: none;
        }

        .stats-cta-card:hover .btn-cta-red {
          background: #c11219;
        }



        @media (min-width: 901px) {
          .mobile-active-wheel-box {
            display: none;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .services-dashboard-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 1.5rem;
          }
          .services-dashboard-grid > .side-column-list:last-child {
            grid-column: span 2;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            order: 3;
          }
          .stats-metrics-banner {
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 2rem;
          }
          .stats-cta-card {
            width: 100%;
            justify-content: center;
          }

        }

        @media (max-width: 900px) {
          .services-dashboard-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          /* Hide side columns on mobile */
          .side-column-list {
            display: none !important;
          }
          
          /* Show wheel labels on hover/active on mobile and position on top */
          .node-label-box {
            display: none !important;
          }
          .wheel-node-item.active-node .node-label-box {
            display: flex !important;
            bottom: 135% !important;
            top: auto !important;
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) !important;
            text-align: center !important;
            background: rgba(255, 255, 255, 0.95) !important;
            padding: 0.3rem 0.5rem !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12) !important;
            width: max-content !important;
            max-width: 110px !important;
            z-index: 20 !important;
          }
          .wheel-node-item.active-node .node-label-box .label-desc {
            display: none !important;
          }
          .wheel-node-item.active-node .node-label-box .label-title {
            font-size: 0.65rem !important;
          }
          
          /* Show mobile active wheel box */
          .mobile-active-wheel-box {
            display: block;
            background: #ffffff;
            border: 1px solid rgba(7, 6, 33, 0.05);
            border-radius: 12px;
            padding: 1.5rem 1.25rem;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            margin: 1rem auto;
            width: 90%;
            max-width: 400px;
          }

          .wheel-node-item.active-node {
            transform: translate(-50%, -50%) scale(1.12);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
            color: #005ea6;
            border-color: #005ea6;
          }
          .center-wheel-column {
            order: -1; /* Display wheel diagram on top */
          }
          .circular-wheel-wrapper {
            width: 320px;
            height: 320px;
          }
          .wheel-svg-band {
            display: none; /* Hide svg bands on mobile */
          }
          .center-logo-circle {
            width: 150px;
            height: 150px;
          }
          /* Workers overlay image overrides removed */
          .wheel-node-item {
            width: 32px;
            height: 32px;
          }
          .wheel-node-item svg {
            width: 14px;
            height: 14px;
          }
          .section-title {
            font-size: 2.2rem;
          }
          .stat-metric-item {
            flex: 0 0 45%;
            justify-content: flex-start;
          }
        }

        @media (max-width: 600px) {
          .stats-metrics-banner {
            padding: 1.25rem 1rem;
          }
          .stat-metric-item {
            flex: 0 0 100%;
          }
          .stat-value {
            font-size: 1.25rem;
          }
          .stat-label {
            font-size: 0.72rem;
          }

          .section-title {
            font-size: 1.85rem;
          }
          .section-subtitle {
            font-size: 0.95rem;
          }
          .circular-wheel-wrapper {
            width: 290px;
            height: 290px;
          }
          .center-logo-circle {
            width: 130px;
            height: 130px;
          }
          .center-logo-text {
            font-size: 0.95rem;
          }
          .center-logo-subtext {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </section>
  );
}
