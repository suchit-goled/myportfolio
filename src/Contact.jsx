import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaWhatsapp,
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
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [emailTouched, setEmailTouched] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email.trim());

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyFormattedMessage = () => {
    const fullText = `From: ${formData.name || "[Your Name]"} (${formData.email || "[Your Email]"})\nSubject: ${formData.subject || "Portfolio Inquiry"}\n\n${formData.message || "[Your Message]"}\n\nTo: ${personal.email} / WhatsApp: ${personal.phone}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (statusMessage) setStatusMessage(null);
  };

  const handleBlurEmail = () => {
    setEmailTouched(true);
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

    if (!isEmailValid) {
      setStatusMessage({
        type: "error",
        text: "Please provide a valid email address with a domain (e.g. name@domain.com)."
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
      text: "Opening your email app with your message pre-filled. You can also message Suchit directly via WhatsApp or copy his email!"
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
              {/* WhatsApp Direct Card */}
              <div className="direct-channel-card whatsapp-channel-card">
                <div className="channel-icon-box whatsapp-box">
                  <FaWhatsapp className="channel-icon whatsapp" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">WhatsApp Direct</span>
                  <a
                    href={`https://wa.me/917676716597?text=${encodeURIComponent("Hi Suchit, I came across your portfolio and would like to discuss an opportunity / project.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value text-whatsapp"
                  >
                    +91 7676716597
                  </a>
                </div>
                <a
                  href={`https://wa.me/917676716597?text=${encodeURIComponent("Hi Suchit, I came across your portfolio and would like to discuss an opportunity / project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-pill whatsapp-pill"
                  title="Open WhatsApp chat"
                  aria-label="Chat with Suchit on WhatsApp"
                >
                  <FaWhatsapp />
                  <span>Chat</span>
                </a>
              </div>

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

              {/* Phone Card */}
              <div className="direct-channel-card">
                <div className="channel-icon-box">
                  <FaPhoneAlt className="channel-icon blue" />
                </div>
                <div className="channel-meta">
                  <span className="channel-label">Phone / Mobile</span>
                  <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="channel-value">
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="direct-channel-card">
                <div className="channel-icon-box">
                  <FaMapMarkerAlt className="channel-icon yellow" />
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
                  <div className="label-with-validation">
                    <label htmlFor="contact-email" className="field-label">
                      Your Email <span className="req-star">*</span>
                    </label>
                    {formData.email.length > 0 && (
                      <span className={`email-verify-pill ${isEmailValid ? "valid" : "invalid"}`}>
                        {isEmailValid ? <><FaCheck /> Verified format</> : "Enter valid email"}
                      </span>
                    )}
                  </div>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className={`form-text-input ${emailTouched && !isEmailValid && formData.email.length > 0 ? "input-invalid" : ""}`}
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlurEmail}
                  />
                  {emailTouched && !isEmailValid && formData.email.length > 0 && (
                    <span className="field-hint-error">
                      Please enter a complete email address (e.g. name@domain.com)
                    </span>
                  )}
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

              <div className="form-buttons-row">
                <button type="submit" className="netflix-btn-red form-submit-btn">
                  <FaPaperPlane className="btn-icon" />
                  <span>Send via Email Client</span>
                </button>
                <button
                  type="button"
                  className="netflix-btn-secondary form-copy-btn"
                  onClick={handleCopyFormattedMessage}
                  title="Copy formatted message to clipboard"
                >
                  {copiedMsg ? <FaCheck className="text-green" /> : <FaCopy />}
                  <span>{copiedMsg ? "Message Copied!" : "Copy Inquiry Text"}</span>
                </button>
                <a
                  href={`https://wa.me/917676716597?text=${encodeURIComponent(
                    formData.message
                      ? `Hi Suchit, my name is ${formData.name || "a visitor"}. ${formData.message}`
                      : "Hi Suchit, I came across your portfolio and would like to discuss an opportunity / project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-btn-secondary whatsapp-quick-btn"
                  title="Direct WhatsApp Chat"
                >
                  <FaWhatsapp className="whatsapp-green-icon" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
