
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HandshakeManpowerImage from "../assets/handshake_manpower.png";

export default function ServicesPage() {
  const navigate = useNavigate();


  const servicesData = [
    {
      id: "manpower-supply",
      number: "01",
      category: "industrial",
      title: "Manpower Supply",
      desc: "Providing skilled, semi-skilled and unskilled manpower for warehouses, industries, operations and other business needs.",
      image: HandshakeManpowerImage,
      reverse: true,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },

    {
      id: "recruitment-staffing",
      number: "02",
      category: "staffing",
      title: "Recruitment & Staffing",
      tagline: "Precision Talent Sourcing",
      desc: "Sourcing and deploying suitable candidates for different positions across various industries.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
      badge: {
        lines: ["RIGHT", "TALENT", "BRIGHTER", "TOMORROW"],
        position: "top-left",
        type: "stamp"
      },
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          <path d="M7 16a5 5 0 0 1 8 0" />
        </svg>
      )
    },

    {
      id: "contract-workforce-management",
      number: "03",
      category: "staffing",
      title: "Contract Workforce Management",
      tagline: "Agile & Compliant Staffing",
      desc: "End-to-end contract staffing solutions to manage workforce efficiently and seamlessly.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80",
      badge: {
        lines: ["BUILDING", "STRONGER", "BUSINESSES"],
        position: "bottom-right",
        type: "stamp"
      },
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },

    {
      id: "industrial-warehouse-staffing",
      number: "04",
      category: "industrial",
      title: "Industrial & Warehouse Staffing",
      tagline: "Operational Excellence On-Site",
      desc: "Trained and dependable workforce for warehouse, manufacturing, logistics, and industrial operations.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      badge: {
        lines: ["PRECISION", "LOGISTICS", "ON TIME"],
        position: "top-left",
        type: "stamp"
      },
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },

    {
      id: "payroll-compliance-support",
      number: "05",
      category: "compliance",
      title: "Payroll & Compliance Support",
      tagline: "100% Statutory Compliance",
      desc: "Assistance with payroll processing and statutory requirements such as PF and ESI.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86f40?auto=format&fit=crop&w=1600&q=80",
      badge: {
        lines: ["100% AUDIT READY", "ZERO RISK"],
        position: "top-right",
        type: "script"
      },
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },

    {
      id: "facility-support-services",
      number: "06",
      category: "compliance",
      title: "Facility Support Services",
      tagline: "Hygiene & Workplace Care",
      desc: "Workforce support for facility operations, housekeeping, and other on-site requirements.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
      badge: {
        lines: ["HYGIENE", "SAFETY", "FACILITY CARE"],
        position: "top-left",
        type: "stamp"
      },
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    }
  ];

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setModalService(null);

      setInquiryForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        workforceCount: "10-50",
        message: ""
      });
    }, 2500);
  };

  return (
    <>
      {/* =====================================================
          SEO META DATA
      ====================================================== */}

      <Helmet>
        <html lang="en" />

        <title>
          Manpower Supply & Staffing Services | SAI BABU Enterprises
        </title>

        <meta
          name="description"
          content="SAI BABU Enterprises provides manpower supply, recruitment and staffing, contract workforce management, industrial and warehouse staffing, payroll compliance, and facility support services across India."
        />

        <meta
          name="keywords"
          content="manpower supply, manpower supply company, manpower agency, manpower services, recruitment and staffing, contract staffing, workforce management, industrial manpower, warehouse staffing, payroll compliance, PF ESI compliance, facility support services"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="SAI BABU Enterprises"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://saibabuenterprises.com/services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Manpower Supply & Staffing Services | SAI BABU Enterprises"
        />

        <meta
          property="og:description"
          content="Professional manpower supply, recruitment, workforce management, industrial staffing, payroll compliance and facility support services."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://saibabuenterprises.com/services"
        />

        <meta
          property="og:image"
          content="https://saibabuenterprises.com/og-image.jpg"
        />

        <meta
          property="og:site_name"
          content="SAI BABU Enterprises"
        />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Manpower Supply & Staffing Services | SAI BABU Enterprises"
        />

        <meta
          name="twitter:description"
          content="Professional manpower supply and workforce solutions for businesses across India."
        />

        <meta
          name="twitter:image"
          content="https://saibabuenterprises.com/og-image.jpg"
        />
      </Helmet>

      <div className="services-page-container">

        {/* =====================================================
            SERVICES SHOWCASE
        ====================================================== */}

        <section className="services-showcase">
          <div className="services-showcase-header">

            <motion.div
              className="services-header-tag-wrap"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="services-header-tag">
                OUR SERVICES
              </span>

              <motion.div
                className="services-header-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              Manpower Supply & Staffing Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25
              }}
            >
              End-to-end manpower services tailored for every industry need,
              from workforce supply and recruitment to industrial staffing,
              compliance and facility support.
            </motion.p>
          </div>

          <div className="services-diagonal-list">
            {servicesData.map((service, index) => {
              const reverse = service.reverse !== undefined ? service.reverse : (index % 2 !== 0);

              return (
                <motion.div
                  key={service.id}
                  className={`diagonal-service-row ${
                    reverse ? "reverse" : ""
                  }`}
                  initial={{
                    opacity: 0,
                    y: 45
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "0px 0px -40px 0px"
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >

                  {/* Content Panel */}
                  <div className="diagonal-panel-content">

                    <div className="diagonal-card-content">

                      <motion.div
                        className="diagonal-card-number"
                        initial={{
                          opacity: 0,
                          y: -12
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 0.55,
                          delay: 0.15,
                          ease: "easeOut"
                        }}
                      >
                        {service.number}
                      </motion.div>

                      <motion.h2
                        initial={{
                          opacity: 0,
                          y: 16
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 0.55,
                          delay: 0.22,
                          ease: "easeOut"
                        }}
                      >
                        {service.title}
                      </motion.h2>

                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 14
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 0.55,
                          delay: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        {service.desc}
                      </motion.p>

                      <motion.button
                        type="button"
                        className="diagonal-cta-link"
                        onClick={() =>
                          navigate('/contact', { state: { service: service.title } })
                        }
                        initial={{
                          opacity: 0,
                          x: -12
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.38,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          x: 6
                        }}
                      >
                        <span>Learn More</span>

                        <span className="diagonal-cta-circle">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </motion.button>

                    </div>
                  </div>

                  {/* Image Panel */}
                  <div className="diagonal-panel-image">

                    <img
                      src={service.image}
                      alt={`${service.title} services by SAI BABU Enterprises`}
                      className="diagonal-img-cover"
                      style={{
                        objectPosition: service.imagePosition || "center",
                        objectFit: service.imageFit || "cover"
                      }}
                      loading="lazy"
                    />

                    <div className="diagonal-img-overlay" />

                    {service.badge && (
                      <motion.div
                        className={`image-slogan-badge ${service.badge.position} ${service.badge.type}`}
                        initial={{
                          opacity: 0,
                          scale: 0.78,
                          y: -15
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          y: 0
                        }}
                        viewport={{
                          once: true
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.32,
                          type: "spring",
                          stiffness: 130,
                          damping: 13
                        }}
                      >
                        {service.badge.lines.map(
                          (line, i) => (
                            <span key={i}>
                              {line}
                            </span>
                          )
                        )}

                        <motion.div
                          className="slogan-accent-line"
                          initial={{
                            scaleX: 0,
                            originX: 0
                          }}
                          whileInView={{
                            scaleX: 1
                          }}
                          viewport={{
                            once: true
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            WORKFORCE DELIVERY PROCESS
        ====================================================== */}

        <section className="process-workflow-section">
          <div className="container">

            <div className="section-title-center">

              <span className="sub-badge">
                OUR METHODOLOGY
              </span>

              <h2>
                Our 4-Step Workforce Delivery Model
              </h2>

              <p>
                From strategic requirement mapping to
                round-the-clock shift execution, here is how
                we ensure zero operational hiccups.
              </p>

            </div>

            <div className="process-steps-grid">

              <div className="process-step-card">
                <div className="step-number-circle">
                  1
                </div>

                <h3>
                  Requirement Discovery
                </h3>

                <p>
                  We analyze your facility demands, shift
                  schedules, skill matrices, and safety
                  standards to configure exact workforce
                  profiles.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-number-circle">
                  2
                </div>

                <h3>
                  Rigorous Screening
                </h3>

                <p>
                  Multi-layered vetting including
                  Aadhaar/police verification, previous
                  background checks, and physical/technical
                  skills evaluation.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-number-circle">
                  3
                </div>

                <h3>
                  Swift On-Site Deployment
                </h3>

                <p>
                  Rapid mobilization within 24-48 hours
                  complete with induction, safety gear
                  briefing, and dedicated on-site roster
                  supervisors.
                </p>
              </div>

              <div className="process-step-card">
                <div className="step-number-circle">
                  4
                </div>

                <h3>
                  Compliance & Reviews
                </h3>

                <p>
                  Bi-weekly SLA tracking, automated PF/ESI
                  audits, attendance logs, and immediate
                  back-up replacements for 100% operational
                  uptime.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            COMPLIANCE BANNER
        ====================================================== */}

        <section className="compliance-banner-section">
          <div className="container">

            <div className="compliance-box">

              <div className="compliance-content">

                <span className="guarantee-badge">
                  Zero Discrepancy Guarantee
                </span>

                <h2>
                  Total Statutory Protection for Employers
                </h2>

                <p>
                  Operating with non-compliant workforce
                  agencies introduces severe legal, financial,
                  and brand vulnerabilities. At SAI BABU
                  Enterprises, we maintain 100% adherence to
                  all Labor Welfare, Provident Fund (PF), ESIC,
                  and Factory statutory mandates.
                </p>

                <div className="compliance-features">

                  <div className="c-item">
                    <span className="c-icon">
                      🛡️
                    </span>

                    <span>
                      100% PF & ESIC Timely Filings
                    </span>
                  </div>

                  <div className="c-item">
                    <span className="c-icon">
                      📋
                    </span>

                    <span>
                      Transparent Monthly Audit Reports
                    </span>
                  </div>

                  <div className="c-item">
                    <span className="c-icon">
                      ⚖️
                    </span>

                    <span>
                      Full Labor Law Indemnity
                    </span>
                  </div>

                  <div className="c-item">
                    <span className="c-icon">
                      ⚡
                    </span>

                    <span>
                      Zero Statutory Liabilities for Clients
                    </span>
                  </div>

                </div>
              </div>

              <div className="compliance-action">

                <button
                  type="button"
                  className="btn-compliance-audit"
                  onClick={() =>
                    navigate('/contact', { state: { service: "Statutory Compliance & Audit Support" } })
                  }
                >
                  Request Compliance Audit Sample
                </button>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="services-cta-section">
          <div className="container">

            <div className="services-cta-card">

              <div className="cta-left">

                <h2>
                  Ready to Scale Your Workforce?
                </h2>

                <p>
                  Connect with our senior staffing directors
                  today to receive a customized workforce
                  blueprint tailored to your exact facility and
                  timeline.
                </p>

                <div className="cta-contact-pills">

                  <span className="pill-item">
                    📞 +91 98765 43210
                  </span>

                  <span className="pill-item">
                    ✉️ staffing@saibabuenterprises.com
                  </span>

                  <span className="pill-item">
                    📍 Pan-India Operational Support
                  </span>

                </div>
              </div>

              <div className="cta-right">

                <button
                  type="button"
                  className="btn-primary-cta"
                  onClick={() =>
                    navigate('/contact', { state: { service: "General Workforce Inquiry" } })
                  }
                >
                  Get Started Today
                </button>

                <Link
                  to="/"
                  className="btn-secondary-cta"
                >
                  Back to Home
                </Link>

              </div>

            </div>
          </div>
        </section>



        {/* =====================================================
            EXISTING CSS
        ====================================================== */}

        <style>{`

          .services-page-container {
            background-color: #f8fafc;
            min-height: 100vh;
            padding-top: 100px;
            color: #070621;
          }

          .services-hero {
            background: linear-gradient(
              180deg,
              #ffffff 0%,
              #f1f5f9 100%
            );
            padding: 3.5rem 0 4rem 0;
            border-bottom: 1px solid var(--border-color);
            position: relative;
          }

          .breadcrumb-nav {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.88rem;
            margin-bottom: 2rem;
            font-weight: 500;
          }

          .breadcrumb-link {
            color: var(--text-muted);
            transition: color 0.2s ease;
          }

          .breadcrumb-link:hover {
            color: #005ea6;
          }

          .breadcrumb-separator {
            color: #94a3b8;
          }

          .breadcrumb-current {
            color: #005ea6;
            font-weight: 600;
          }

          .services-hero-content {
            max-width: 950px;
            margin: 0 auto;
            text-align: center;
          }

          .badge-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(0, 94, 166, 0.08);
            color: #005ea6;
            padding: 0.4rem 1.1rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(0, 94, 166, 0.2);
          }

          .badge-pulse {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #e31b23;
            box-shadow: 0 0 0 2px rgba(227, 27, 35, 0.2);
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(227, 27, 35, 0.5);
            }

            70% {
              box-shadow: 0 0 0 8px rgba(227, 27, 35, 0);
            }

            100% {
              box-shadow: 0 0 0 0 rgba(227, 27, 35, 0);
            }
          }

          .services-hero-title {
            font-size: 3.2rem;
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.03em;
            color: #070621;
            margin-bottom: 1rem;
          }

          .text-gradient {
            background: linear-gradient(
              135deg,
              #005ea6 0%,
              #002244 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .services-hero-tagline {
            font-size: 1.35rem;
            font-weight: 700;
            color: #005ea6;
            margin-bottom: 0;
            line-height: 1.4;
            font-family: 'Outfit', sans-serif;
          }

          .services-hero-subtext {
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.7;
            max-width: 780px;
            margin: 0 auto 2.5rem auto;
          }

          .hero-metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            background: #ffffff;
            padding: 1.75rem 2rem;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(7, 6, 33, 0.05);
            border: 1px solid var(--border-color);
          }

          .metric-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 1px solid rgba(7, 6, 33, 0.06);
          }

          .metric-box:last-child {
            border-right: none;
          }

          .metric-num {
            font-family: 'Outfit', sans-serif;
            font-size: 2rem;
            font-weight: 800;
            color: #070621;
            letter-spacing: -0.02em;
          }

          .metric-label {
            font-size: 0.82rem;
            font-weight: 500;
            color: var(--text-muted);
            margin-top: 0.25rem;
            text-align: center;
          }

          .services-grid-section {
            padding: 5rem 0;
          }

          .section-header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 3.5rem;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .section-title-wrap {
            max-width: 600px;
          }

          .sub-badge {
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: #e31b23;
            text-transform: uppercase;
            display: block;
            margin-bottom: 0.5rem;
          }

          .section-title-wrap h2 {
            font-size: 2.2rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 0.75rem;
          }

          .section-title-wrap p {
            color: var(--text-secondary);
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .services-showcase {
            background: #ffffff;
            padding: 50px 0 100px;
            overflow: hidden;
          }

          .services-showcase-header {
            text-align: center;
            max-width: 850px;
            margin: 0 auto 60px;
            padding: 0 20px;
          }

          .services-header-tag-wrap {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 12px;
          }

          .services-header-tag {
            color: #005ea6;
            font-size: 0.85rem;
            font-weight: 800;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .services-header-line {
            width: 36px;
            height: 2px;
            background: #005ea6;
            margin-top: 6px;
            border-radius: 2px;
          }

          .services-showcase-header h1 {
            font-size: 2.75rem;
            line-height: 1.2;
            font-weight: 800;
            color: #070621;
            margin: 0 0 14px;
          }

          .services-showcase-header p {
            font-size: 1.05rem;
            color: #64748b;
            margin: 0;
          }

          .services-diagonal-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .diagonal-service-row {
            position: relative;
            width: 100%;
            height: 440px;
            min-height: 440px;
            background: #ffffff;
            overflow: hidden;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-panel-content {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              135deg,
              #005ea6 0%,
              #004782 100%
            );
            color: #ffffff;
            clip-path: polygon(
              0 0,
              calc(53% - 2px) 0,
              calc(43% - 2px) 100%,
              0 100%
            );
            z-index: 2;
            display: flex;
            align-items: center;
            padding-left: max(
              5%,
              calc((100% - 1260px) / 2 + 40px)
            );
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-panel-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            clip-path: polygon(
              calc(53% + 2px) 0,
              100% 0,
              100% 100%,
              calc(43% + 2px) 100%
            );
            z-index: 1;
          }

          .diagonal-service-row.reverse
            .diagonal-panel-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            clip-path: polygon(
              0 0,
              calc(43% - 2px) 0,
              calc(53% - 2px) 100%,
              0 100%
            );
            z-index: 1;
          }

          .diagonal-service-row.reverse
            .diagonal-panel-content {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background: #f8fafc;
            color: #070621;
            clip-path: polygon(
              calc(43% + 2px) 0,
              100% 0,
              100% 100%,
              calc(53% + 2px) 100%
            );
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: max(
              5%,
              calc((100% - 1260px) / 2 + 40px)
            );
          }

          .diagonal-card-content {
            position: relative;
            max-width: 460px;
            width: 100%;
            z-index: 3;
          }

          .diagonal-watermark-number {
            position: absolute;
            font-size: 8.5rem;
            font-weight: 900;
            line-height: 1;
            user-select: none;
            pointer-events: none;
            z-index: 1;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-watermark-number {
            left: max(
              2%,
              calc((100% - 1260px) / 2 - 10px)
            );
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.12);
          }

          .diagonal-service-row.reverse
            .diagonal-watermark-number {
            right: max(
              2%,
              calc((100% - 1260px) / 2 - 10px)
            );
            top: 50%;
            transform: translateY(-50%);
            color: rgba(0, 94, 166, 0.08);
          }

          .diagonal-icon-strip {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 18px;
          }

          .diagonal-icon-box {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .diagonal-icon-box svg {
            width: 32px;
            height: 32px;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-icon-box svg {
            color: #ffffff;
          }

          .diagonal-service-row.reverse
            .diagonal-icon-box svg {
            color: #005ea6;
          }

          .diagonal-icon-line {
            width: 44px;
            height: 2px;
            border-radius: 2px;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-icon-line {
            background: rgba(255, 255, 255, 0.45);
          }

          .diagonal-service-row.reverse
            .diagonal-icon-line {
            background: #005ea6;
            opacity: 0.45;
          }

          .diagonal-card-content h2 {
            font-size: 1.95rem;
            line-height: 1.2;
            font-weight: 700;
            margin: 0 0 14px;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-card-content h2 {
            color: #ffffff;
          }

          .diagonal-service-row.reverse
            .diagonal-card-content h2 {
            color: #070621;
          }

          .diagonal-card-content p {
            font-size: 0.96rem;
            line-height: 1.65;
            margin: 0 0 24px;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-card-content p {
            color: rgba(255, 255, 255, 0.88);
          }

          .diagonal-service-row.reverse
            .diagonal-card-content p {
            color: #64748b;
          }

          .diagonal-cta-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 0.95rem;
            font-weight: 700;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: transform 0.25s ease;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-cta-link {
            color: #ffffff;
          }

          .diagonal-service-row.reverse
            .diagonal-cta-link {
            color: #005ea6;
          }

          .diagonal-cta-link:hover {
            transform: translateX(4px);
          }

          .diagonal-cta-circle {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
              transform 0.25s ease,
              background-color 0.25s ease;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-cta-circle {
            border: 1.5px solid rgba(255, 255, 255, 0.8);
            color: #ffffff;
          }

          .diagonal-service-row:not(.reverse)
            .diagonal-cta-link:hover
            .diagonal-cta-circle {
            background: rgba(255, 255, 255, 0.15);
          }

          .diagonal-service-row.reverse
            .diagonal-cta-circle {
            border: 1.5px solid #005ea6;
            color: #005ea6;
          }

          .diagonal-service-row.reverse
            .diagonal-cta-link:hover
            .diagonal-cta-circle {
            background: rgba(0, 94, 166, 0.08);
          }

          .diagonal-cta-circle svg {
            width: 14px;
            height: 14px;
          }

          .diagonal-img-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .diagonal-img-overlay {
            position: absolute;
            inset: 0;
            background: rgba(7, 6, 33, 0.08);
            pointer-events: none;
          }

          .image-slogan-badge {
            position: absolute;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            pointer-events: none;
            line-height: 1.1;
          }

          .image-slogan-badge.script {
            font-family:
              'Caveat',
              'Permanent Marker',
              cursive;
          }

          .image-slogan-badge.script span {
            font-size: 2.1rem;
            font-weight: 700;
            color: #003e6d;
            text-shadow:
              0 1px 2px rgba(255, 255, 255, 0.9),
              0 0 12px rgba(255, 255, 255, 0.7);
          }

          .image-slogan-badge.stamp {
            font-family:
              'Outfit',
              -apple-system,
              sans-serif;
          }

          .image-slogan-badge.stamp span {
            font-size: 1.35rem;
            font-weight: 900;
            color: #1e293b;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            text-shadow:
              0 1px 3px rgba(255, 255, 255, 0.95);
          }

          .image-slogan-badge.top-right {
            top: 36px;
            right: max(
              6%,
              calc((100% - 1260px) / 2 + 50px)
            );
            transform: rotate(-6deg);
          }

          .image-slogan-badge.top-left {
            top: 36px;
            left: max(
              6%,
              calc((100% - 1260px) / 2 + 50px)
            );
            transform: rotate(4deg);
          }

          .image-slogan-badge.bottom-right {
            bottom: 36px;
            right: max(
              6%,
              calc((100% - 1260px) / 2 + 50px)
            );
            transform: rotate(-3deg);
          }

          .slogan-accent-line {
            width: 80%;
            height: 3.5px;
            background: #005ea6;
            margin-top: 4px;
            border-radius: 4px;
            box-shadow:
              0 2px 6px rgba(0, 94, 166, 0.35);
          }

          .process-workflow-section {
            background: #ffffff;
            padding: 5.5rem 0;
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
          }

          .section-title-center {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 4rem auto;
          }

          .section-title-center h2 {
            font-size: 2.2rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 0.75rem;
          }

          .section-title-center p {
            color: var(--text-secondary);
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .process-steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            position: relative;
          }

          .process-step-card {
            background: #f8fafc;
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 2.25rem 1.75rem;
            text-align: left;
            position: relative;
            transition: transform 0.25s ease;
          }

          .process-step-card:hover {
            transform: translateY(-4px);
          }

          .step-number-circle {
            width: 44px;
            height: 44px;
            background: #070621;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.2rem;
            margin-bottom: 1.25rem;
            box-shadow:
              0 4px 10px rgba(7, 6, 33, 0.2);
          }

          .process-step-card h3 {
            font-size: 1.15rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 0.65rem;
          }

          .process-step-card p {
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          .compliance-banner-section {
            padding: 5rem 0;
          }

          .compliance-box {
            background: linear-gradient(
              135deg,
              #070621 0%,
              #001f3f 100%
            );
            color: #ffffff;
            border-radius: 20px;
            padding: 3.5rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
            align-items: center;
            box-shadow:
              0 20px 50px rgba(7, 6, 33, 0.15);
          }

          .guarantee-badge {
            background: rgba(249, 203, 21, 0.15);
            color: #f9cb15;
            border: 1px solid rgba(249, 203, 21, 0.3);
            font-size: 0.78rem;
            font-weight: 700;
            padding: 0.35rem 0.9rem;
            border-radius: 20px;
            display: inline-block;
            margin-bottom: 1rem;
            letter-spacing: 0.05em;
          }

          .compliance-content h2 {
            color: #ffffff;
            font-size: 2.1rem;
            margin-bottom: 1rem;
          }

          .compliance-content p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.98rem;
            line-height: 1.65;
            margin-bottom: 2rem;
          }

          .compliance-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .c-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.95);
            font-weight: 500;
          }

          .c-icon {
            font-size: 1.2rem;
          }

          .compliance-action {
            display: flex;
            justify-content: center;
          }

          .btn-compliance-audit {
            background: #e31b23;
            color: #ffffff;
            border: none;
            padding: 1rem 1.8rem;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            transition:
              background-color 0.2s ease,
              transform 0.2s ease;
            box-shadow:
              0 6px 20px rgba(227, 27, 35, 0.3);
          }

          .btn-compliance-audit:hover {
            background: #c11219;
            transform: translateY(-2px);
          }

          .services-cta-section {
            padding-bottom: 5rem;
          }

          .services-cta-card {
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 3.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
            box-shadow:
              0 10px 30px rgba(7, 6, 33, 0.05);
          }

          .cta-left {
            max-width: 600px;
          }

          .cta-left h2 {
            font-size: 2.2rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 0.85rem;
          }

          .cta-left p {
            font-size: 1rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .cta-contact-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .pill-item {
            background: #f1f5f9;
            color: #334155;
            font-size: 0.84rem;
            font-weight: 600;
            padding: 0.4rem 0.9rem;
            border-radius: 20px;
          }

          .cta-right {
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
            min-width: 220px;
          }

          .btn-primary-cta {
            background: #005ea6;
            color: #ffffff;
            border: none;
            padding: 1rem 1.75rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition:
              background-color 0.2s ease,
              transform 0.2s ease;
            box-shadow:
              0 6px 18px rgba(0, 94, 166, 0.25);
          }

          .btn-primary-cta:hover {
            background: #004b85;
            transform: translateY(-2px);
          }

          .btn-secondary-cta {
            background: #f8fafc;
            border: 1px solid var(--border-color);
            color: #070621;
            padding: 0.85rem 1.75rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.95rem;
            text-align: center;
            transition: all 0.2s ease;
          }

          .btn-secondary-cta:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
          }

          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(7, 6, 33, 0.6);
            backdrop-filter: blur(6px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 1.5rem;
          }

          .modal-container {
            background: #ffffff;
            border-radius: 18px;
            max-width: 580px;
            width: 100%;
            padding: 2.5rem;
            position: relative;
            box-shadow:
              0 25px 60px rgba(7, 6, 33, 0.2);
            max-height: 90vh;
            overflow-y: auto;
          }

          .modal-close-btn {
            position: absolute;
            top: 1.25rem;
            right: 1.25rem;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background: #f8fafc;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #64748b;
            transition: all 0.2s ease;
          }

          .modal-close-btn:hover {
            background: #e2e8f0;
            color: #070621;
          }

          .modal-header {
            margin-bottom: 1.75rem;
          }

          .modal-pre {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #005ea6;
            font-weight: 700;
            display: block;
            margin-bottom: 0.25rem;
          }

          .modal-title {
            font-size: 1.6rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 0.4rem;
          }

          .modal-desc {
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          .modal-form {
            display: flex;
            flex-direction: column;
            gap: 1.15rem;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
          }

          .form-group label {
            font-size: 0.82rem;
            font-weight: 600;
            color: #334155;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            padding: 0.7rem 0.9rem;
            font-size: 0.9rem;
            font-family: inherit;
            color: #070621;
            background: #ffffff;
            outline: none;
            transition:
              border-color 0.2s ease,
              box-shadow 0.2s ease;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            border-color: #005ea6;
            box-shadow:
              0 0 0 3px rgba(0, 94, 166, 0.12);
          }

          .btn-submit-inquiry {
            background: #005ea6;
            color: #ffffff;
            border: none;
            padding: 0.9rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
            margin-top: 0.5rem;
          }

          .btn-submit-inquiry:hover {
            background: #004b85;
          }

          .inquiry-success-message {
            text-align: center;
            padding: 2rem 1rem;
          }

          .success-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(34, 197, 94, 0.15);
            color: #16a34a;
            font-size: 1.8rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.25rem auto;
          }

          .inquiry-success-message h3 {
            font-size: 1.4rem;
            color: #070621;
            margin-bottom: 0.5rem;
          }

          .inquiry-success-message p {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          @media (prefers-reduced-motion: reduce) {
            .diagonal-service-image,
            .service-image-placeholder,
            .diagonal-learn-btn,
            .diagonal-learn-btn span {
              transition: none !important;
            }
          }

          @media (max-width: 1100px) {

            .services-cards-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .process-steps-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .hero-metrics-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }

            .metric-box:nth-child(2) {
              border-right: none;
            }
          }

          @media (max-width: 900px) {

            .services-showcase {
              padding: 60px 0;
            }

            .services-showcase-header {
              margin-bottom: 45px;
            }

            .services-showcase-header h1 {
              font-size: 2.1rem;
            }

            .services-diagonal-list {
              gap: 18px;
            }

            .diagonal-service-row {
              height: auto;
              min-height: auto;
              display: flex;
              flex-direction: column;
              border-radius: 16px;
              box-shadow:
                0 10px 30px rgba(7, 6, 33, 0.08);
            }

            .diagonal-service-row:not(.reverse)
              .diagonal-panel-content,
            .diagonal-service-row.reverse
              .diagonal-panel-content {
              position: relative;
              inset: auto;
              width: 100%;
              clip-path: none !important;
              padding: 45px 24px;
              justify-content: flex-start;
            }

            .diagonal-service-row:not(.reverse)
              .diagonal-panel-image,
            .diagonal-service-row.reverse
              .diagonal-panel-image {
              position: relative;
              inset: auto;
              width: 100%;
              height: 280px;
              clip-path: none !important;
            }

            .diagonal-service-row.reverse
              .diagonal-panel-image {
              order: 2;
            }

            .diagonal-service-row.reverse
              .diagonal-panel-content {
              order: 1;
            }

            .diagonal-watermark-number {
              font-size: 5.5rem;
              top: 20px;
              transform: none;
            }

            .diagonal-service-row:not(.reverse)
              .diagonal-watermark-number {
              left: 20px;
            }

            .diagonal-service-row.reverse
              .diagonal-watermark-number {
              right: 20px;
            }

            .diagonal-card-content h2 {
              font-size: 1.6rem;
            }

            .image-slogan-badge.top-right,
            .image-slogan-badge.top-left,
            .image-slogan-badge.bottom-right {
              top: 20px;
              right: 20px;
              left: auto;
              bottom: auto;
            }
          }

          @media (max-width: 600px) {

            .services-page-container {
              padding-top: 80px;
            }

            .services-hero-title {
              font-size: 2.3rem;
            }

            .services-hero-tagline {
              font-size: 1.15rem;
            }

            .services-cards-grid {
              grid-template-columns: 1fr;
            }

            .process-steps-grid {
              grid-template-columns: 1fr;
            }

            .compliance-box {
              grid-template-columns: 1fr;
              padding: 2rem;
            }

            .compliance-features {
              grid-template-columns: 1fr;
            }

            .services-cta-card {
              flex-direction: column;
              padding: 2.25rem;
              text-align: center;
            }

            .cta-contact-pills {
              justify-content: center;
            }

            .form-row {
              grid-template-columns: 1fr;
            }
          }

        `}</style>
      </div>
    </>
  );
}
