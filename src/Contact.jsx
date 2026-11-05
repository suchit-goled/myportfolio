import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please complete all required fields (Name, Email, and Message) before sending."
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({
        type: "error",
        text: "Please provide a valid email address."
      });
      return;
    }

    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Suchit,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatusMessage({
      type: "success",
      text: "Opening your email client with your message pre-filled for Suchit Goled. You can also copy his direct email above!"
    });
  };

  return (
    <section id="contact" className="netflix-contact-section" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="contact-header-row">
          <div className="streaming-badge-red">DIRECT CHANNEL</div>
          <h2 id="contact-heading" className="section-shelf-heading">
            CONTACT ME
          </h2>
          <p className="contact-shelf-subtitle">
            OPEN TO FULL-TIME ROLES, INTERNSHIPS & HARDWARE/SOFTWARE COLLABORATIONS
          </p>
        </div>

        <div className="contact-streaming-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Direct Connection</h3>
            <p className="panel-lead">
              Have an engineering opportunity, technical question, or project inquiry? Reach out directly.
            </p>

            <div className="direct-cards-stack">
              {/* Email Card with Copy button */}
              <div className="direct-channel-card">
                <div className="channel-icon-box">
                  <FaEnvelope className="channel-icon red" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${personal.email}`} className="channel-value">
                    {personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <FaCheck className="text-green" /> : <FaCopy />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="direct-channel-card">
                <div className="channel-icon-box">
                  <FaMapMarkerAlt className="channel-icon blue" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">Current Location</span>
                  <span className="channel-value">{personal.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="direct-channel-card">
                <div className="channel-icon-box">
                  <FaLinkedin className="channel-icon cyan" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">LinkedIn Profile</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    linkedin.com/in/suchit-goled-09a933339
                  </a>
                </div>
              </div>

              <div className="direct-channel-card">
                <div className="channel-icon-box">
                  <FaGithub className="channel-icon white" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">GitHub Repositories</span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    github.com/suchit-goled
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer Form */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Send a Direct Message</h3>
            <p className="panel-lead">
              Fill in your details below to launch your email client with a structured inquiry.
            </p>

            <form onSubmit={handleSubmit} className="netflix-contact-form" noValidate>
              <div className="form-row-duo">
                <div className="form-field-group">
                  <label htmlFor="contact-name" className="field-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="form-text-input"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-email" className="field-label">
                    Your Email <span className="req-star">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="form-text-input"
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-subject" className="field-label">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-text-input"
                  placeholder="e.g. Full-Time Opportunity / Smart Bandage Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message" className="field-label">
                  Message <span className="req-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  className="form-text-input text-area"
                  placeholder="Describe your role, project, or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {statusMessage && (
                <div
                  className={`status-alert-box ${statusMessage.type === "error" ? "error" : "success"}`}
                  role="alert"
                >
                  {statusMessage.text}
                </div>
              )}

              <button type="submit" className="netflix-btn-red form-submit-btn">
                <FaPaperPlane className="btn-icon" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
