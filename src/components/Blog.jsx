import React, { useState } from "react";

export default function Blog() {
  const articles = [
    {
      id: "blog-1",
      title: "Understanding Statutory Compliance in Indian Manpower Supply",
      snippet: "From EPFO regulations to ESIC contribution limits, discover how to keep your outsourced personnel pipeline legally compliant and audit-ready.",
      date: "August 12, 2026",
      readTime: "5 min read",
      category: "Compliance",
      content: `In the corporate manpower outsourcing landscape, statutory compliance is not just a checkbox—it is the foundation of operational security. For companies leveraging bulk contract staff, ensuring EPFO, ESIC, LWF, and Professional Tax compliance is critical to mitigate legal risks.

Key areas to monitor:
1. EPFO (Employees' Provident Fund): Regular monthly contributions matching statutory scales must be deposited, and individual account transfers monitored.
2. ESIC (Employees' State Insurance): Providing health and medical coverage benefits to employees below the wage threshold.
3. Contract Labor Regulation (CLRA): Licensing requirements under the Contract Labour (Regulation and Abolition) Act for hubs utilizing over 20 contract workers.

Partnering with an outsourced compliance agent like Sai Babu Enterprises ensures all statutory audits, ledger registers, and return submissions are handled transparently, preventing sudden vendor liabilities.`
    },
    {
      id: "blog-2",
      title: "Why Bulk Manpower Outsourcing is Driving Industrial Scaling",
      snippet: "Discover how contract labor structures optimize operational efficiency in logistics, supply chains, and manufacturing sectors.",
      date: "July 28, 2026",
      readTime: "4 min read",
      category: "Staffing",
      content: `As market demands fluctuate, industrial hubs require high agility. Standard hiring procedures are slow, expensive, and introduce long-term overhead costs. This is where bulk manpower supply models are transforming logistics and manufacturing scales.

Advantages of Manpower Outsourcing:
1. Dynamic Scaling: Expand shift labor during peak logistics seasons and downscale smoothly as production targets stabilize.
2. Reduced Hiring Overhead: Vetting, background screening, reference checks, and ledger onboarding are managed entirely by the supplier.
3. Operational Focus: Corporate leadership can dedicate their focus directly to production output and quality metrics while compliance and supply logistics are handled externally.

By maintaining ready pools of general technicians and warehouse packers, agencies provide corporate companies with instant scaling power.`
    },
    {
      id: "blog-3",
      title: "Structuring NAPS Apprentice Curriculums for Manufacturing Hubs",
      snippet: "How to align National Apprenticeship Promotion Scheme guidelines with active production lines to build skilled internal talent pipelines.",
      date: "July 15, 2026",
      readTime: "6 min read",
      category: "Training",
      content: `The National Apprenticeship Promotion Scheme (NAPS) has emerged as an excellent model for industrial units to groom entry-level candidates. However, many companies struggle to create training curriculums that translate into functional production value.

How to align NAPS training:
1. Objective Mapping: Align classroom study hours directly with technical skills needed on active assembly lines.
2. Mentorship Handshake: Assigning seasoned factory floor supervisors as technical tutors for apprentice groups.
3. Progressive Evaluations: Vetting skills milestones quarterly to transition apprentices into permanent operational roles.

A structured NAPS training program reduces future talent search costs while claiming financial incentives provided under government training frameworks.`
    }
  ];

  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-pink" style={{ background: "rgba(247, 138, 17, 0.08)", color: "#f78a11" }}>Corporate Insights</span>
          <h2 className="section-title">Latest Updates & Industry News</h2>
          <p className="section-subtitle">
            Stay informed with expert opinions on statutory labor laws, staffing operations, compliance management, and industrial training.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {articles.map((article) => (
            <div key={article.id} className="blog-card glass-card">
              <div className="blog-card-meta">
                <span className="badge badge-cyan" style={{ background: "rgba(7, 6, 33, 0.04)", color: "#070621" }}>{article.category}</span>
                <span className="blog-date-text">{article.date} &bull; {article.readTime}</span>
              </div>
              
              <h3 className="blog-card-title">{article.title}</h3>
              <p className="blog-card-snippet">{article.snippet}</p>
              
              <button className="btn btn-secondary btn-sm blog-read-btn" onClick={() => setActiveArticle(article)}>
                Read Article &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal Overlay */}
      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="modal-content glass-card animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            {/* Modal Close Button */}
            <button className="modal-close" onClick={() => setActiveArticle(null)} aria-label="Close article">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="modal-header-meta" style={{ gap: "0.5rem" }}>
              <span className="badge badge-cyan" style={{ background: "rgba(7, 6, 33, 0.04)", color: "#070621", width: "fit-content" }}>{activeArticle.category}</span>
              <h2 className="modal-job-title" style={{ fontSize: "1.6rem", textAlign: "left" }}>{activeArticle.title}</h2>
              <div className="modal-company-info" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                <span>Published on {activeArticle.date}</span>
                <span className="separator">&bull;</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
              <div className="modal-description-content" style={{ textAlign: "left" }}>
                {activeArticle.content.split("\n\n").map((para, idx) => (
                  <p key={idx} style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem", fontSize: "0.98rem" }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="modal-actions-footer">
              <button className="btn btn-secondary" onClick={() => setActiveArticle(null)}>
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .blog-section {
          background: relative;
        }

        /* Blog Grid Layout */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: left;
        }

        .blog-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .blog-date-text {
          color: var(--text-muted);
          font-weight: 500;
        }

        .blog-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.35;
          color: var(--text-primary);
        }

        .blog-card-snippet {
          color: var(--text-secondary);
          font-size: 0.94rem;
          line-height: 1.5;
        }

        .blog-read-btn {
          margin-top: auto;
          align-self: flex-start;
          border-color: var(--border-color);
        }

        .blog-read-btn:hover {
          border-color: var(--accent-pink);
          color: var(--accent-pink);
          background: transparent !important;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 6, 33, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        /* Modal Content */
        .modal-content {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Modal Close Button */
        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .modal-close:hover {
          background-color: rgba(7, 6, 33, 0.05);
          color: var(--accent-pink);
        }

        .modal-close svg {
          width: 20px;
          height: 20px;
        }

        .modal-header-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .modal-company-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .separator {
          color: var(--text-muted);
        }

        .modal-actions-footer {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 600px) {
          .blog-card {
            padding: 1.75rem 1.25rem;
          }
          .modal-content {
            padding: 1.75rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
