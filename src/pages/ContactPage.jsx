import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  const location = useLocation();
  const initialService = location.state?.service || "Manpower Supply";

  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: initialService,
    workforceCount: "10-50",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual business email address
    const yourBusinessEmail = "tektreefive@gmail.com";

    fetch(`https://formsubmit.co/ajax/${yourBusinessEmail}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: inquiryForm.name,
        company: inquiryForm.company,
        email: inquiryForm.email,
        phone: inquiryForm.phone,
        serviceType: inquiryForm.serviceType,
        workforceCount: inquiryForm.workforceCount,
        message: inquiryForm.message,
        _subject: `New Workforce Inquiry from ${inquiryForm.company}`,
        _autoresponse: `Hi ${inquiryForm.name},\n\nThank you for contacting SAI BABU Enterprises! We have successfully received your inquiry regarding ${inquiryForm.serviceType}.\n\nOne of our workforce directors will review your requirements and get back to you within 24 hours.\n\nBest Regards,\nThe SAI BABU Enterprises Team`
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Emails sent successfully!", data);
        setSubmitted(true);

        // Reset after showing success message
        setTimeout(() => {
          setSubmitted(false);
          setInquiryForm({
            name: "",
            company: "",
            email: "",
            phone: "",
            serviceType: "Manpower Supply",
            workforceCount: "10-50",
            message: ""
          });
        }, 4000);
      })
      .catch((error) => {
        console.error("FormSubmit error:", error);
        alert("Failed to send the inquiry. Please try again later.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | SAI BABU Enterprises</title>
        <meta
          name="description"
          content="Get in touch with SAI BABU Enterprises. Request a customized workforce and staffing proposal today."
        />
      </Helmet>

      <div className="contact-page-container">

        {/* Banner Section */}
        <section className="contact-banner">
          <div className="container">
            <span className="contact-sub">WORKFORCE INQUIRY</span>
            <h1>Partner with Saibabu &amp; Rudhrasri Enterprises</h1>
            <p>Fill in your requirements below and our workforce director will connect within 24 hours.</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success-box">
                  <div className="success-icon-badge">✓</div>
                  <h4>Inquiry Successfully Received!</h4>
                  <p>Thank you for reaching out. Our workforce operations team is preparing your custom proposal.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleInquirySubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Factory Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Logistics Ltd"
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@apex.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Primary Service Needed</label>
                      <select
                        value={inquiryForm.serviceType}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, serviceType: e.target.value })}
                      >
                        <option value="Manpower Supply">Manpower Supply</option>
                        <option value="Recruitment & Staffing">Recruitment & Staffing</option>
                        <option value="Contract Workforce Management">Contract Workforce Management</option>
                        <option value="Industrial & Warehouse Staffing">Industrial & Warehouse Staffing</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Workforce Volume</label>
                      <select
                        value={inquiryForm.workforceCount}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, workforceCount: e.target.value })}
                      >
                        <option value="1-10">1 - 10 Workers</option>
                        <option value="10-50">10 - 50 Workers</option>
                        <option value="50-200">50 - 200 Workers</option>
                        <option value="200+">200+ Enterprise Scale</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Requirements / Location Details</label>
                    <textarea
                      rows="4"
                      placeholder="Specify shift details, operational location, specific skills or urgency..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-contact-submit">
                    Submit Workforce Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <style>{`
          .contact-page-container {
            background-color: #f8fafc;
            color: #070621;
            font-family: 'Inter', sans-serif;
            padding-bottom: 80px;
          }

          .contact-banner {
            background: #005ea6;
            padding: 140px 0 100px;
            text-align: center;
            color: #ffffff;
            position: relative;
            overflow: hidden;
          }
          
          .contact-banner::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.15), transparent 60%);
          }

          .contact-sub {
            font-size: 0.8rem;
            font-weight: 700;
            color: #ffde59;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            display: block;
            margin-bottom: 16px;
            position: relative;
            z-index: 2;
          }

          .contact-banner h1 {
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: 800;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
          }

          .contact-banner p {
            font-size: 1.1rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .contact-form-section {
            margin-top: -60px;
            position: relative;
            z-index: 10;
          }

          .contact-form-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 48px;
            box-shadow: 0 25px 50px -12px rgba(7, 6, 33, 0.1);
            max-width: 800px;
            margin: 0 auto;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .form-group label {
            font-size: 0.9rem;
            font-weight: 600;
            color: #1e293b;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            font-size: 0.95rem;
            font-family: inherit;
            color: #070621;
            background: #f8fafc;
            transition: all 0.2s ease;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #005ea6;
            background: #ffffff;
            box-shadow: 0 0 0 3px rgba(0, 94, 166, 0.15);
          }

          .btn-contact-submit {
            background: #005ea6;
            color: #ffffff;
            border: none;
            padding: 16px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 1.05rem;
            cursor: pointer;
            margin-top: 10px;
            transition: all 0.2s ease;
            box-shadow: 0 10px 20px -5px rgba(0, 94, 166, 0.3);
          }

          .btn-contact-submit:hover {
            background: #004b87;
            transform: translateY(-2px);
            box-shadow: 0 12px 25px -5px rgba(0, 94, 166, 0.4);
          }

          .contact-success-box {
            text-align: center;
            padding: 60px 20px;
          }

          .success-icon-badge {
            width: 80px;
            height: 80px;
            background: rgba(34, 197, 94, 0.15);
            color: #22c55e;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin: 0 auto 24px;
          }

          .contact-success-box h4 {
            font-size: 1.6rem;
            font-weight: 800;
            color: #070621;
            margin-bottom: 12px;
          }

          .contact-success-box p {
            font-size: 1.05rem;
            color: #64748b;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .contact-form-card {
              padding: 32px 24px;
            }
            .form-row {
              grid-template-columns: 1fr;
            }
            .contact-banner {
              padding: 120px 20px 80px;
            }
          }
        `}</style>
      </div>
    </>
  );
}
