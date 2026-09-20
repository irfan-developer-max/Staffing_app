import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Nexus Staffing transformed our hiring experience. Within two weeks of submitting our request, we had onboarded a Senior DevOps Engineer who fit perfectly with our company culture. The quality of candidate filtering is exceptional.",
      author: "Sarah Jenkins",
      role: "VP of Engineering",
      company: "CloudScale Systems",
      type: "client"
    },
    {
      quote: "Working with the team at Nexus was a breath of fresh air. They didn't just dump lists of jobs on me; they listened to my career desires. They helped refine my resume and prepared me meticulously for the interviews.",
      author: "Marcus Chen",
      role: "Senior Embedded Engineer",
      company: "Nova Robotics (Placed)",
      type: "candidate"
    },
    {
      quote: "Finding high-quality corporate finance talent is always a challenge. Nexus's specialized recruitment agents understood our exact technical requirements and regulatory compliance needs, delivering elite candidates fast.",
      author: "Elena Rostova",
      role: "Chief Financial Officer",
      company: "Horizon Capital",
      type: "client"
    },
    {
      quote: "I was connected with BioMed Therapeutics through Nexus Staffing. The recruiter was incredibly supportive throughout the negotiation phase. I love my new role, and I highly recommend this agency.",
      author: "Dr. David Vance",
      role: "Clinical Coordinator",
      company: "BioMed Therapeutics (Placed)",
      type: "candidate"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play testimonial carousel
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-pink">Success Stories</span>
          <h2 className="section-title">Endorsed by Talent and Employers</h2>
          <p className="section-subtitle">
            See what companies and professionals say about our staffing and placement pipelines.
          </p>
        </div>

        {/* Carousel Slider Card */}
        <div className="carousel-wrapper">
          <button className="carousel-arrow prev-arrow" onClick={handlePrev} aria-label="Previous testimonial">
            &larr;
          </button>

          <div className="carousel-card glass-card">
            <div className="quote-mark">“</div>
            <p className="testimonial-quote">{testimonials[activeIndex].quote}</p>
            
            <div className="testimonial-author-block">
              <div className="author-details">
                <span className="author-name">{testimonials[activeIndex].author}</span>
                <span className="author-meta">
                  {testimonials[activeIndex].role} &bull; <span className="author-company">{testimonials[activeIndex].company}</span>
                </span>
              </div>
              <span className={`badge ${testimonials[activeIndex].type === "client" ? "badge-cyan" : "badge-purple"}`}>
                {testimonials[activeIndex].type === "client" ? "Partner Client" : "Placed Candidate"}
              </span>
            </div>
          </div>

          <button className="carousel-arrow next-arrow" onClick={handleNext} aria-label="Next testimonial">
            &rarr;
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${activeIndex === idx ? "active-dot-carousel" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: relative;
        }

        .carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        @media (max-width: 768px) {
          .carousel-wrapper {
            gap: 0.5rem;
          }
          .carousel-arrow {
            display: none !important;
          }
        }

        .carousel-card {
          flex-grow: 1;
          padding: 4rem 3rem 3rem 3rem;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          text-align: left;
        }

        @media (max-width: 600px) {
          .carousel-card {
            padding: 2.5rem 1.5rem 2rem 1.5rem;
          }
        }

        .quote-mark {
          position: absolute;
          top: 1rem;
          left: 2rem;
          font-size: 6rem;
          font-family: 'Outfit', sans-serif;
          color: rgba(6, 182, 212, 0.08);
          line-height: 1;
          user-select: none;
        }

        .testimonial-quote {
          font-size: 1.2rem;
          line-height: 1.7;
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          position: relative;
          z-index: 5;
        }

        @media (max-width: 600px) {
          .testimonial-quote {
            font-size: 1.05rem;
            line-height: 1.6;
          }
        }

        .testimonial-author-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .author-meta {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .author-company {
          color: var(--primary-cyan);
          font-weight: 500;
        }

        /* Carousel Navigation Controls */
        .carousel-arrow {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: var(--transition-normal);
          flex-shrink: 0;
        }

        .carousel-arrow:hover {
          background: var(--gradient-primary);
          border-color: transparent;
          box-shadow: var(--glow-shadow);
          transform: scale(1.05);
        }

        /* Indicator dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .active-dot-carousel {
          background: var(--primary-cyan) !important;
          width: 28px;
          border-radius: 5px;
          box-shadow: var(--glow-shadow);
        }

        @media (max-width: 480px) {
          .testimonial-author-block {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
