import React from 'react';

const HiringProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Hiring",
      description: "We source and recruit the best candidates tailored to your specific requirements.",
      colorClass: "blue-step",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Training",
      description: "Equipping our workforce with the necessary skills and safety protocols before deployment.",
      colorClass: "red-step",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Quality People",
      description: "Delivering reliable, skilled, and vetted personnel to drive your business forward.",
      colorClass: "blue-step",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Payroll Management",
      description: "Ensuring timely and accurate payroll processing for seamless operations.",
      colorClass: "red-step",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="16" cy="15" r="2" />
          <path d="M14 15h.01M18 15h.01M16 13v.01M16 17v.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="hiring-process-section">
      {/* Decorative Corner Images */}
      <div className="corner-image top-left-corner">
        <div className="corner-img-bg"></div>
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Hiring Handshake" />
      </div>
      <div className="corner-image bottom-right-corner">
        <div className="corner-img-bg"></div>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team Working" />
      </div>

      {/* Dotted pattern bottom left */}
      <div className="dots-pattern">
        {Array.from({ length: 15 }).map((_, i) => <div key={i} className="dot"></div>)}
      </div>

      {/* Cursive Text Top Right */}
      <div className="cursive-text-wrapper">
        <span className="cursive-text">Building<br/>Stronger Teams<br/>Together</span>
        <svg className="cursive-arrow" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 5a10 10 0 0 1 10 10v4" />
          <polyline points="16 15 20 19 24 15" />
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <div className="hp-header">
          <h4 className="hp-supertitle">OUR PROCESS</h4>
          <h2 className="hp-title">Hiring Made <span className="highlight-red">Simple</span></h2>
          <p className="hp-subtitle">A streamlined, proven approach to workforce management</p>
          <div className="hp-divider">
            <span className="div-gray"></span>
            <span className="div-red"></span>
            <span className="div-gray"></span>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="hp-timeline-container">
          {/* SVG Wavy Dashed Line (Desktop only) */}
          <div className="hp-wavy-line-container">
            <svg className="hp-wavy-line" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M 50 50 Q 200 10 350 50 T 650 50 T 950 50" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
              {/* Dots on the line */}
              <circle cx="200" cy="30" r="4" fill="#005ea6" />
              <circle cx="500" cy="70" r="4" fill="#e31b23" />
              <circle cx="800" cy="30" r="4" fill="#005ea6" />
            </svg>
          </div>

          <div className="hp-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className={`hp-step-card ${step.colorClass}`}>
                <div className="hp-icon-container">
                  <div className="hp-step-number-badge">
                    {step.id}
                  </div>
                  <div className="hp-icon-circle">
                    {step.icon}
                  </div>
                </div>
                <h3 className="hp-step-title">{step.title}</h3>
                <p className="hp-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="hp-bottom-banner">
          <div className="banner-icon-circle left-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="banner-text-content">
            <h4 className="banner-title">From Recruitment to Results</h4>
            <p className="banner-desc">We handle the people, so you can focus on what you do best.</p>
          </div>
          <div className="banner-icon-circle right-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>

      </div>

      <style>{`
        .hiring-process-section {
          padding: 7rem 0 9rem 0;
          background: #fdfdfd;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        /* Decorative Corners */
        .corner-image {
          position: absolute;
          z-index: -1;
          pointer-events: none;
        }

        .corner-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 2;
        }
        
        .corner-img-bg {
          position: absolute;
          background: #dbeafe; /* light blue */
          z-index: 1;
        }

        .top-left-corner {
          top: 0;
          left: 0;
          width: 350px;
          height: 350px;
        }
        .top-left-corner img {
          border-radius: 0 0 50% 0;
          clip-path: ellipse(90% 90% at 0% 0%);
        }
        .top-left-corner .corner-img-bg {
          top: 0;
          left: 0;
          width: 110%;
          height: 110%;
          border-radius: 0 0 50% 0;
          clip-path: ellipse(90% 90% at 0% 0%);
          opacity: 0.6;
        }

        .bottom-right-corner {
          bottom: 0;
          right: 0;
          width: 400px;
          height: 400px;
        }
        .bottom-right-corner img {
          border-radius: 50% 0 0 0;
          clip-path: ellipse(90% 90% at 100% 100%);
        }
        .bottom-right-corner .corner-img-bg {
          bottom: 0;
          right: 0;
          width: 110%;
          height: 110%;
          border-radius: 50% 0 0 0;
          clip-path: ellipse(90% 90% at 100% 100%);
          opacity: 0.6;
        }

        /* Dotted pattern */
        .dots-pattern {
          position: absolute;
          bottom: 100px;
          left: 50px;
          display: grid;
          grid-template-columns: repeat(5, 12px);
          gap: 12px;
          opacity: 0.3;
          z-index: -1;
        }
        .dot {
          width: 6px;
          height: 6px;
          background-color: #94a3b8;
          border-radius: 50%;
        }

        /* Cursive Text */
        .cursive-text-wrapper {
          position: absolute;
          top: 80px;
          right: 15%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          transform: rotate(-5deg);
          z-index: 10;
        }
        .cursive-text {
          font-family: 'Brush Script MT', 'Caveat', cursive, sans-serif;
          font-size: 1.8rem;
          color: #94a3b8;
          text-align: center;
          line-height: 1.1;
        }
        .cursive-arrow {
          width: 40px;
          height: 40px;
          margin-top: 5px;
          margin-right: 20px;
        }

        /* Header */
        .hp-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 5;
        }
        .hp-supertitle {
          font-size: 0.85rem;
          color: #e31b23;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .hp-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: #0c1a30;
          margin-bottom: 0.75rem;
        }
        .highlight-red {
          color: #e31b23;
        }
        .hp-subtitle {
          font-size: 1.05rem;
          color: #64748b;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .hp-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .div-gray {
          width: 30px;
          height: 3px;
          background: #e2e8f0;
          border-radius: 2px;
        }
        .div-red {
          width: 30px;
          height: 3px;
          background: #e31b23;
          border-radius: 2px;
        }

        /* Timeline grid */
        .hp-timeline-container {
          position: relative;
          margin-bottom: 5rem;
          z-index: 5;
        }
        .hp-wavy-line-container {
          position: absolute;
          top: 35px;
          left: 10%;
          right: 10%;
          height: 100px;
          z-index: 1;
        }
        .hp-wavy-line {
          width: 100%;
          height: 100%;
        }

        .hp-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .hp-step-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hp-icon-container {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .hp-icon-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          position: relative;
          box-shadow: 0 0 0 10px #f0f7ff, 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .blue-step .hp-icon-circle {
          background: linear-gradient(135deg, #005ea6 0%, #0077d4 100%);
        }
        .red-step .hp-icon-circle {
          background: linear-gradient(135deg, #e31b23 0%, #f7363e 100%);
          box-shadow: 0 0 0 10px #fff0f0, 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .hp-icon-circle svg {
          width: 38px;
          height: 38px;
        }

        .hp-step-card:hover .hp-icon-circle {
          transform: scale(1.05);
        }

        .hp-step-number-badge {
          position: absolute;
          top: -5px;
          left: -5px;
          background: #ffffff;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.85rem;
          z-index: 3;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .blue-step .hp-step-number-badge {
          color: #005ea6;
          border: 2px solid #005ea6;
        }
        .red-step .hp-step-number-badge {
          color: #e31b23;
          border: 2px solid #e31b23;
        }

        .hp-step-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #0c1a30;
          margin-bottom: 0.75rem;
        }

        .hp-step-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #64748b;
          max-width: 250px;
        }

        /* Bottom Banner */
        .hp-bottom-banner {
          background: linear-gradient(to right, #f0f7ff, #f8fafc, #f0f7ff);
          border-radius: 50px;
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 850px;
          margin: 0 auto;
          box-shadow: 0 8px 25px rgba(0, 94, 166, 0.08);
          position: relative;
          z-index: 5;
        }

        .banner-icon-circle {
          width: 56px;
          height: 56px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #005ea6;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
        }

        .banner-icon-circle svg {
          width: 24px;
          height: 24px;
        }

        .banner-text-content {
          flex: 1;
          text-align: center;
          padding: 0 1.5rem;
        }

        .banner-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #0c1a30;
          margin-bottom: 0.25rem;
        }

        .banner-desc {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .top-left-corner, .bottom-right-corner {
            opacity: 0.3; /* fade out corners on smaller screens to not block content */
          }
        }

        @media (max-width: 1024px) {
          .hp-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 2rem;
          }
          .hp-wavy-line-container {
            display: none;
          }
          .cursive-text-wrapper {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hp-bottom-banner {
            flex-direction: column;
            border-radius: 20px;
            text-align: center;
            gap: 1.5rem;
            padding: 2rem 1.5rem;
          }
          .banner-text-content {
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .hp-steps-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hp-title {
            font-size: 2.3rem;
          }
          .top-left-corner, .bottom-right-corner {
            display: none; /* hide completely on mobile */
          }
          .dots-pattern {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HiringProcess;
