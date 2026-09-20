import React from "react";

const saibabuClients = [
  { name: "Renewsys", count: "500+" },
  { name: "Radiant", count: "100+" },
  { name: "Welspun", count: "30+" },
  { name: "Thermo Cable", count: "100+" },
];

const rudhrasriClients = [
  { name: "Junna Solar", count: "150+" },
  { name: "Trefoil", count: "100+" },
  { name: "Indosol", count: "200+" },
  { name: "Purple", count: "50+" },
  { name: "Meesho", count: "50+" },
  { name: "Amazon", count: "50+" },
  { name: "Gowtham Solar", count: "70+" },
];

export default function Industry() {
  return (
    <section id="industry" className="ind-section">
      {/* ── Section header ─────────────────────────────────────── */}
      <div className="ind-header">
        <div className="ind-eyebrow">
          <span className="ind-eyebrow-line" />
          OUR INDUSTRIES
          <span className="ind-eyebrow-line" />
        </div>
        <h2 className="ind-main-title">
          Diverse Industries. Stronger Together.
        </h2>
        <p className="ind-subtitle">
          We work with leading organizations across manufacturing, solar,
          e-commerce and other key sectors, providing reliable manpower
          solutions for their growth.
        </p>
      </div>

      {/* ── Two enterprise cards ────────────────────────────────── */}
      <div className="ind-cards-row">

        {/* ── Saibabu card ── */}
        <div className="ind-card">
          <div className="ind-card-hero ind-card-hero--manufacturing">
            <div className="ind-card-hero-overlay" />
            <div className="ind-card-hero-text">
              <h3 className="ind-card-name">Saibabu</h3>
              <div className="ind-card-divider" />
              <p className="ind-card-tagline">
                Driving growth across key manufacturing and industrial sectors.
              </p>
            </div>
          </div>

          <ul className="ind-client-list">
            {saibabuClients.map((c, i) => (
              <li key={c.name} className="ind-client-row">
                <span className="ind-client-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ind-client-name">{c.name}</span>
                <span className="ind-client-count">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Rudhrasri card ── */}
        <div className="ind-card">
          <div className="ind-card-hero ind-card-hero--solar">
            <div className="ind-card-hero-overlay" />
            <div className="ind-card-hero-text">
              <h3 className="ind-card-name">Rudhrasri</h3>
              <div className="ind-card-divider ind-card-divider--red" />
              <p className="ind-card-tagline">
                Supporting leading brands across solar, e-commerce and warehousing.
              </p>
            </div>
          </div>

          <ul className="ind-client-list">
            {rudhrasriClients.map((c, i) => (
              <li key={c.name} className="ind-client-row">
                <span className="ind-client-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ind-client-name">{c.name}</span>
                <span className="ind-client-count">{c.count}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Bottom banner ───────────────────────────────────────── */}
      <div className="ind-banner">
        <div className="ind-banner-left">
          <span className="ind-banner-eyebrow">
            PEOPLE&nbsp;&nbsp;|&nbsp;&nbsp;PARTNERSHIP&nbsp;&nbsp;|&nbsp;&nbsp;PROGRESS
          </span>
          <h2 className="ind-banner-title">
            Powering Businesses<br />Across Industries
          </h2>
        </div>
        <div className="ind-banner-right">
          <p className="ind-banner-tagline">
            Together<br />for a Stronger<br />Tomorrow.
          </p>
        </div>
      </div>

      <style>{`
        /* ── Section ───────────────────────────────────────────── */
        .ind-section {
          background: #f4f6f8;
          padding: 5.5rem 0 0 0;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        /* ── Header ────────────────────────────────────────────── */
        .ind-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3.5rem auto;
          padding: 0 1.5rem;
        }

        .ind-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: #64748b;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }

        .ind-eyebrow-line {
          display: block;
          flex: 1;
          max-width: 60px;
          height: 1px;
          background: #cbd5e1;
        }

        .ind-main-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4vw, 2.85rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.18;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .ind-subtitle {
          font-size: 1rem;
          line-height: 1.7;
          color: #475569;
        }

        /* ── Cards row ─────────────────────────────────────────── */
        .ind-cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* ── Single card ───────────────────────────────────────── */
        .ind-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 30px rgba(0,0,0,0.07);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
        }

        .ind-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 50px rgba(0,0,0,0.13);
        }

        /* ── Card hero ─────────────────────────────────────────── */
        .ind-card-hero {
          position: relative;
          height: 210px;
          background: linear-gradient(160deg,#1a3a5c,#0d2137);
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .ind-card-hero--manufacturing {
          background-image:
            linear-gradient(160deg, #1a3a5c 0%, #0d2137 100%),
            url('https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&q=80');
          background-blend-mode: multiply;
        }

        .ind-card-hero--solar {
          background-image:
            linear-gradient(160deg, #1a3a5c 0%, #0d2137 100%),
            url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80');
          background-blend-mode: multiply;
        }

        .ind-card-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(8,20,40,0.80) 0%,
            rgba(8,20,40,0.40) 60%,
            rgba(8,20,40,0.08) 100%
          );
        }

        .ind-card-hero-text {
          position: relative;
          z-index: 2;
          padding: 2rem 2.2rem;
        }

        .ind-card-name {
          font-family: 'Outfit', sans-serif;
          font-size: 2.1rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.55rem 0;
          letter-spacing: -0.02em;
        }

        .ind-card-divider {
          width: 36px;
          height: 3px;
          background: rgba(255,255,255,0.65);
          border-radius: 2px;
          margin-bottom: 0.8rem;
        }

        .ind-card-divider--red {
          background: #e31b23;
          opacity: 1;
        }

        .ind-card-tagline {
          font-size: 0.87rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.82);
          max-width: 260px;
          margin: 0;
        }

        /* ── Client list ───────────────────────────────────────── */
        .ind-client-list {
          list-style: none;
          margin: 0;
          padding: 0.4rem 0 0.6rem 0;
        }

        .ind-client-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 2rem;
          border-bottom: 1px solid #f1f5f9;
          transition: background 0.18s ease;
        }

        .ind-client-row:last-child {
          border-bottom: none;
        }

        .ind-client-row:hover {
          background: #f8fafc;
        }

        .ind-client-num {
          font-family: 'Outfit', sans-serif;
          font-size: 0.73rem;
          font-weight: 700;
          color: #94a3b8;
          min-width: 28px;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 0.22rem 0.5rem;
          text-align: center;
          letter-spacing: 0.03em;
        }

        .ind-client-name {
          flex: 1;
          font-size: 0.96rem;
          font-weight: 600;
          color: #1e293b;
        }

        .ind-client-count {
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: #e31b23;
          background: rgba(227, 27, 35, 0.08);
          border-radius: 8px;
          padding: 0.22rem 0.72rem;
          letter-spacing: 0.02em;
        }

        /* ── Bottom banner ─────────────────────────────────────── */
        .ind-banner {
          margin-top: 3.5rem;
          padding: 4rem 2.5rem;
          background:
            linear-gradient(to right, rgba(8,20,40,0.88), rgba(8,20,40,0.60)),
            url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .ind-banner-left {
          max-width: 440px;
        }

        .ind-banner-eyebrow {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .ind-banner-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 3.5vw, 2.75rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.18;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .ind-banner-right {
          text-align: right;
        }

        .ind-banner-tagline {
          font-size: 1.05rem;
          font-style: italic;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Responsive ────────────────────────────────────────── */
        @media (max-width: 960px) {
          .ind-cards-row {
            grid-template-columns: 1fr;
            max-width: 640px;
          }
          .ind-banner {
            flex-direction: column;
            text-align: center;
          }
          .ind-banner-right {
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .ind-section { padding: 3.5rem 0 0 0; }
          .ind-cards-row { padding: 0 1rem; }
          .ind-card-hero { height: 170px; }
          .ind-card-hero-text { padding: 1.5rem 1.5rem; }
          .ind-client-row { padding: 0.7rem 1.2rem; }
          .ind-banner { padding: 2.5rem 1.2rem; }
        }
      `}</style>
    </section>
  );
}

