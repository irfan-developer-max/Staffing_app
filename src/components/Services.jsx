import React from "react";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Man Power Outsourcing",
      description: "Providing skilled and unskilled manpower as per your needs.",
      icon: "/manpower_outsourcing.png",
      color: "#005ea6",
      textColor: "#ffffff"
    },
    {
      num: "02",
      title: "Recruitment & Placement",
      description: "End-to-end recruitment and placement solutions for the right talent.",
      icon: "/recruitment_placement.png",
      color: "#005292",
      textColor: "#ffffff"
    },
    {
      num: "03",
      title: "Industrial Training",
      description: "Industry-oriented training programs to enhance skills and productivity.",
      icon: "/industrial_training.png",
      color: "#00467d",
      textColor: "#ffffff"
    },
    {
      num: "04",
      title: "HR Out Sourcing",
      description: "Complete HR solutions including payroll, compliance and employee management.",
      icon: "/hr_outsourcing.png",
      color: "#003a69",
      textColor: "#ffffff"
    },
    {
      num: "05",
      title: "Man Power Supply",
      description: "Timely and reliable supply of manpower tailored to your operational needs.",
      icon: "/manpower_supply.png",
      color: "#002f55",
      textColor: "#ffffff"
    },
    {
      num: "06",
      title: "Business Outsourcing",
      description: "Flexible outsourcing solutions to reduce costs and improve efficiency.",
      icon: "/business_outsourcing.png",
      color: "#002341",
      textColor: "#ffffff"
    }
  ];

  return (
    <section id="services" className="section services-section">
      {/* Header Container */}
      <div className="container">
        <div className="section-header">
          <span className="badge badge-purple" style={{ background: "rgba(7, 6, 33, 0.04)", color: "#070621" }}>Infographic Flow</span>
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-subtitle-sub">Zig Zag Process Flow</p>
        </div>
      </div>

      {/* Desktop Zig Zag Infographic (Fluid Wide Layout spanning full viewport width) */}
      <div className="zigzag-desktop-wrapper">
        
        {/* Sleek, Thin SVG Connecting Line aligned mathematically with Node Centers */}
        <svg className="zigzag-svg-line" viewBox="0 0 1200 520" preserveAspectRatio="none">
          <path 
            d="M 0 260 L 100 187 L 300 333 L 500 187 L 700 333 L 900 187 L 1100 333 L 1200 260" 
            stroke="url(#zigzag-grad)" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="zigzag-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#005ea6" />
              <stop offset="20%" stopColor="#005292" />
              <stop offset="40%" stopColor="#00467d" />
              <stop offset="60%" stopColor="#003a69" />
              <stop offset="80%" stopColor="#002f55" />
              <stop offset="100%" stopColor="#002341" />
            </linearGradient>
          </defs>
        </svg>

        <div className="zigzag-desktop-grid">
          {services.map((service, index) => {
            const isTopNode = index % 2 === 0;
            return (
              <div key={index} className="zigzag-column">
                
                {isTopNode ? (
                  /* Step 1, 3, 5: Card (Top) -> Line -> Node (Top-vertex) -> Spacer (Bottom) */
                  <>
                    <div className="zigzag-card glass-card" style={{ borderTop: `4px solid ${service.color}` }}>
                      <div className="zigzag-card-icon-container">
                        <img src={service.icon} alt={service.title} className="zigzag-icon-img" />
                      </div>
                      <h4 className="zigzag-card-title">{service.title}</h4>
                      <p className="zigzag-card-desc">{service.description}</p>
                    </div>
                    
                    <div className="zigzag-dotted-line" style={{ borderColor: `${service.color}70` }}></div>
                    
                    <div 
                      className="zigzag-node" 
                      style={{ 
                        backgroundColor: service.color, 
                        color: service.textColor,
                        boxShadow: `0 0 12px ${service.color}40`
                      }}
                    >
                      {service.num}
                    </div>
                    
                    <div className="zigzag-spacer"></div>
                  </>
                ) : (
                  /* Step 2, 4, 6: Spacer (Top) -> Node (Bottom-vertex) -> Line -> Card (Bottom) */
                  <>
                    <div className="zigzag-spacer"></div>
                    
                    <div 
                      className="zigzag-node" 
                      style={{ 
                        backgroundColor: service.color, 
                        color: service.textColor,
                        boxShadow: `0 0 12px ${service.color}40`
                      }}
                    >
                      {service.num}
                    </div>
                    
                    <div className="zigzag-dotted-line" style={{ borderColor: `${service.color}70` }}></div>
                    
                    <div className="zigzag-card glass-card" style={{ borderTop: `4px solid ${service.color}` }}>
                      <div className="zigzag-card-icon-container">
                        <img src={service.icon} alt={service.title} className="zigzag-icon-img" />
                      </div>
                      <h4 className="zigzag-card-title">{service.title}</h4>
                      <p className="zigzag-card-desc">{service.description}</p>
                    </div>
                  </>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline Layout (Shown on screen < 1024px) */}
      <div className="container">
        <div className="zigzag-mobile-timeline">
          <div className="mobile-timeline-line"></div>
          {services.map((service, index) => (
            <div key={index} className="mobile-timeline-item">
              <div 
                className="mobile-timeline-node" 
                style={{ backgroundColor: service.color, color: service.textColor }}
              >
                {service.num}
              </div>
              <div className="mobile-timeline-card glass-card" style={{ borderLeft: `4px solid ${service.color}` }}>
                <div className="mobile-card-header">
                  <img src={service.icon} alt={service.title} className="mobile-icon-img" />
                  <h4 className="mobile-card-title">{service.title}</h4>
                </div>
                <p className="mobile-card-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background: #ffffff;
          padding-top: 6rem;
          padding-bottom: 6rem;
          width: 100%;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .section-title {
          font-size: 2.6rem;
          font-weight: 855;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .section-subtitle-sub {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Desktop Infographic Layout (Fluid Wide Viewport Cover) */
        .zigzag-desktop-wrapper {
          position: relative;
          width: 95%;
          max-width: 1600px;
          margin: 0 auto;
          display: none;
          overflow: visible;
        }

        @media (min-width: 1024px) {
          .zigzag-desktop-wrapper {
            display: block;
          }
        }

        /* Sleek Thin Gradient Line */
        .zigzag-svg-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 520px;
          z-index: 1;
          pointer-events: none;
        }

        .zigzag-desktop-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          position: relative;
          z-index: 2;
          width: 100%;
          gap: 1.25rem;
        }

        .zigzag-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 520px;
        }

        /* Fixed Dimensions for mathematical alignment */
        .zigzag-card {
          width: 98%;
          height: 125px;
          padding: 1rem 0.8rem;
          border-radius: 12px !important;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(7, 6, 33, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.4rem;
          text-align: center;
          align-items: center;
        }

        .zigzag-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(7, 6, 33, 0.1);
        }

        .zigzag-card-icon-container {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zigzag-icon-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .zigzag-card-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .zigzag-card-desc {
          font-size: 0.76rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }

        /* Dotted Connecting Lines (Fixed Height: 35px) */
        .zigzag-dotted-line {
          width: 2px;
          height: 35px;
          border-left: 2px dotted #a3a0e6;
        }

        /* Spacers (Fixed Height: 306px) */
        .zigzag-spacer {
          height: 306px;
          width: 100%;
        }

        /* Circle Node (Fixed Height: 54px) */
        .zigzag-node {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          border: 4px solid #ffffff;
          position: relative;
          z-index: 5;
          transition: transform 0.3s ease;
        }

        .zigzag-node:hover {
          transform: scale(1.15);
        }

        /* Mobile Timeline Layout */
        .zigzag-mobile-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          margin-top: 3rem;
        }

        @media (min-width: 1024px) {
          .zigzag-mobile-timeline {
            display: none;
          }
        }

        .mobile-timeline-line {
          position: absolute;
          left: 25px;
          top: 15px;
          bottom: 15px;
          width: 4px;
          background: linear-gradient(to bottom, #4E36D3, #0C0824);
          border-radius: 2px;
        }

        .mobile-timeline-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .mobile-timeline-node {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .mobile-timeline-card {
          flex-grow: 1;
          padding: 1.5rem;
          border-radius: 12px !important;
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .mobile-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .mobile-icon-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }

        .mobile-card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .mobile-card-desc {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
