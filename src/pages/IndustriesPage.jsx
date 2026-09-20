import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* =========================================================
   DATA
========================================================= */

const saibabuClients = [
  {
    name: "Renewsys",
    count: "500+",
    sector: "Solar Manufacturing",
  },
  {
    name: "Radiant",
    count: "100+",
    sector: "Cables & Wiring",
  },
  {
    name: "Welspun",
    count: "30+",
    sector: "Textiles",
  },
  {
    name: "Thermo Cable",
    count: "100+",
    sector: "Industrial Cables",
  },
];

const rudhrasriClients = [
  {
    name: "Junna Solar",
    count: "150+",
    sector: "Solar Energy",
  },
  {
    name: "Trefoil",
    count: "100+",
    sector: "Cables",
  },
  {
    name: "Indosol",
    count: "200+",
    sector: "Solar EPC",
  },
  {
    name: "Purple",
    count: "50+",
    sector: "E-Commerce",
  },
  {
    name: "Meesho",
    count: "50+",
    sector: "E-Commerce",
  },
  {
    name: "Amazon",
    count: "50+",
    sector: "Warehousing",
  },
  {
    name: "Gowtham Solar",
    count: "70+",
    sector: "Solar Energy",
  },
];

/* =========================================================
   HELPERS
========================================================= */

function parseCount(str) {
  return parseInt(str.replace("+", ""), 10) || 0;
}

/* =========================================================
   AUTO CALCULATED STATS
========================================================= */

const totalWorkers = [...saibabuClients, ...rudhrasriClients].reduce(
  (sum, client) => sum + parseCount(client.count),
  0
);

const totalClients =
  saibabuClients.length + rudhrasriClients.length;

const yearsExperience = new Date().getFullYear() - 2016;

const stats = [
  {
    target: yearsExperience,
    suffix: "+",
    label: "Years Experience",
  },
  {
    target: totalWorkers,
    suffix: "+",
    label: "Workers Deployed",
  },
  {
    target: totalClients,
    suffix: "",
    label: "Clients Served",
  },
  {
    target: 2,
    suffix: "",
    label: "Enterprise Brands",
  },
];

/* =========================================================
   SECTORS
========================================================= */

const sectors = [
  {
    name: "Manufacturing",
    icon: "⚙️",
    desc: "Assembly line operators, machinists, QC controllers for plant floors.",
    color: "#005ea6",
  },
  {
    name: "Solar Energy",
    icon: "☀️",
    desc: "Panel installers, EPC helpers, site supervisors for solar projects.",
    color: "#f59e0b",
  },
  {
    name: "E-Commerce",
    icon: "📦",
    desc: "Packers, sorters, fulfillment staff for major platforms.",
    color: "#10b981",
  },
  {
    name: "Warehousing",
    icon: "🏭",
    desc: "Loaders, inventory operators, warehouse managers.",
    color: "#8b5cf6",
  },
  {
    name: "Cables & Wiring",
    icon: "🔌",
    desc: "Cable assembly, quality inspection, reel handling teams.",
    color: "#e31b23",
  },
  {
    name: "Textiles",
    icon: "🧵",
    desc: "Loom operators, finishing staff, quality checkers.",
    color: "#ec4899",
  },
];

/* =========================================================
   COUNT UP HOOK
========================================================= */

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;

            const progress = Math.min(
              elapsed / duration,
              1
            );

            // Ease-out cubic
            const eased =
              1 - Math.pow(1 - progress, 3);

            setCount(
              Math.round(eased * target)
            );

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return {
    count,
    ref,
  };
}

/* =========================================================
   ANIMATED STAT
========================================================= */

