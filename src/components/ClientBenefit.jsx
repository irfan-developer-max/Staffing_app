import React from "react";

export default function ClientBenefit() {
  const handleScrollToIndustry = () => {
    const el = document.getElementById("industry");
    if (el) {
      const offset = 80; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="client-benefit-banner">
      <div className="container benefit-banner-content">
        
        {/* Left text description block */}
        <div className="benefit-text-block">
          <span className="benefit-overline">How do our Client benefit</span>
          
          <h2 className="benefit-title">
            WE <span className="light-gray-text">DO BULK HIRING</span>
          </h2>
          
          <p className="benefit-desc">
            Offering the advantage of quick scalability of workforce with a vast and diverse talent pool, cost savings, reduced overheads, tech-driven hiring process and improved visibility.
          </p>
        </div>

        {/* Right action button */}
        <div className="benefit-action-block">
          <button className="btn-case-studies" onClick={handleScrollToIndustry}>
            <span className="arrow-icon">&rarr;</span> Case Studies
          </button>
        </div>

      </div>

      <style>{`
        .client-benefit-banner {
          background-color: #ffffff;
          /* Diamond/diagonal dotted pattern texture */
          background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
          background-size: 16px 16px;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 2.8rem 0;
          width: 100%;
          overflow: hidden;
        }

        .benefit-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          width: 100%;
        }

        .benefit-text-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: 72%;
        }

        .benefit-overline {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #002d54; /* Dark brand blue overline */
          margin-bottom: 0.45rem;
        }

        .benefit-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
          color: #1e293b; /* Dark slate text */
          margin: 0 0 0.8rem 0;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .light-gray-text {
          color: #cbd5e1; /* Light gray outline style text color */
        }

        .benefit-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #475569; /* Slate gray description text */
          margin: 0;
          font-weight: 500;
        }

        .benefit-action-block {
          flex-shrink: 0;
        }

        .btn-case-studies {
          background: transparent;
          border: 1.5px solid #005ea6; /* Outline brand blue border */
          color: #005ea6;
          border-radius: 8px;
          padding: 0.75rem 1.6rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .btn-case-studies:hover {
          background-color: #005ea6;
          color: #ffffff;
          transform: translateY(-1.5px);
          box-shadow: 0 4px 12px rgba(0, 94, 166, 0.15);
        }

        .arrow-icon {
          font-size: 1.15rem;
          line-height: 1;
        }

        /* Responsive styling */
        @media (max-width: 900px) {
          .benefit-banner-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.75rem;
          }
          
          .benefit-text-block {
            max-width: 100%;
          }

          .benefit-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 600px) {
          .benefit-title {
            font-size: 1.85rem;
          }
          .benefit-desc {
            font-size: 0.86rem;
          }
          .client-benefit-banner {
            padding: 2.2rem 0;
          }
        }
      `}</style>
    </section>
  );
}
