import React from "react";
import LogisticsImg from "../assets/logistics_about.png";
import RecruitmentImg from "../assets/recruitment_about.png";
import WorkforceImg from "../assets/workforce_about.png";
import TrainingImg from "../assets/training_about.png";

export default function About() {
  const cardsData = [
    {
      title: "Skilled manpower for logistics, warehousing and supply chain operations.",
      image: LogisticsImg
    },
    {
      title: "We recruit and deploy the right talent for your business across industries.",
      image: RecruitmentImg
    },
    {
      title: "End-to-end workforce management to ensure productivity, compliance and workforce efficiency.",
      image: WorkforceImg
    },
    {
      title: "Training and upskilling workforce to meet evolving industry demands.",
      image: TrainingImg
    }
  ];

  const handleScrollToFooter = () => {
    const el = document.querySelector("footer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="why-us-slanted-section">
      <div className="why-us-container">
        
        {/* Left branding panel with solid blue gradient background */}
        <div className="why-us-branding">
          {/* Dotted Grid Background */}
          <div className="dotted-grid-bg"></div>
          
          <h2 className="why-us-title">
            Why <span className="highlight-red">SaiBabu</span>?
          </h2>
          
          <p className="why-us-description">
            Combining compliance, speed, and capability vetting across every stage of deployment—from recruitment to onboarding, training, and payroll management, we deliver world-class workforce solutions.
          </p>
          
          <button className="btn-why-us-more" onClick={handleScrollToFooter}>
            Explore Staffing Solutions <span className="btn-arrow">&rsaquo;</span>
          </button>
        </div>

        {/* Right slanted vertical columns */}
        <div className="why-us-slanted-group">
          {cardsData.map((card, index) => (
            <div key={index} className="slanted-card" onClick={handleScrollToFooter}>
              
              {/* Card Color Blending Overlay (Dark Blue gradient to transparent) */}
              <div className="slanted-card-overlay"></div>
              
              {/* Top Text Label */}
              <span className="slanted-text-label">
                {card.title}
              </span>
              
              <div className="slanted-accent-line"></div>

              {/* Worker Portrait Image (Fills the entire card height) */}
              <img 
                src={card.image} 
                alt="Staffing Profile" 
                className="slanted-worker-img" 
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .why-us-slanted-section {
          background-color: #001224; /* Dark brand blue backdrop */
          padding: 0; /* Remove vertical padding for full-height columns */
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .why-us-container {
          display: grid;
          grid-template-columns: 40% 60%; /* Left panel is wider (40%), Right columns are slimmer (60%) */
          width: 100%;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          align-items: stretch;
          gap: 0 !important; /* Remove gaps between left and right sections */
          height: 540px; /* Uniform height for full-bleed feel */
        }

        /* Left Branding Panel with Solid Blue Gradient Background and Slanted Right Edge */
        .why-us-branding {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 1.25rem;
          position: relative;
          padding: 3rem 5rem 3rem 4rem; /* Generous padding for the wider panel */
          background: linear-gradient(135deg, #005ea6 0%, #001e3d 100%); /* Solid blue gradient matching Hero */
          /* Clip panel on the right with a 60px parallel slant matching the cards */
          clip-path: polygon(0 0, 100% 0, calc(100% - 60px) 100%, 0 100%);
          overflow: hidden;
          height: 100%;
          border: none;
          z-index: 5;
        }

        .dotted-grid-bg {
          position: absolute;
          top: 30px;
          left: 2rem;
          width: 80px;
          height: 80px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
          background-size: 11px 11px;
          z-index: 0;
          pointer-events: none;
        }

        .why-us-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin: 0;
          z-index: 1;
          text-align: left;
        }

        .highlight-red {
          color: #e31b23; /* Brand red accent color */
        }

        .why-us-description {
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.85);
          font-style: italic;
          margin: 0;
          text-align: left;
          z-index: 1;
          font-weight: 300;
          max-width: 95%;
        }

        .btn-why-us-more {
          background-color: #e31b23; /* Brand red */
          color: #ffffff;
          border: none;
          padding: 0.8rem 1.6rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          transition: background-color 0.2s ease, transform 0.2s ease;
          z-index: 1;
          outline: none;
          box-shadow: 0 4px 15px rgba(227, 27, 35, 0.25);
          margin-top: 0.5rem;
        }

        .btn-why-us-more:hover {
          background-color: #c11219;
          transform: translateY(-1px);
        }

        .btn-arrow {
          font-size: 1.2rem;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .btn-why-us-more:hover .btn-arrow {
          transform: translateX(3px);
        }

        /* Right slanted columns list (Zero gaps, seamless layout) */
        .why-us-slanted-group {
          display: flex;
          gap: 0px; /* Zero gap since negative margin creates the overlap */
          height: 100%;
          width: calc(100% + 60px);
          background-color: transparent;
          margin-left: -60px; /* Seamless overlap with left panel slant */
          z-index: 2;
        }

        .slanted-card {
          position: relative;
          flex: 1;
          height: 100%;
          overflow: hidden;
          /* Clip all cards with a parallel 60px horizontal offset slant */
          clip-path: polygon(60px 0, 100% 0, calc(100% - 60px) 100%, 0 100%);
          background: #001224; /* Dark blue base color */
          display: flex;
          flex-direction: column;
          align-items: center;
          /* Left padding (4.2rem / ~67px) shifts text clear of the 60px left slant. Right padding (2.2rem) protects the right boundary. */
          padding: 3.2rem 2.2rem 0.5rem 4.2rem;
          text-align: center;
          margin-left: -60px; /* Zero gaps */
          z-index: 2;
          transition: background 0.3s ease;
          cursor: pointer;
        }

        /* First card resets the negative margin to align perfectly with the left panel slant */
        .slanted-card:first-child {
          margin-left: 0 !important;
        }

        /* Last card has a straight vertical right edge to cover the screen all the way to the right */
        .slanted-card:last-child {
          clip-path: polygon(60px 0, 100% 0, 100% 100%, 0 100%) !important;
        }

        /* Dark blue gradient overlay fading smoothly from top (opaque) to bottom (transparent) */
        .slanted-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, 
            rgba(0, 18, 36, 0.94) 0%, 
            rgba(0, 26, 53, 0.78) 40%, 
            rgba(0, 26, 53, 0.25) 75%, 
            rgba(0, 18, 36, 0) 100%);
          z-index: 2;
          pointer-events: none;
        }

        .slanted-text-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem; /* Slightly reduced font size for safe bounds fit */
          font-weight: 700;
          color: #ffffff; /* White text label */
          line-height: 1.5;
          max-width: 100%;
          margin: 0 auto;
          z-index: 3;
          transition: color 0.3s ease;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .slanted-accent-line {
          width: 20px;
          height: 3px;
          background-color: #e31b23; /* Brand red accent line */
          margin-top: 0.75rem;
          z-index: 3;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        .slanted-card:hover .slanted-accent-line {
          width: 30px;
          background-color: #ffffff;
        }

        .slanted-worker-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; /* Cover the entire card height */
          object-fit: cover;
          z-index: 1;
          transition: transform 0.4s ease;
          pointer-events: none;
        }

        .slanted-card:hover .slanted-worker-img {
          transform: scale(1.06);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .why-us-title {
            font-size: 2.6rem;
          }
          .slanted-text-label {
            font-size: 0.64rem;
          }
        }

        @media (max-width: 1024px) {
          .why-us-slanted-section {
            padding: 5rem 0; /* Add padding for vertical flow on mobile */
          }

          .why-us-container {
            grid-template-columns: 1fr;
            padding: 0 1.5rem !important;
            gap: 3.5rem !important;
            height: auto;
          }
          
          .why-us-branding {
            align-items: center;
            text-align: center;
            min-height: auto;
            padding: 3rem 1.5rem;
            border-radius: 16px; /* Keep it card-like on mobile stacking */
            clip-path: none !important; /* Remove slanted crop on mobile */
          }

          .why-us-title {
            text-align: center;
          }

          .dotted-grid-bg {
            left: 50%;
            transform: translateX(-50%);
            top: -20px;
          }

          .why-us-slanted-group {
            flex-direction: column;
            height: auto;
            background-color: transparent; /* Remove backgrounds on mobile */
            gap: 1.5rem;
            margin-left: 0; /* Reset margins on mobile */
            width: 100%;
          }

          .slanted-card {
            clip-path: none !important;
            flex-direction: row;
            justify-content: flex-start;
            padding: 1.5rem;
            height: 120px;
            text-align: left;
            border-radius: 12px;
            gap: 1.5rem;
            margin-left: 0 !important;
            background: linear-gradient(90deg, #002244 0%, #001224 100%);
          }

          .slanted-card:hover {
            flex: none;
            transform: translateY(-3px);
            background: linear-gradient(90deg, #003666 0%, #002244 100%);
          }

          .slanted-accent-line {
            display: none;
          }

          .slanted-text-label {
            max-width: 100%;
            margin: 0;
            font-size: 0.95rem;
            text-align: left;
            text-shadow: none;
            color: #ffffff;
          }

          .slanted-worker-img {
            position: relative;
            height: 100%;
            width: 120px;
            margin-left: auto;
            border-radius: 8px;
            z-index: 3;
            object-fit: cover;
          }

          .slanted-card-overlay {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .why-us-title {
            font-size: 2.3rem;
          }
          .slanted-card {
            height: 110px;
            padding: 1rem;
            gap: 1rem;
          }
          .slanted-text-label {
            font-size: 0.8rem;
          }
          .slanted-worker-img {
            width: 80px;
          }
        }
      `}</style>
    </section>
  );
}