function AnimatedStat({
  target,
  suffix,
  label,
}) {
  const { count, ref } = useCountUp(target);

  return (
    <div
      className="ip-stat-item"
      ref={ref}
    >
      <span className="ip-stat-value">
        {count.toLocaleString()}
        {suffix}
      </span>

      <span className="ip-stat-label">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   INDUSTRIES PAGE
========================================================= */

export default function IndustriesPage() {
  const [activeTab, setActiveTab] =
    useState("saibabu");

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>
          Industries We Serve | Saibabu & Rudhrasri Enterprises
        </title>

        <meta
          name="description"
          content="Saibabu and Rudhrasri Enterprises power manufacturing, solar, e-commerce and warehousing sectors with reliable manpower across India."
        />
      </Helmet>

      <div className="ip-page">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="ip-hero">
          <div className="ip-hero-overlay" />

          <div className="ip-hero-content">

            <span className="ip-hero-eyebrow">
              OUR INDUSTRIES
            </span>

            <h1 className="ip-hero-title">
              Diverse Industries.
              <br />

              <span className="ip-hero-accent">
                Stronger Together.
              </span>
            </h1>

            <p className="ip-hero-sub">
              Two enterprise brands powering India's
              most demanding sectors with verified,
              compliant manpower and workforce
              solutions since 2016.
            </p>

            <div className="ip-hero-btns">

              <a
                href="#enterprise-cards"
                className="ip-btn ip-btn-primary"
              >
                Explore Our Clients
              </a>

              <Link
                to="/about"
                className="ip-btn ip-btn-ghost"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </section>

        {/* ===================================================
            STATS
        =================================================== */}

        <div className="ip-stats-bar">
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* ===================================================
            ENTERPRISE SECTION
        =================================================== */}

        <section
          id="enterprise-cards"
          className="ip-section ip-enterprises"
        >

          <div className="ip-container">

            {/* Section Header */}

            <div className="ip-section-header">

              <div className="ip-eyebrow-row">
                <span className="ip-eyebrow-line" />

                <span>
                  TWO TRUSTED BRANDS
                </span>

                <span className="ip-eyebrow-line" />
              </div>

              <h2 className="ip-section-title">
                Our Enterprise Divisions
              </h2>

            </div>

            {/* =================================================
                ENTERPRISE CARDS GRID
            ================================================= */}

            <div className="ip-cards-grid">

              {/* =================================================
                  SAIBABU
              ================================================= */}

              <div
                className={`ip-ent-card ${activeTab === "saibabu"
                  ? "ip-ent-card-visible"
                  : "ip-ent-card-muted"
                  }`}
                onClick={() =>
                  setActiveTab("saibabu")
                }
              >

                {/* Hero */}

                <div className="ip-ent-hero ip-ent-hero--manuf">

                  <div className="ip-ent-hero-overlay" />

                  <div className="ip-ent-hero-text">

                    <h3 className="ip-ent-name">
                      Saibabu
                    </h3>

                    <p className="ip-ent-tagline">
                      Driving growth across key
                      manufacturing and industrial
                      sectors.
                    </p>

                  </div>
                </div>

                {/* Body */}

                <div className="ip-ent-body">

                  <div className="ip-clients-header">

                    <span className="ip-clients-label">
                      Key Clients
                    </span>
                  </div>

                  <ul className="ip-client-list">

                    {saibabuClients.map(
                      (client, index) => (
                        <li
                          key={client.name}
                          className="ip-client-row"
                        >

                          <span className="ip-client-num">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <div className="ip-client-info">

                            <span className="ip-client-name">
                              {client.name}
                            </span>

                            <span className="ip-client-sector">
                              {client.sector}
                            </span>

                          </div>

                          <span className="ip-client-count">
                            {client.count}
                          </span>

                        </li>
                      )
                    )}

                  </ul>

                </div>
              </div>

              {/* =================================================
                  RUDHRASRI
              ================================================= */}

              <div
                className={`ip-ent-card ${activeTab === "rudhrasri"
                  ? "ip-ent-card-visible"
                  : "ip-ent-card-muted"
                  }`}
                onClick={() =>
                  setActiveTab("rudhrasri")
                }
              >

                {/* Hero */}

                <div className="ip-ent-hero ip-ent-hero--solar">

                  <div className="ip-ent-hero-overlay" />

                  <div className="ip-ent-hero-text">

                    <div className="ip-ent-brand-badge">
                      Solar & E-Commerce
                    </div>

                    <h3 className="ip-ent-name">
                      Rudhrasri
                    </h3>

                    <p className="ip-ent-tagline">
                      Supporting leading brands
                      across solar, e-commerce
                      and warehousing.
                    </p>

                  </div>
                </div>

                {/* Body */}

                <div className="ip-ent-body">

                  <p className="ip-ent-desc">
                  </p>

                  <div className="ip-clients-header">

                    <span className="ip-clients-label">
                      Key Clients
                    </span>

                  </div>

                  <ul className="ip-client-list">

                    {rudhrasriClients.map(
                      (client, index) => (
                        <li
                          key={client.name}
                          className="ip-client-row"
                        >

                          <span className="ip-client-num">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <div className="ip-client-info">

                            <span className="ip-client-name">
                              {client.name}
                            </span>

                            <span className="ip-client-sector">
                              {client.sector}
                            </span>

                          </div>

                          <span className="ip-client-count ip-client-count--red">
                            {client.count}
                          </span>

                        </li>
                      )
                    )}

                  </ul>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            SECTORS
        =================================================== */}

        <section
          className="ip-section ip-sectors-section"
        >

          <div className="ip-container">

            <div className="ip-section-header">

              <div className="ip-eyebrow-row">

                <span className="ip-eyebrow-line" />

                <span>
                  WHAT WE COVER
                </span>

                <span className="ip-eyebrow-line" />

              </div>

              <h2 className="ip-section-title">
                Sectors We Power
              </h2>

              <p className="ip-section-sub">
                Our combined enterprise portfolio
                spans across high-growth industries,
                ensuring specialized manpower for
                every operational need.
              </p>

            </div>

            {/* Sector Cards */}

            <div className="ip-sectors-grid">

              {sectors.map((sector) => (

                <div
                  key={sector.name}
                  className="ip-sector-card"
                >

                  <div
                    className="ip-sector-icon-wrap"
                    style={{
                      background: `${sector.color}15`,
                      color: sector.color,
                    }}
                  >
                    <span className="ip-sector-emoji">
                      {sector.icon}
                    </span>
                  </div>

                  <h4 className="ip-sector-name">
                    {sector.name}
                  </h4>

                  <p className="ip-sector-desc">
                    {sector.desc}
                  </p>

                  <div
                    className="ip-sector-accent"
                    style={{
                      background: sector.color,
                    }}
                  />

                </div>

              ))}

            </div>

          </div>
        </section>

        {/* ===================================================
            CTA
        =================================================== */}

        <section className="ip-cta-banner">

          <div className="ip-cta-overlay" />

          <div className="ip-cta-content">

            <div className="ip-cta-left">

              <span className="ip-cta-eyebrow">
                PEOPLE&nbsp;&nbsp;|&nbsp;&nbsp;
                PARTNERSHIP&nbsp;&nbsp;|&nbsp;&nbsp;
                PROGRESS
              </span>

              <h2 className="ip-cta-title">
                Powering Businesses
                <br />
                Across Industries
              </h2>

            </div>

            <div className="ip-cta-right">

              <p className="ip-cta-tagline">
                Together
                <br />
                for a Stronger
                <br />
                Tomorrow.
              </p>

              <Link
                to="/about"
                className="ip-btn ip-btn-white"
              >
                Get in Touch →
              </Link>

            </div>

          </div>
        </section>

      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =====================================================
           RESET
        ===================================================== */

        .ip-page {
          padding-top: 118px;
          font-family: "Inter", sans-serif;
          background: #f4f6f8;
          color: #0f172a;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .ip-hero {
          position: relative;
          min-height: 520px;

          display: flex;
          align-items: center;

          background:
            url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80")
            center / cover no-repeat;

          overflow: hidden;
        }

        .ip-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              120deg,
              rgba(7, 6, 33, 0.88) 0%,
              rgba(0, 94, 166, 0.72) 55%,
              rgba(7, 6, 33, 0.55) 100%
            );
        }

        .ip-hero-content {
          position: relative;
          z-index: 2;

          max-width: 780px;

          padding:
            5rem
            2.5rem
            5rem
            6vw;
        }

        .ip-hero-eyebrow {
          display: inline-block;

          font-family: "Outfit", sans-serif;

          font-size: 0.72rem;
          font-weight: 700;

          letter-spacing: 0.22em;

          color: rgba(255, 255, 255, 0.55);

          text-transform: uppercase;

          margin-bottom: 1.2rem;
        }

        .ip-hero-title {
          font-family: "Outfit", sans-serif;

          font-size: clamp(
            2.4rem,
            5vw,
            4rem
          );

          font-weight: 800;

          color: #ffffff;

          line-height: 1.12;

          letter-spacing: -0.03em;

          margin: 0 0 1.2rem;
        }

        .ip-hero-accent {
          color: #e31b23;
        }

        .ip-hero-sub {
          font-size: 1.05rem;

          line-height: 1.7;

          color: rgba(255, 255, 255, 0.75);

          max-width: 560px;

          margin-bottom: 2.2rem;
        }

        .ip-hero-btns {
          display: flex;

          gap: 1rem;

          flex-wrap: wrap;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .ip-btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          padding:
            0.85rem
            2rem;

          border-radius: 6px;

          font-family: "Outfit", sans-serif;

          font-size: 0.95rem;
          font-weight: 700;

          cursor: pointer;

          text-decoration: none;

          transition:
            all 0.22s ease;
        }

        .ip-btn-primary {
          background: #e31b23;

          color: #ffffff;

          border:
            2px solid
            #e31b23;
        }

        .ip-btn-primary:hover {
          background: #c01018;

          border-color: #c01018;

          transform:
            translateY(-2px);
        }

        .ip-btn-ghost {
          background: transparent;

          color: #ffffff;

          border:
            2px solid
            rgba(255, 255, 255, 0.45);
        }

        .ip-btn-ghost:hover {
          background:
            rgba(255, 255, 255, 0.1);

          border-color:
            rgba(255, 255, 255, 0.75);

          transform:
            translateY(-2px);
        }

        .ip-btn-white {
          background: #ffffff;

          color: #0f172a;

          border:
            2px solid #ffffff;

          margin-top: 1.5rem;
        }

        .ip-btn-white:hover {
          background: #f1f5f9;

          transform:
            translateY(-2px);
        }


        /* =====================================================
           STATS
        ===================================================== */

        .ip-stats-bar {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          background: #0f172a;
        }

        .ip-stat-item {
          padding: 2.8rem 1.5rem;

          text-align: center;

          border-right:
            1px solid
            rgba(255, 255, 255, 0.07);

          transition:
            background 0.2s ease;
        }

        .ip-stat-item:last-child {
          border-right: none;
        }

        .ip-stat-item:hover {
          background:
            rgba(255, 255, 255, 0.03);
        }

        .ip-stat-value {
          display: block;

          font-family: "Outfit", sans-serif;

          font-size: 3.2rem;

          font-weight: 800;

          color: #ffffff;

          line-height: 1;

          margin-bottom: 0.6rem;

          letter-spacing: -0.03em;
        }

        .ip-stat-label {
          font-size: 0.9rem;

          font-weight: 600;

          color:
            rgba(255, 255, 255, 0.5);

          text-transform: uppercase;

          letter-spacing: 0.1em;
        }


        /* =====================================================
           GENERIC SECTION
        ===================================================== */

        .ip-section {
          padding: 6rem 0;
        }

        .ip-container {
          max-width: 1280px;

          margin: 0 auto;

          padding:
            0 2.5rem;
        }

        .ip-section-header {
          text-align: center;

          max-width: 680px;

          margin:
            0 auto
            3.5rem;
        }

        .ip-eyebrow-row {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 0.85rem;

          font-family: "Outfit", sans-serif;

          font-size: 0.7rem;

          font-weight: 700;

          letter-spacing: 0.2em;

          color: #94a3b8;

          text-transform: uppercase;

          margin-bottom: 1rem;
        }

        .ip-eyebrow-line {
          display: block;

          flex: 1;

          max-width: 50px;

          height: 1px;

          background: #cbd5e1;
        }

        .ip-section-title {
          font-family: "Outfit", sans-serif;

          font-size:
            clamp(
              1.9rem,
              3.5vw,
              2.8rem
            );

          font-weight: 800;

          color: #0f172a;

          line-height: 1.18;

          letter-spacing: -0.03em;

          margin:
            0 0 0.9rem;
        }

        .ip-section-sub {
          font-size: 1rem;

          line-height: 1.7;

          color: #475569;

          margin: 0;
        }


        /* =====================================================
           ENTERPRISE GRID
        ===================================================== */

        .ip-cards-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 1.5rem;
        }

        .ip-ent-card {
          background: #ffffff;

          border-radius: 20px;

          overflow: hidden;

          box-shadow:
            0 6px 30px
            rgba(0, 0, 0, 0.07);

          transition:
            all 0.3s
            cubic-bezier(
              0.4,
              0,
              0.2,
              1
            );

          cursor: pointer;
        }

        .ip-ent-card:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 18px 50px
            rgba(0, 0, 0, 0.12);
        }

        .ip-ent-card-muted {
          opacity: 0.72;
        }

        .ip-ent-card-visible {
          opacity: 1;

          box-shadow:
            0 10px 40px
            rgba(0, 0, 0, 0.12);
        }


        /* =====================================================
           ENTERPRISE HERO
        ===================================================== */

        .ip-ent-hero {
          position: relative;

          height: 300px;

          background-size: cover;

          background-position: center;

          overflow: hidden;
        }

        .ip-ent-hero--manuf {
          background-image:
            linear-gradient(
              160deg,
              #0d2137 0%,
              #1a3a5c 100%
            ),
            url(
              "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=900&q=80"
            );

          background-blend-mode:
            multiply;
        }

        .ip-ent-hero--solar {
          background-image:
            linear-gradient(
              160deg,
              #0d2137 0%,
              #1a3a5c 100%
            ),
            url(
              "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80"
            );

          background-blend-mode:
            multiply;
        }

        .ip-ent-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to right,
              rgba(8, 20, 40, 0.82) 0%,
              rgba(8, 20, 40, 0.38) 65%,
              rgba(8, 20, 40, 0.06) 100%
            );
        }

        .ip-ent-hero-text {
          position: relative;

          z-index: 2;

          padding:
            2.5rem 2.8rem;
        }

        .ip-ent-brand-badge {
          display: inline-block;

          background:
            rgba(255, 255, 255, 0.15);

          color:
            rgba(255, 255, 255, 0.9);

          font-family: "Outfit", sans-serif;

          font-size: 0.7rem;

          font-weight: 700;

          letter-spacing: 0.1em;

          text-transform: uppercase;

          padding:
            0.25rem 0.75rem;

          border-radius: 20px;

          border:
            1px solid
            rgba(255, 255, 255, 0.2);

          margin-bottom: 0.75rem;
        }

        .ip-ent-name {
          font-family: "Outfit", sans-serif;

          font-size: 3rem;

          font-weight: 800;

          color: #ffffff;

          margin:
            0 0 0.7rem;

          letter-spacing: -0.03em;
        }

        .ip-ent-tagline {
          font-size: 1rem;

          line-height: 1.6;

          color:
            rgba(255, 255, 255, 0.85);

          max-width: 320px;

          margin: 0;
        }


        /* =====================================================
           ENTERPRISE BODY
        ===================================================== */

        .ip-ent-body {
          padding:
            2.2rem
            2.5rem
            2rem;
        }

        .ip-ent-desc {
          font-size: 1rem;

          line-height: 1.75;

          color: #475569;

          margin:
            0 0 1.75rem;

          border-bottom:
            1px solid #f1f5f9;

          padding-bottom: 1.75rem;
        }


        /* =====================================================
           CLIENT HEADER
        ===================================================== */

        .ip-clients-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 0.75rem;
        }

        .ip-clients-label {
          font-family: "Outfit", sans-serif;

          font-size: 0.8rem;

          font-weight: 700;

          color: #64748b;

          text-transform: uppercase;

          letter-spacing: 0.08em;
        }

        .ip-clients-count-badge {
          background: #005ea6;

          color: #ffffff;

          font-size: 0.72rem;

          font-weight: 700;

          padding:
            0.18rem
            0.6rem;

          border-radius: 20px;
        }

        .ip-clients-count-badge--red {
          background: #e31b23;
        }


        /* =====================================================
           CLIENT LIST
        ===================================================== */

        .ip-client-list {
          list-style: none;

          margin: 0;

          padding: 0;
        }

        .ip-client-row {
          display: flex;

          align-items: center;

          gap: 1rem;

          padding:
            0.95rem 0;

          border-bottom:
            1px solid #f1f5f9;

          transition:
            background 0.15s ease;
        }

        .ip-client-row:last-child {
          border-bottom: none;
        }

        .ip-client-row:hover {
          background: #f8fafc;

          border-radius: 8px;

          padding-left: 0.5rem;
        }

        .ip-client-num {
          font-family: "Outfit", sans-serif;

          font-size: 0.7rem;

          font-weight: 700;

          color: #94a3b8;

          min-width: 28px;

          background: #f1f5f9;

          border-radius: 6px;

          padding:
            0.2rem 0.45rem;

          text-align: center;
        }

        .ip-client-info {
          flex: 1;

          display: flex;

          flex-direction: column;

          gap: 0.1rem;
        }

        .ip-client-name {
          font-size: 1.02rem;

          font-weight: 600;

          color: #1e293b;
        }

        .ip-client-sector {
          font-size: 0.82rem;

          color: #94a3b8;

          font-weight: 500;
        }

        .ip-client-count {
          font-family: "Outfit", sans-serif;

          font-size: 1rem;

          font-weight: 700;

          color: #005ea6;

          background:
            rgba(0, 94, 166, 0.08);

          border-radius: 8px;

          padding:
            0.28rem 0.9rem;

          white-space: nowrap;
        }

        .ip-client-count--red {
          color: #e31b23;

          background:
            rgba(227, 27, 35, 0.08);
        }


        /* =====================================================
           SECTORS
        ===================================================== */

        .ip-sectors-section {
          background: #ffffff;
        }

        .ip-sectors-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 2rem;
        }

        .ip-sector-card {
          position: relative;

          background: #f8fafc;

          border-radius: 20px;

          padding:
            2.5rem
            2.2rem
            2.2rem;

          border:
            1px solid #e2e8f0;

          overflow: hidden;

          transition:
            all 0.25s ease;
        }

        .ip-sector-card:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 12px 35px
            rgba(0, 0, 0, 0.08);

          background: #ffffff;
        }

        .ip-sector-icon-wrap {
          width: 68px;
          height: 68px;

          border-radius: 18px;

          display: flex;

          align-items: center;

          justify-content: center;

          margin-bottom: 1.3rem;
        }

        .ip-sector-emoji {
          font-size: 2rem;

          line-height: 1;
        }

        .ip-sector-name {
          font-family: "Outfit", sans-serif;

          font-size: 1.2rem;

          font-weight: 800;

          color: #0f172a;

          margin:
            0 0 0.6rem;
        }

        .ip-sector-desc {
          font-size: 0.96rem;

          line-height: 1.7;

          color: #64748b;

          margin: 0;
        }

        .ip-sector-accent {
          position: absolute;

          bottom: 0;

          left: 0;

          right: 0;

          height: 3px;

          opacity: 0;

          transition:
            opacity 0.25s ease;
        }

        .ip-sector-card:hover
          .ip-sector-accent {
          opacity: 1;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .ip-cta-banner {
          position: relative;

          padding:
            5rem 6vw;

          background:
            url(
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            )
            center / cover no-repeat;

          overflow: hidden;
        }

        .ip-cta-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to right,
              rgba(7, 6, 33, 0.92) 0%,
              rgba(0, 94, 166, 0.75) 60%,
              rgba(7, 6, 33, 0.65) 100%
            );
        }

        .ip-cta-content {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 3rem;

          max-width: 1280px;

          margin: 0 auto;
        }

        .ip-cta-eyebrow {
          display: block;

          font-family: "Outfit", sans-serif;

          font-size: 0.68rem;

          font-weight: 700;

          letter-spacing: 0.2em;

          color:
            rgba(255, 255, 255, 0.45);

          text-transform: uppercase;

          margin-bottom: 1rem;
        }

        .ip-cta-title {
          font-family: "Outfit", sans-serif;

          font-size:
            clamp(
              2rem,
              4vw,
              3rem
            );

          font-weight: 800;

          color: #ffffff;

          line-height: 1.18;

          letter-spacing: -0.03em;

          margin: 0;
        }

        .ip-cta-right {
          text-align: right;

          flex-shrink: 0;
        }

        .ip-cta-tagline {
          font-size: 1.05rem;

          font-style: italic;

          color:
            rgba(255, 255, 255, 0.45);

          line-height: 1.7;

          margin: 0;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {

          .ip-sectors-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .ip-ent-name {
            font-size: 2.5rem;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 900px) {

          .ip-page {
            padding-top: 80px;
          }

          .ip-cards-grid {
            grid-template-columns: 1fr;

            max-width: 580px;

            margin: 0 auto;
          }

          .ip-ent-card-muted {
            opacity: 1;
          }

          .ip-stats-bar {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .ip-stat-item:nth-child(2) {
            border-right: none;
          }

          .ip-stat-item:nth-child(3),
          .ip-stat-item:nth-child(4) {
            border-top:
              1px solid
              rgba(255, 255, 255, 0.07);
          }

          .ip-stat-item:nth-child(4) {
            border-right: none;
          }

          .ip-cta-content {
            flex-direction: column;

            text-align: center;
          }

          .ip-cta-right {
            text-align: center;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 640px) {

          .ip-hero {
            min-height: 580px;
          }

          .ip-hero-content {
            padding:
              4rem 1.5rem;
          }

          .ip-hero-title {
            font-size: 2.5rem;
          }

          .ip-hero-sub {
            font-size: 0.95rem;
          }

          .ip-hero-btns {
            flex-direction: column;

            align-items: stretch;
          }

          .ip-btn {
            width: 100%;
          }

          .ip-section {
            padding: 4rem 0;
          }

          .ip-container {
            padding:
              0 1.2rem;
          }

          .ip-sectors-grid {
            grid-template-columns: 1fr;
          }

          .ip-stat-value {
            font-size: 2.2rem;
          }

          .ip-stat-label {
            font-size: 0.7rem;
          }

          .ip-ent-hero {
            height: 250px;
          }

          .ip-ent-hero-text {
            padding:
              2rem;
          }

          .ip-ent-name {
            font-size: 2.3rem;
          }

          .ip-ent-body {
            padding:
              1.5rem;
          }

          .ip-client-row {
            gap: 0.6rem;
          }

          .ip-client-name {
            font-size: 0.95rem;
          }

          .ip-client-sector {
            font-size: 0.72rem;
          }

          .ip-client-count {
            font-size: 0.85rem;

            padding:
              0.25rem 0.6rem;
          }

          .ip-cta-banner {
            padding:
              3.5rem 1.5rem;
          }

          .ip-cta-title {
            font-size: 2rem;
          }

        }

      `}</style>
    </>
  );
}