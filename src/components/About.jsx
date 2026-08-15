import React from "react";

export default function About() {
  const values = [
    {
      title: "Statutory Compliance",
      description: "100% legal compliance with EF, ESI, LWF, NAPS, and local labor regulatory guidelines."
    },
    {
      title: "Talent Quality Vetting",
      description: "Rigorous capability screening and references verification for all outsourced manpower supply."
    },
    {
      title: "Service Reliability",
      description: "Dedicated account managers ensuring immediate turnaround time and placement continuity."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        {/* Text Left */}
        <div className="about-info animate-fade-in-up">
          <span className="badge badge-purple" style={{ background: "rgba(7, 6, 33, 0.04)", color: "#070621" }}>Who We Are</span>
          <h2 className="about-title">A Legacy of Service Excellence</h2>
          <p className="about-desc">
            Sai Babu Enterprises is a pioneer in corporate staffing, recruitment, and business outsourcing services. For over a decade, we have partnered with manufacturing, logistics, retail, and corporate hubs to supply verified, skilled personnel and manage statutory compliance.
          </p>
          <p className="about-desc">
            We operate with a commitment to integrity, statutory transparency, and operational efficiency, serving as a trusted backend partner for workforce logistics.
          </p>

          <div className="values-list">
            {values.map((val, idx) => (
              <div key={idx} className="value-item">
                <div className="value-bullet"></div>
                <div>
                  <h4>{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Right */}
        <div className="about-milestones animate-slide-left">
          <div className="milestone-card glass-card">
            <span className="milestone-value">15+</span>
            <span className="milestone-label">Years of Corporate Service</span>
          </div>
          <div className="milestone-card glass-card">
            <span className="milestone-value">10K+</span>
            <span className="milestone-label">Outsourced Personnel Placed</span>
          </div>
          <div className="milestone-card glass-card">
            <span className="milestone-value">100%</span>
            <span className="milestone-label">Statutory Audit Compliance</span>
          </div>
          <div className="milestone-card glass-card">
            <span className="milestone-value">250+</span>
            <span className="milestone-label">Active Industrial Partners</span>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: relative;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .about-info {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          text-align: left;
        }

        .about-title {
          font-size: 2.5rem;
          line-height: 1.2;
          color: var(--text-primary);
        }

        .about-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .value-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .value-bullet {
          width: 8px;
          height: 8px;
          background: var(--accent-pink);
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .value-item h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .value-item p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Milestones Styling */
        .about-milestones {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          width: 100%;
        }

        @media (max-width: 600px) {
          .about-milestones {
            grid-template-columns: 1fr;
          }
        }

        .milestone-card {
          padding: 2rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-top: 3px solid var(--accent-pink) !important;
          border-radius: 4px 12px 12px 4px !important;
        }

        .milestone-value {
          font-family: 'Outfit', sans-serif;
          font-size: 2.3rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .milestone-label {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  );
}
