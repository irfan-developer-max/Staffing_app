import  { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import LogisticsImg from "../assets/logistics_about.png";
import RecruitmentImg from "../assets/recruitment_about.png";
import WorkforceImg from "../assets/workforce_about.png";
import TrainingImg from "../assets/training_about.png";
import AboutHeroTeamImg from "../assets/about_hero_team.jpg";
import JourneyMountainImg from "../assets/journey_mountain_road.jpg";

export default function AboutPage() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  const coreValues = [
    {
      title: "Reliability",
      desc: "We take responsibility for delivering dependable workforce solutions.",
      tag: "Dependable Service",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Integrity",
      desc: "We believe in transparent and professional business practices.",
      tag: "Ethical & Transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m4.93 4.93 14.14 14.14"/>
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10"/>
        </svg>
      )
    },
    {
      title: "Quality",
      desc: "We focus on matching workforce capabilities with client requirements.",
      tag: "Precision Fit",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )
    },
    {
      title: "Commitment",
      desc: "We build relationships through consistent service and support.",
      tag: "Long-term Synergy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      title: "Growth",
      desc: "We aim to create opportunities for both businesses and job seekers.",
      tag: "Mutual Prosperity",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 17 6-6 4 4 8-8"/>
          <path d="M14 7h6v6"/>
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Our Inception",
      description: "Started operations with a determined mission to deliver reliable manpower services, transparent operations, and rapid industrial deployment."
    },
    {
      year: "2018",
      title: "Industrial & Warehouse Specialization",
      description: "Expanded our operational footprints across logistics hubs, manufacturing zones, and high-velocity warehousing facilities."
    },
    {
      year: "2021",
      title: "Dual Enterprise Synergy",
      description: "Consolidated operations into Saibabu Enterprises and Rudhrasri Enterprises to provide focused, high-compliance contract workforce management."
    },
    {
      year: "Today",
      title: "Trusted Workforce Partner",
      description: "Serving diverse businesses with hundreds of deployed workers, 100% statutory compliance, and a sterling reputation for workforce dependability."
    }
  ];

  const expertiseList = [
    {
      title: "Manpower Supply",
      desc: "Providing skilled, semi-skilled, and general workforce personnel for diverse industry operations.",
      img: LogisticsImg
    },
    {
      title: "Recruitment & Staffing",
      desc: "Strategic talent acquisition and role-specific candidate sourcing matched to operational needs.",
      img: RecruitmentImg
    },
    {
      title: "Contract Workforce Management",
      desc: "End-to-end contractual administration, payroll processing, and statutory compliance.",
      img: WorkforceImg
    },
    {
      title: "Industrial & Warehouse Staffing",
      desc: "High-capacity on-site staffing for logistics centers, assembly units, and inventory hubs.",
      img: TrainingImg
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Understand Requirements",
      desc: "We analyze your operational scale, job specifications, shift timings, and specialized skill requirements to create a customized workforce blueprint."
    },
    {
      step: "02",
      title: "Identify the Right Workforce",
      desc: "Through rigorous screening, verification, and capability checks, we assemble the ideal workforce tailored precisely to your company's operational culture."
    },
    {
      step: "03",
      title: "Ensure Deployment & Support",
      desc: "We handle smooth on-site mobilization, regulatory onboarding, and deliver ongoing supervisory and management support to guarantee seamless continuity."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>About Us | Saibabu Enterprises & Rudhrasri Enterprises</title>
        <meta
          name="description"
          content="Established workforce and manpower service providers since 2016. Saibabu Enterprises and Rudhrasri Enterprises deliver reliable manpower supply, contract workforce management, and staffing solutions."
        />
        <meta
          name="keywords"
          content="Saibabu Enterprises, Rudhrasri Enterprises, workforce solutions, manpower service providers since 2016, manpower supply, recruitment, contract workforce management, industrial staffing, warehouse staffing"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://saibabuenterprises.com/about" />
        <meta property="og:title" content="About Us | Saibabu Enterprises & Rudhrasri Enterprises" />
        <meta
          property="og:description"
          content="Empowering Businesses Through Reliable Workforce Solutions. People. Opportunities. Progress."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="about-page-container">
        {/* =====================================================
            ABOUT SHOWCASE HERO BANNER (Full Screen Hero)
        ====================================================== */}
        <section className="about-showcase-section">
          <div className="about-showcase-card">
            {/* Top Left Breadcrumbs Bar */}
            <div className="showcase-top-bar">
              <div className="breadcrumb-nav">
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-sep">/</span>
                <span className="breadcrumb-current">About Us</span>
              </div>
            </div>

            <div className="showcase-card-grid">
              {/* Left Content */}
              <div className="showcase-left-content">
                <div className="showcase-kicker-row">
                  <span className="showcase-kicker-title">ABOUT US</span>
                  <span className="showcase-kicker-bar"></span>
                </div>

                <h1 className="showcase-main-title">
                  Empowering Businesses Through <span className="highlight-red-text">Reliable Workforce</span> Solutions
                </h1>

                <p className="showcase-intro-paragraph">
                  Saibabu Enterprises and Rudhrasri Enterprises are established workforce and manpower service providers, serving businesses since 2016.
                </p>

                <div className="showcase-button-row">
                  <Link to="/services" className="btn-showcase-learn-more">
                    Learn More About Us <span className="btn-arrow-symbol">&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Floating Handwritten Script Slogan */}
              <div className="showcase-script-badge">
                <div className="script-text-stack">
                  <span className="script-word">People</span>
                  <span className="script-word">Opportunities</span>
                  <span className="script-word">Progress</span>
                </div>
                <div className="script-red-dash"></div>
              </div>

              {/* Right Visual Montage */}
              <div className="showcase-right-visual">
                {/* Team Photo */}
                <img
                  src={AboutHeroTeamImg}
                  alt="Workforce Team - Saibabu Enterprises & Rudhrasri Enterprises"
                  className="showcase-team-photo"
                />
                <div className="showcase-photo-gradient-mask"></div>
              </div>
            </div>

            {/* Bottom 4-Item Statistics Strip */}
            <div className="showcase-stats-row">
              <div className="showcase-stat-pill">
                <div className="stat-pill-icon-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#005ea6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className="stat-pill-data">
                  <span className="stat-pill-value">2016</span>
                  <span className="stat-pill-description">Established In</span>
                </div>
              </div>

              <div className="showcase-stat-pill">
                <div className="stat-pill-icon-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#005ea6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="stat-pill-data">
                  <span className="stat-pill-value">2</span>
                  <span className="stat-pill-description">Sister Enterprises</span>
                </div>
              </div>

              <div className="showcase-stat-pill">
                <div className="stat-pill-icon-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#005ea6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div className="stat-pill-data">
                  <span className="stat-pill-value">100%</span>
                  <span className="stat-pill-description">Statutory Compliance</span>
                </div>
              </div>

              <div className="showcase-stat-pill">
                <div className="stat-pill-icon-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#005ea6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <div className="stat-pill-data">
                  <span className="stat-pill-value">6+</span>
                  <span className="stat-pill-description">Specializations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ONE COMMITMENT. TWO ENTERPRISES (FLAGSHIP SECTION)
        ====================================================== */}
        <section className="two-enterprises-section">
          <div className="container">
            <motion.div
              className="section-header-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-pill-tag">ORGANIZATIONAL SYNERGY</span>
              <h2 className="section-main-heading">One Commitment. Two Enterprises.</h2>
              <p className="section-subtext">
                Saibabu Enterprises and Rudhrasri Enterprises are two established business entities working with a common goal — connecting businesses with the right workforce and creating opportunities for people.
              </p>
            </motion.div>

            <div className="synergy-grid">
              {/* Entity 1 */}
              <motion.div
                className="entity-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="entity-badge">ENTITY 01</div>
                <h3 className="entity-name">Saibabu Enterprises</h3>
                <p className="entity-role">Strategic Manpower Supply & Deployment Powerhouse</p>
                <p className="entity-desc">
                  Providing enterprise-grade manpower supply, industrial staffing, and rapid operational deployment for supply chains, logistics, and large-scale industrial complexes.
                </p>
                <ul className="entity-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Skilled & Semi-Skilled Manpower Supply
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Logistics & Warehouse Operations
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Rapid Shift & Seasonal Deployment
                  </li>
                </ul>
              </motion.div>

              {/* Center Synergy Emblem */}
              <div className="synergy-nexus">
                <div className="nexus-circle">
                  <span className="nexus-plus">+</span>
                </div>
                <div className="nexus-tagline">
                  <span>People.</span>
                  <span>Opportunities.</span>
                  <span>Progress.</span>
                </div>
              </div>

              {/* Entity 2 */}
              <motion.div
                className="entity-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="entity-badge">ENTITY 02</div>
                <h3 className="entity-name">Rudhrasri Enterprises</h3>
                <p className="entity-role">Contract Workforce & Recruitment Specialist</p>
                <p className="entity-desc">
                  Specializing in end-to-end contract workforce administration, full regulatory and statutory compliance, customized recruitment, and talent sourcing.
                </p>
                <ul className="entity-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Contract Workforce Management
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Recruitment & Cross-Industry Staffing
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    End-to-End Payroll & Compliance
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION & VISION SECTION
        ====================================================== */}
        <section className="mission-vision-section">
          <div className="container">
            <div className="mission-vision-grid">
              {/* Mission Card */}
              <motion.div
                className="mv-card mission-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mv-card-header">
                  <div className="mv-icon-box mission-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <span className="mv-badge">CORE PURPOSE</span>
                    <h3 className="mv-title">Our Mission</h3>
                  </div>
                </div>

                <div className="mv-quote-wrapper">
                  <span className="quote-mark">&ldquo;</span>
                  <blockquote className="mv-quote-text">
                    To provide reliable and efficient workforce solutions that help businesses operate smoothly while creating meaningful employment opportunities for individuals.
                  </blockquote>
                </div>

                <div className="mv-card-footer">
                  <span className="mv-highlight-pill">Operational Smoothness & Meaningful Jobs</span>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                className="mv-card vision-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="mv-card-header">
                  <div className="mv-icon-box vision-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="mv-badge">FUTURE HORIZON</span>
                    <h3 className="mv-title">Our Vision</h3>
                  </div>
                </div>

                <div className="mv-quote-wrapper">
                  <span className="quote-mark">&ldquo;</span>
                  <blockquote className="mv-quote-text">
                    To become a trusted workforce solutions partner for businesses by delivering dependable manpower, professional service, and sustainable employment opportunities.
                  </blockquote>
                </div>

                <div className="mv-card-footer">
                  <span className="mv-highlight-pill">Trust, Dependability & Sustainability</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR APPROACH (3-STEP METHODOLOGY)
        ====================================================== */}
        <section className="approach-section">
          <div className="container">
            <motion.div
              className="section-header-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-pill-tag">HOW WE OPERATE</span>
              <h2 className="section-main-heading">Our Simple, Systematic Approach</h2>
              <p className="section-subtext">
                Our approach is simple: understand our clients&apos; requirements, identify the right workforce, and ensure reliable deployment and ongoing support.
              </p>
            </motion.div>

            <div className="approach-steps-grid">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="step-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="step-number-bubble">{item.step}</div>
                  <h3 className="step-card-title">{item.title}</h3>
                  <p className="step-card-desc">{item.desc}</p>
                  <div className="step-bottom-line"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE VALUES SECTION
        ====================================================== */}
        <section className="core-values-section">
          <div className="container">
            <motion.div
              className="section-header-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-pill-tag">FOUNDATIONAL PILLARS</span>
              <h2 className="section-main-heading">Our Core Values</h2>
              <p className="section-subtext">
                The guiding principles that shape every partnership, deployment, and workforce engagement we undertake.
              </p>
            </motion.div>

            <div className="values-grid">
              {coreValues.map((val, idx) => (
                <motion.div
                  key={val.title}
                  className={`value-card ${activeValueIndex === idx ? "active-value-card" : ""}`}
                  onMouseEnter={() => setActiveValueIndex(idx)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                >
                  <div className="value-icon-circle">{val.icon}</div>
                  <div className="value-tag">{val.tag}</div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                  <div className="value-card-highlight"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR JOURNEY SECTION
        ====================================================== */}
        <section className="journey-showcase-section">
          {/* Full-width Background Banner Image */}
          <div className="journey-banner-image-wrap">
            <img
              src={JourneyMountainImg}
              alt="Our Journey - Mountain Road"
              className="journey-banner-img"
            />
            <div className="journey-banner-overlay">
              <div className="journey-banner-text-block">
                <span className="journey-banner-kicker">OUR JOURNEY</span>
                <h2 className="journey-banner-heading">
                  A Journey of Trust,{" "}
                  <span className="highlight-red-text">People and Progress</span>
                </h2>
                <p className="journey-banner-sub">
                  Saibabu Enterprises &amp; Rudhrasri Enterprises — Serving businesses since 2016.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="journey-body">
            <div className="container">
              <div className="journey-two-col">

                {/* Left: About Text */}
                <div className="journey-left-panel">
                  <span className="journey-left-kicker">WHO WE ARE</span>
                  <h3 className="journey-left-title">
                    Two Enterprises. <span className="highlight-red-text">One Commitment.</span>
                  </h3>
                  <p className="journey-left-lead">
                    Established in 2016, Saibabu Enterprises and Rudhrasri Enterprises have grown into trusted names in workforce and manpower solutions across India.
                  </p>
                  <p className="journey-left-para">
                    We specialise in end-to-end manpower supply, contractual staffing, recruitment and workforce deployment — serving warehouses, manufacturing units, logistics hubs and corporate offices.
                  </p>
                  <div className="journey-tagline-badge">
                    <span className="journey-red-dot"></span>
                    <span className="journey-tagline-label">PEOPLE . OPPORTUNITIES . PROGRESS</span>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-journey-primary"
                  >
                    Know Our Story <span className="btn-arrow-symbol">&rarr;</span>
                  </Link>
                </div>

{/* Right: Timeline Milestones */}
                 <div className="journey-right-panel">
                   <div className="journey-timeline-wrap">
                     <div className="journey-timeline-line"></div>

                     {milestones.map((milestone, index) => {
                       // Define dot colors based on index
                       const dotColors = ['dot-blue', 'dot-red', 'dot-navy', 'dot-blue'];
                       const dotColor = dotColors[index] || 'dot-blue';
                       
                       return (
                         <div key={milestone.year} className="journey-timeline-item">
                           <div className={`journey-timeline-dot ${dotColor}`}></div>
                           <div className="journey-timeline-card">
                             <span className="journey-timeline-year">{milestone.year}</span>
                             <h4 className="journey-timeline-title">{milestone.title}</h4>
                             <p className="journey-timeline-desc">
                               {milestone.description}
                             </p>
                           </div>
                         </div>
                       );
                     })}

                   </div>
                 </div>

              </div>

              {/* Bottom Stats Strip */}
              <div className="journey-stats-strip">
                <div className="journey-stat-item">
                  <span className="journey-stat-value">2016</span>
                  <span className="journey-stat-label">Established In</span>
                  <span className="journey-stat-sub">A decade of trust &amp; reliability</span>
                </div>
                <div className="journey-stat-divider"></div>
                <div className="journey-stat-item">
                  <span className="journey-stat-value">2</span>
                  <span className="journey-stat-label">Sister Enterprises</span>
                  <span className="journey-stat-sub">Working in unison</span>
                </div>
                <div className="journey-stat-divider"></div>
                <div className="journey-stat-item">
                  <span className="journey-stat-value">100%</span>
                  <span className="journey-stat-label">Statutory Compliance</span>
                  <span className="journey-stat-sub">PF, ESI &amp; Labour Standards</span>
                </div>
                <div className="journey-stat-divider"></div>
                <div className="journey-stat-item">
                  <span className="journey-stat-value">6+</span>
                  <span className="journey-stat-label">Specializations</span>
                  <span className="journey-stat-sub">End-to-end manpower solutions</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            AREAS OF EXPERTISE
        ====================================================== */}
        <section className="expertise-overview-section">
          <div className="container">
            <motion.div
              className="section-header-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-pill-tag">WHAT WE EXCEL AT</span>
              <h2 className="section-main-heading">Developed Expertise Across Core Domains</h2>
              <p className="section-subtext">
                Specialized workforce capabilities built to support warehouses, production units, and corporate operational demands.
              </p>
            </motion.div>

            <div className="expertise-cards-grid">
              {expertiseList.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="expertise-image-wrap">
                    <img src={exp.img} alt={exp.title} className="expertise-img" />
                    <div className="expertise-img-gradient"></div>
                  </div>
                  <div className="expertise-info">
                    <h3 className="expertise-card-title">{exp.title}</h3>
                    <p className="expertise-card-desc">{exp.desc}</p>
                    <Link to="/services" className="expertise-link">
                      Learn More
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CALL TO ACTION SECTION
        ====================================================== */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-card">
              <div className="cta-content-side">
                <span className="cta-pretitle">READY TO COLLABORATE?</span>
                <h2 className="cta-headline">
                  Let&apos;s Build a Dependable Workforce Together
                </h2>
                <p className="cta-subheading">
                  Whether you require industrial manpower, contract staffing, or recruitment solutions, Saibabu Enterprises and Rudhrasri Enterprises are ready to deploy.
                </p>
                <div className="cta-points-row">
                  <div className="cta-point-item">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>100% Compliant</span>
                  </div>
                  <div className="cta-point-item">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Rapid Mobilization</span>
                  </div>
                  <div className="cta-point-item">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Dedicated Support</span>
                  </div>
                </div>
              </div>

              <div className="cta-action-side">
                <Link
                  to="/contact"
                  className="btn-cta-primary"
                >
                  Contact Our Team
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link to="/services" className="btn-cta-ghost">
                  Explore Full Services
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            STYLES FOR ABOUT PAGE
        ====================================================== */}
        <style>{`
          .about-page-container {
            background-color: #f8fafc;
            color: #070621;
            min-height: 100vh;
            padding-top: 100px;
            font-family: 'Inter', sans-serif;
          }

          /* Utility Container */
          .about-page-container .container {
            max-width: 1320px;
            margin: 0 auto;
            padding: 0 24px;
          }

          /* Breadcrumbs */
          .breadcrumb-nav {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.88rem;
            color: #64748b;
            margin-bottom: 24px;
            font-weight: 500;
          }

          .breadcrumb-link {
            color: #64748b;
            transition: color 0.2s ease;
          }

          .breadcrumb-link:hover {
            color: #e31b23;
          }

          .breadcrumb-sep {
            color: #cbd5e1;
          }

          .breadcrumb-current {
            color: #070621;
            font-weight: 600;
          }

          /* =====================================================
             ABOUT SHOWCASE HERO BANNER (Full Screen Hero)
          ====================================================== */
          .about-showcase-section {
            padding: 0;
            background-color: #ffffff;
            width: 100%;
            overflow: hidden;
            position: relative;
            border-bottom: 1px solid rgba(7, 6, 33, 0.08);
          }

          .about-showcase-card {
            background: #ffffff;
            border-radius: 0;
            box-shadow: none;
            border: none;
            overflow: hidden;
            position: relative;
            width: 100%;
            min-height: calc(100vh - 100px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          /* Top Breadcrumbs Bar */
          .showcase-top-bar {
            width: 100%;
            padding: 24px 48px 0;
            z-index: 10;
          }

          .showcase-top-bar .breadcrumb-nav {
            margin-bottom: 0;
          }

          .showcase-card-grid {
            display: grid;
            grid-template-columns: 52% 48%;
            flex: 1;
            min-height: 520px;
            position: relative;
            width: 100%;
            align-items: stretch;
          }

          /* Left Content */
          .showcase-left-content {
            padding: 24px 48px 36px 48px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: stretch;
            z-index: 5;
            position: relative;
          }

          .showcase-kicker-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 18px;
          }

          .showcase-kicker-title {
            font-size: 0.9rem;
            font-weight: 800;
            color: #005ea6;
            letter-spacing: 0.12em;
          }

          .showcase-kicker-bar {
            width: 40px;
            height: 2.5px;
            background: #ffde59;
            border-radius: 2px;
          }

          .showcase-main-title {
            font-family: 'Outfit', sans-serif;
            font-size: clamp(2.3rem, 3.4vw, 3.4rem);
            font-weight: 800;
            color: #070621;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 20px;
            max-width: 600px;
          }

          .highlight-red-text {
            color: #005ea6;
          }

          .showcase-intro-paragraph {
            font-size: 1.05rem;
            line-height: 1.65;
            color: #475569;
            margin-bottom: 32px;
            max-width: 520px;
          }

          .showcase-button-row {
            display: flex;
            align-items: center;
          }

          .btn-showcase-learn-more {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #005ea6;
            color: #ffffff;
            padding: 14px 30px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.96rem;
            box-shadow: 0 8px 20px -4px rgba(0, 94, 166, 0.4);
            transition: all 0.25s ease;
            text-decoration: none;
          }

          .btn-showcase-learn-more:hover {
            background: #004b87;
            transform: translateY(-2px);
            box-shadow: 0 12px 24px -4px rgba(0, 94, 166, 0.5);
          }

          .btn-arrow-symbol {
            font-size: 1.15rem;
            transition: transform 0.2s ease;
          }

          .btn-showcase-learn-more:hover .btn-arrow-symbol {
            transform: translateX(4px);
          }

          /* Floating Handwritten Script Slogan */
          .showcase-script-badge {
            position: absolute;
            left: 47%;
            top: 18%;
            transform: rotate(-10deg);
            z-index: 6;
            pointer-events: none;
          }

          .script-text-stack {
            display: flex;
            flex-direction: column;
            font-family: 'Caveat', cursive, sans-serif;
            font-size: clamp(2rem, 2.6vw, 2.8rem);
            font-weight: 700;
            color: #1e3a5f;
            line-height: 1.05;
            text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
          }

          .script-red-dash {
            width: 38px;
            height: 3px;
            background: #ffde59;
            margin-top: 10px;
            margin-left: 6px;
            border-radius: 2px;
          }

          /* Right Visual Montage */
          .showcase-right-visual {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
            min-height: 480px;
            align-self: stretch;
          }

          .showcase-team-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 20%;
            display: block;
          }

          .showcase-photo-gradient-mask {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.96) 8%, rgba(255, 255, 255, 0.2) 30%, transparent 55%);
            pointer-events: none;
            z-index: 2;
          }

          /* Top Right Diagonal Slashes */
          .slash-shape-navy {
            position: absolute;
            top: -80px;
            right: -30px;
            width: 180px;
            height: 640px;
            background: #002d54;
            transform: rotate(35deg);
            z-index: 3;
            pointer-events: none;
          }

          .slash-shape-red {
            position: absolute;
            top: -80px;
            right: 140px;
            width: 48px;
            height: 640px;
            background: #005ea6;
            transform: rotate(35deg);
            z-index: 3;
            pointer-events: none;
          }

          .showcase-stamp-container {
            position: absolute;
            top: 32px;
            right: 32px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 2px;
            z-index: 4;
            text-align: right;
            pointer-events: none;
          }

          .stamp-word {
            font-size: 0.72rem;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: 0.15em;
            line-height: 1.35;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
          }

          .stamp-dash-line {
            width: 28px;
            height: 2.5px;
            background: #ffde59;
            margin-top: 6px;
          }

          /* Bottom Stats Row */
          .showcase-stats-row {
            background: #ffffff;
            border-top: 1px solid rgba(7, 6, 33, 0.08);
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            padding: 24px 48px;
            gap: 32px;
            align-items: center;
            width: 100%;
          }

          .showcase-stat-pill {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .stat-pill-icon-circle {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            background: rgba(0, 94, 166, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .stat-pill-data {
            display: flex;
            flex-direction: column;
          }

          .stat-pill-value {
            font-family: 'Outfit', sans-serif;
            font-size: 1.85rem;
            font-weight: 800;
            color: #070621;
            line-height: 1.1;
          }

          .stat-pill-description {
            font-size: 0.85rem;
            font-weight: 600;
            color: #64748b;
            margin-top: 2px;
          }

          /* Responsive Rules for Showcase */
          @media (max-width: 1200px) {
            .showcase-script-badge {
              display: none;
            }
          }

          @media (max-width: 1024px) {
            .about-showcase-card {
              min-height: auto;
            }
            .showcase-top-bar {
              padding: 20px 1.5rem 0;
            }
            .showcase-card-grid {
              grid-template-columns: 1fr;
            }
            .showcase-left-content {
              padding: 1.5rem 1.5rem 2rem;
            }
            .showcase-right-visual {
              height: 380px;
              min-height: 380px;
            }
            .showcase-photo-gradient-mask {
              background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 15%, transparent 50%);
            }
            .showcase-stats-row {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              padding: 24px 1.5rem;
            }
          }

          @media (max-width: 640px) {
            .showcase-main-title {
              font-size: 2rem;
            }
            .showcase-stats-row {
              grid-template-columns: repeat(4, 1fr);
              gap: 8px;
              padding: 20px 1rem;
              align-items: flex-start;
            }
            .showcase-stat-pill {
              flex-direction: column;
              gap: 6px;
              text-align: center;
            }
            .stat-pill-icon-circle {
              width: 38px;
              height: 38px;
            }
            .stat-pill-icon-circle svg {
              width: 18px;
              height: 18px;
            }
            .stat-pill-value {
              font-size: 1.15rem;
            }
            .stat-pill-description {
              font-size: 0.65rem;
            }
            .slash-shape-navy,
            .slash-shape-red {
              display: none;
            }
            .showcase-stamp-container {
              display: none;
            }
          }

          /* Section Generic Headers */
          .section-header-center {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 50px;
          }

          .section-pill-tag {
            display: inline-block;
            font-size: 0.76rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            color: #005ea6;
            background: rgba(0, 94, 166, 0.08);
            padding: 4px 12px;
            border-radius: 9999px;
            margin-bottom: 12px;
            text-transform: uppercase;
          }

          .section-main-heading {
            font-size: 2.3rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 14px;
            letter-spacing: -0.02em;
          }

          .section-subtext {
            font-size: 1.05rem;
            color: #475569;
            line-height: 1.6;
          }

          /* ONE COMMITMENT. TWO ENTERPRISES SECTION */
          .two-enterprises-section {
            padding: 90px 0;
            background: #ffffff;
            border-bottom: 1px solid rgba(7, 6, 33, 0.06);
          }

          .synergy-grid {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 30px;
            align-items: stretch;
          }

          .entity-card {
            background: #f8fafc;
            border: 1px solid rgba(7, 6, 33, 0.08);
            border-radius: 18px;
            padding: 36px 32px;
            display: flex;
            flex-direction: column;
            position: relative;
            transition: all 0.3s ease;
          }

          .entity-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px -8px rgba(7, 6, 33, 0.08);
            border-color: rgba(227, 27, 35, 0.3);
          }

          .entity-badge {
            font-size: 0.72rem;
            font-weight: 700;
            color: #e31b23;
            letter-spacing: 0.08em;
            margin-bottom: 12px;
          }

          .entity-name {
            font-size: 1.75rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 8px;
          }

          .entity-role {
            font-size: 0.92rem;
            font-weight: 600;
            color: #3b82f6;
            margin-bottom: 16px;
          }

          .entity-desc {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #475569;
            margin-bottom: 24px;
          }

          .entity-features-list {
            list-style: none;
            padding: 0;
            margin: auto 0 0 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .entity-features-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
            font-weight: 500;
            color: #1e293b;
          }

          .synergy-nexus {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 10px 0;
          }

          .nexus-circle {
            width: 52px;
            height: 52px;
            background: #070621;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(7, 6, 33, 0.2);
          }

          .nexus-plus {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1;
          }

          .nexus-tagline {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            font-weight: 800;
            font-size: 0.8rem;
            letter-spacing: 0.05em;
            color: #e31b23;
            text-transform: uppercase;
            text-align: center;
          }

          /* MISSION & VISION SECTION */
          .mission-vision-section {
            padding: 90px 0;
            background: #f1f5f9;
          }

          .mission-vision-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .mv-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 40px;
            border: 1px solid rgba(7, 6, 33, 0.08);
            box-shadow: 0 10px 30px -10px rgba(7, 6, 33, 0.05);
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .mv-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 36px -10px rgba(7, 6, 33, 0.1);
          }

          .mission-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #2563eb, #3b82f6);
          }

          .vision-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #e31b23, #f97316);
          }

          .mv-card-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
          }

          .mv-icon-box {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .mission-icon {
            background: rgba(37, 99, 235, 0.1);
            color: #2563eb;
          }

          .vision-icon {
            background: rgba(227, 27, 35, 0.1);
            color: #e31b23;
          }

          .mv-badge {
            font-size: 0.72rem;
            font-weight: 700;
            color: #64748b;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            display: block;
            margin-bottom: 4px;
          }

          .mv-title {
            font-size: 1.6rem;
            font-weight: 800;
            color: #070621;
            margin: 0;
          }

          .mv-quote-wrapper {
            position: relative;
            margin-bottom: 28px;
            padding-left: 12px;
          }

          .quote-mark {
            position: absolute;
            top: -20px;
            left: -12px;
            font-size: 4rem;
            font-family: serif;
            color: rgba(7, 6, 33, 0.07);
            line-height: 1;
            pointer-events: none;
          }

          .mv-quote-text {
            font-size: 1.12rem;
            line-height: 1.65;
            color: #1e293b;
            font-style: italic;
            font-weight: 500;
            margin: 0;
            position: relative;
            z-index: 1;
          }

          .mv-card-footer {
            margin-top: auto;
            border-top: 1px solid rgba(7, 6, 33, 0.06);
            padding-top: 18px;
          }

          .mv-highlight-pill {
            font-size: 0.78rem;
            font-weight: 600;
            color: #475569;
            background: #f8fafc;
            padding: 6px 14px;
            border-radius: 9999px;
            border: 1px solid rgba(7, 6, 33, 0.06);
            display: inline-block;
          }

          /* OUR APPROACH SECTION */
          .approach-section {
            padding: 90px 0;
            background: #ffffff;
          }

          .approach-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          .step-card {
            background: #f8fafc;
            border: 1px solid rgba(7, 6, 33, 0.08);
            border-radius: 16px;
            padding: 36px 28px;
            position: relative;
            transition: all 0.3s ease;
          }

          .step-card:hover {
            transform: translateY(-4px);
            background: #ffffff;
            box-shadow: 0 16px 32px -8px rgba(7, 6, 33, 0.08);
            border-color: rgba(227, 27, 35, 0.3);
          }

          .step-number-bubble {
            width: 44px;
            height: 44px;
            background: #070621;
            color: #ffffff;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            font-weight: 800;
            margin-bottom: 22px;
          }

          .step-card-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 12px;
          }

          .step-card-desc {
            font-size: 0.92rem;
            line-height: 1.6;
            color: #475569;
          }

          .step-bottom-line {
            position: absolute;
            bottom: 0;
            left: 28px;
            right: 28px;
            height: 3px;
            background: transparent;
            transition: background 0.3s ease;
          }

          .step-card:hover .step-bottom-line {
            background: #e31b23;
          }

          /* CORE VALUES SECTION */
          .core-values-section {
            padding: 90px 0;
            background: #005ea6;
            color: #ffffff;
          }

          .core-values-section .section-pill-tag {
            background: rgba(255, 255, 255, 0.2);
            color: #ffde59;
          }

          .core-values-section .section-main-heading {
            color: #ffffff;
          }

          .core-values-section .section-subtext {
            color: #94a3b8;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }

          .value-card {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 28px 22px;
            display: flex;
            flex-direction: column;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .value-card:hover,
          .value-card.active-value-card {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 222, 89, 0.5);
            transform: translateY(-4px);
            box-shadow: 0 16px 30px rgba(0, 94, 166, 0.3);
          }

          .value-icon-circle {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.15);
            color: #ffde59;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .value-icon-circle svg {
            width: 24px;
            height: 24px;
          }

          .value-tag {
            font-size: 0.68rem;
            font-weight: 700;
            color: #cbd5e1;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 8px;
          }

          .value-title {
            font-size: 1.25rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 10px;
          }

          .value-desc {
            font-size: 0.85rem;
            line-height: 1.55;
            color: #94a3b8;
          }

          /* JOURNEY SECTION */
          .journey-showcase-section {
            background: #ffffff;
          }

          /* Banner */
          .journey-banner-image-wrap {
            position: relative;
            width: 100%;
            height: 420px;
            overflow: hidden;
          }

          .journey-banner-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 30%;
            display: block;
          }

          .journey-banner-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(0,94,166,0.85) 0%, rgba(0,94,166,0.45) 55%, rgba(0,94,166,0.1) 100%);
            display: flex;
            align-items: center;
          }

          .journey-banner-text-block {
            padding: 0 64px;
            max-width: 640px;
          }

          .journey-banner-kicker {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            color: #ffde59;
            text-transform: uppercase;
            display: block;
            margin-bottom: 14px;
          }

          .journey-banner-heading {
            font-size: clamp(2rem, 3.5vw, 3rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.15;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
          }

          .journey-banner-sub {
            font-size: 1rem;
            color: rgba(255,255,255,0.82);
            line-height: 1.6;
            margin: 0;
          }

          /* Body */
          .journey-body {
            padding: 72px 0 0;
          }

          .journey-two-col {
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 64px;
            align-items: flex-start;
            margin-bottom: 56px;
          }

          /* Left Panel */
          .journey-left-panel {
            position: sticky;
            top: 110px;
          }

          .journey-left-kicker {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.18em;
            color: #005ea6;
            text-transform: uppercase;
            display: block;
            margin-bottom: 14px;
          }

          .journey-left-title {
            font-size: clamp(1.8rem, 2.5vw, 2.5rem);
            font-weight: 800;
            color: #070621;
            letter-spacing: -0.02em;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .journey-left-lead {
            font-size: 1.05rem;
            line-height: 1.65;
            color: #1e293b;
            margin-bottom: 16px;
          }

          .journey-left-para {
            font-size: 0.93rem;
            line-height: 1.7;
            color: #475569;
            margin-bottom: 28px;
          }

          .journey-tagline-badge {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 28px;
          }

          .journey-red-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #005ea6;
            flex-shrink: 0;
          }

          .journey-tagline-label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            color: #94a3b8;
            text-transform: uppercase;
          }

          .btn-journey-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #005ea6;
            color: #ffffff;
            padding: 13px 28px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.93rem;
            border: none;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .btn-journey-primary:hover {
            background: #004b87;
            transform: translateY(-2px);
            box-shadow: 0 10px 24px -4px rgba(0,94,166,0.4);
          }

          /* Right: Timeline */
          .journey-right-panel {
            padding-top: 4px;
          }

          .journey-timeline-wrap {
            position: relative;
            padding-left: 32px;
          }

          .journey-timeline-line {
            position: absolute;
            top: 10px;
            bottom: 10px;
            left: 9px;
            width: 2px;
            background: linear-gradient(180deg, #005ea6 0%, #004b87 50%, #87ceeb 100%);
            border-radius: 2px;
          }

          .journey-timeline-item {
            position: relative;
            margin-bottom: 28px;
          }

          .journey-timeline-item:last-child {
            margin-bottom: 0;
          }

          .journey-timeline-dot {
            position: absolute;
            left: -32px;
            top: 14px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid #ffffff;
            box-shadow: 0 0 0 2px currentColor;
          }

          .dot-blue { background: #005ea6; color: #005ea6; }
          .dot-red  { background: #004b87; color: #004b87; }
          .dot-navy { background: #87ceeb; color: #87ceeb; }

          .journey-timeline-card {
            background: #f8fafc;
            border: 1px solid rgba(7,6,33,0.08);
            border-radius: 14px;
            padding: 22px 24px;
            transition: all 0.25s ease;
          }

          .journey-timeline-card:hover {
            background: #ffffff;
            box-shadow: 0 8px 24px -6px rgba(7,6,33,0.1);
            border-color: rgba(0,94,166,0.25);
            transform: translateX(4px);
          }

          .journey-timeline-year {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 800;
            color: #005ea6;
            background: rgba(0,94,166,0.08);
            padding: 3px 10px;
            border-radius: 6px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .journey-timeline-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 8px;
          }

          .journey-timeline-desc {
            font-size: 0.9rem;
            line-height: 1.6;
            color: #475569;
            margin: 0;
          }

          /* Stats Strip */
          .journey-stats-strip {
            display: grid;
            grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
            align-items: center;
            border-top: 1px solid rgba(7,6,33,0.08);
            padding: 32px 0 48px;
          }

          .journey-stat-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 0 24px;
          }

          .journey-stat-value {
            font-size: 2rem;
            font-weight: 800;
            color: #070621;
            line-height: 1;
          }

          .journey-stat-label {
            font-size: 0.82rem;
            font-weight: 600;
            color: #005ea6;
            margin-top: 4px;
          }

          .journey-stat-sub {
            font-size: 0.78rem;
            color: #94a3b8;
          }

          .journey-stat-divider {
            width: 1px;
            height: 50px;
            background: rgba(7,6,33,0.1);
          }

          .journey-container-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 60px;
            align-items: flex-start;
          }

          .journey-left-content {
            position: sticky;
            top: 130px;
          }

          .journey-title {
            font-size: 2.3rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
          }

          .journey-lead {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #1e293b;
            margin-bottom: 14px;
          }

          .journey-paragraph {
            font-size: 0.96rem;
            line-height: 1.65;
            color: #475569;
            margin-bottom: 30px;
          }

          .journey-callout-card {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            background: #f8fafc;
            border: 1px solid rgba(7, 6, 33, 0.08);
            border-radius: 14px;
            padding: 20px;
          }

          .callout-quote-icon {
            color: #005ea6;
            flex-shrink: 0;
          }

          .callout-heading {
            font-size: 0.95rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 4px;
          }

          .callout-text {
            font-size: 0.84rem;
            color: #64748b;
            line-height: 1.45;
            margin: 0;
          }

          .journey-timeline {
            position: relative;
            padding-left: 36px;
          }

          .timeline-track-line {
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 11px;
            width: 2px;
            background: rgba(7, 6, 33, 0.1);
          }

          .timeline-item {
            position: relative;
            margin-bottom: 32px;
          }

          .timeline-item:last-child {
            margin-bottom: 0;
          }

          .timeline-node {
            position: absolute;
            left: -36px;
            top: 8px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid #005ea6;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }

          .node-inner-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #005ea6;
          }

          .timeline-card {
            background: #f8fafc;
            border: 1px solid rgba(7, 6, 33, 0.08);
            border-radius: 14px;
            padding: 22px 24px;
            transition: all 0.25s ease;
          }

          .timeline-card:hover {
            transform: translateX(4px);
            background: #ffffff;
            box-shadow: 0 10px 24px -6px rgba(7, 6, 33, 0.06);
            border-color: rgba(0, 94, 166, 0.25);
          }

          .timeline-year {
            font-size: 0.8rem;
            font-weight: 800;
            color: #005ea6;
            background: rgba(0, 94, 166, 0.08);
            padding: 3px 10px;
            border-radius: 6px;
            display: inline-block;
            margin-bottom: 8px;
          }

          .timeline-heading {
            font-size: 1.15rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 8px;
          }

          .timeline-text {
            font-size: 0.9rem;
            line-height: 1.55;
            color: #475569;
            margin: 0;
          }

          /* EXPERTISE OVERVIEW SECTION */
          .expertise-overview-section {
            padding: 90px 0;
            background: #f8fafc;
          }

          .expertise-cards-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }

          .expertise-card {
            background: #ffffff;
            border: 1px solid rgba(7, 6, 33, 0.08);
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
          }

          .expertise-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 36px -10px rgba(7, 6, 33, 0.12);
            border-color: rgba(0, 94, 166, 0.3);
          }

          .expertise-image-wrap {
            position: relative;
            height: 180px;
            overflow: hidden;
          }

          .expertise-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .expertise-card:hover .expertise-img {
            transform: scale(1.05);
          }

          .expertise-img-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 50%, rgba(7, 6, 33, 0.6) 100%);
          }

          .expertise-info {
            padding: 22px 20px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .expertise-card-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 8px;
          }

          .expertise-card-desc {
            font-size: 0.88rem;
            line-height: 1.55;
            color: #64748b;
            margin-bottom: 18px;
            flex-grow: 1;
          }

          .expertise-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #005ea6;
            transition: gap 0.2s ease;
          }

          .expertise-link:hover {
            gap: 10px;
          }

          /* CALL TO ACTION SECTION */
          .about-cta-section {
            padding: 80px 0 100px;
            background: #ffffff;
          }

          .about-cta-card {
            background: #070621;
            border-radius: 24px;
            padding: 60px;
            color: #ffffff;
            display: grid;
            grid-template-columns: 1.3fr 0.7fr;
            gap: 40px;
            align-items: center;
            box-shadow: 0 25px 50px -12px rgba(7, 6, 33, 0.4);
            position: relative;
            overflow: hidden;
          }

          .about-cta-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -20%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 94, 166, 0.3) 0%, transparent 70%);
            pointer-events: none;
          }

          .cta-pretitle {
            font-size: 0.76rem;
            font-weight: 700;
            color: #ffde59;
            letter-spacing: 0.08em;
            display: block;
            margin-bottom: 10px;
          }

          .cta-headline {
            font-size: 2.2rem;
            font-weight: 800;
            color: #ffffff;
            line-height: 1.25;
            margin-bottom: 14px;
          }

          .cta-subheading {
            font-size: 1rem;
            line-height: 1.6;
            color: #94a3b8;
            margin-bottom: 24px;
          }

          .cta-points-row {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .cta-point-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            color: #f1f5f9;
          }

          .cta-action-side {
            display: flex;
            flex-direction: column;
            gap: 14px;
            align-items: flex-start;
          }

          .btn-cta-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #005ea6;
            color: #ffffff;
            border: none;
            padding: 16px 30px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 10px 25px -4px rgba(0, 94, 166, 0.4);
            transition: all 0.25s ease;
            width: 100%;
            justify-content: center;
          }

          .btn-cta-primary:hover {
            background: #004b87;
            transform: translateY(-2px);
            box-shadow: 0 14px 28px -4px rgba(0, 94, 166, 0.5);
          }

          .btn-cta-ghost {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 14px 28px;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 600;
            width: 100%;
            transition: all 0.25s ease;
          }

          .btn-cta-ghost:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
          }

          /* MODAL STYLES */
          .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(7, 6, 33, 0.7);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

          .modal-card {
            background: #ffffff;
            border-radius: 20px;
            max-width: 600px;
            width: 100%;
            padding: 36px;
            position: relative;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .modal-close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: #f1f5f9;
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            font-size: 1.4rem;
            color: #64748b;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
          }

          .modal-close-btn:hover {
            background: #e2e8f0;
            color: #070621;
          }

          .modal-header {
            margin-bottom: 24px;
            padding-right: 40px;
          }

          .modal-sub {
            font-size: 0.74rem;
            font-weight: 700;
            color: #005ea6;
            letter-spacing: 0.08em;
            display: block;
            margin-bottom: 6px;
          }

          .modal-header h3 {
            font-size: 1.45rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 6px;
          }

          .modal-header p {
            font-size: 0.88rem;
            color: #64748b;
            margin: 0;
          }

          .modal-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .form-group label {
            font-size: 0.82rem;
            font-weight: 600;
            color: #334155;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 11px 14px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 0.9rem;
            font-family: inherit;
            color: #070621;
            background: #ffffff;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #070621;
            box-shadow: 0 0 0 3px rgba(7, 6, 33, 0.08);
          }

          .btn-modal-submit {
            background: #070621;
            color: #ffffff;
            border: none;
            padding: 14px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            margin-top: 6px;
            transition: all 0.2s ease;
          }

          .btn-modal-submit:hover {
            background: #004b87;
          }

          .modal-success-box {
            text-align: center;
            padding: 40px 20px;
          }

          .success-icon-badge {
            width: 60px;
            height: 60px;
            background: rgba(34, 197, 94, 0.15);
            color: #22c55e;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            font-weight: bold;
            margin: 0 auto 16px;
          }

          .modal-success-box h4 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #070621;
            margin-bottom: 8px;
          }

          .modal-success-box p {
            font-size: 0.9rem;
            color: #64748b;
          }

          /* RESPONSIVE DESIGN */
          @media (max-width: 1100px) {
            .values-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .expertise-cards-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .about-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }

          @media (max-width: 868px) {
            .synergy-grid {
              grid-template-columns: 1fr;
            }
            .synergy-nexus {
              flex-direction: row;
              padding: 16px 0;
            }
            .nexus-tagline {
              flex-direction: row;
              gap: 8px;
            }
            .mission-vision-grid {
              grid-template-columns: 1fr;
            }
            .approach-steps-grid {
              grid-template-columns: 1fr;
            }
            .journey-container-grid, .journey-two-col {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .journey-left-content, .journey-left-panel {
              position: static;
            }
            .journey-stats-strip {
              grid-template-columns: repeat(4, 1fr);
              gap: 12px;
              text-align: center;
              padding: 24px 0;
              align-items: flex-start;
            }
            .journey-stat-item {
              padding: 0;
            }
            .journey-stat-value {
              font-size: 1.4rem;
            }
            .journey-stat-label {
              font-size: 0.75rem;
            }
            .journey-stat-divider {
              display: none;
            }
            .about-cta-card {
              grid-template-columns: 1fr;
              padding: 36px;
            }
            .about-hero-title {
              font-size: 2.3rem;
            }
          }

          @media (max-width: 640px) {
            .values-grid {
              grid-template-columns: 1fr;
            }
            .expertise-cards-grid {
              grid-template-columns: 1fr;
            }
            .stats-highlight-grid {
              grid-template-columns: 1fr;
            }
            .journey-stats-strip {
              grid-template-columns: repeat(4, 1fr);
              gap: 6px;
              align-items: flex-start;
            }
            .journey-stat-value {
              font-size: 1.1rem;
            }
            .journey-stat-label {
              font-size: 0.65rem;
            }
            .journey-stat-sub {
              display: none;
            }
            .form-row {
              grid-template-columns: 1fr;
            }
            .about-hero-title {
              font-size: 1.9rem;
            }
            .section-main-heading {
              font-size: 1.8rem;
            }
            .about-cta-card {
              padding: 28px 20px;
            }
            .modal-card {
              padding: 24px;
            }
          }
        `}</style>
      </div>
    </>
  );
}
