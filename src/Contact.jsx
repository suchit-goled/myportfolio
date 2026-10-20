import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt
} from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function Contact() {
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({
        type: "error",
        text: "Please provide a valid email address."
      });
      return;
    }

    // Construct mailto URL with pre-filled subject and body
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Suchit,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    // Open user's email client
    window.location.href = mailtoUrl;

    setStatusMessage({
      type: "success",
      text: "Opening your default email client with your message pre-filled for Suchit Goled. You can also copy his direct email above!"
    });
  };

  return (
    <section id="contact" className="section-container" aria-label="Contact Information">
      <div className="section-header">
        <div className="section-tag">
          <FaEnvelope /> Get In Touch
        </div>
        <h2 className="section-title">
          Let's <span>Connect & Collaborate</span>
        </h2>
        <p className="section-subtitle">
          Open to full-time engineering opportunities, internships, hardware/software collaborations, and technical discussions.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Communication Channels */}
        <motion.div
          className="contact-info-col"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Email Channel */}
          <div className="contact-channel-card">
            <div className="channel-icon">
              <FaEnvelope />
            </div>
            <div className="channel-details" style={{ flexGrow: 1 }}>
              <span className="channel-title">Direct Email</span>
              <a
                href={`mailto:${personal.email}`}
                className="channel-value"
                style={{ wordBreak: "break-all" }}
              >
                {personal.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="btn-secondary btn-sm"
              title="Copy email to clipboard"
              aria-label="Copy email address"
            >
              {copied ? <FaCheck style={{ color: "var(--emerald-accent)" }} /> : <FaCopy />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* LinkedIn Channel */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-channel-card"
          >
            <div className="channel-icon" style={{ background: "rgba(56, 189, 248, 0.15)", color: "var(--blue-accent)" }}>
              <FaLinkedin />
            </div>
            <div className="channel-details" style={{ flexGrow: 1 }}>
              <span className="channel-title">Professional Network</span>
              <span className="channel-value">LinkedIn Profile</span>
            </div>
            <FaExternalLinkAlt style={{ color: "var(--text-muted)" }} />
          </a>

          {/* GitHub Channel */}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="contact-channel-card"
          >
            <div className="channel-icon" style={{ background: "rgba(255, 255, 255, 0.08)", color: "var(--text-primary)" }}>
              <FaGithub />
            </div>
            <div className="channel-details" style={{ flexGrow: 1 }}>
              <span className="channel-title">Code Repositories</span>
              <span className="channel-value">github.com/suchit-goled</span>
            </div>
            <FaExternalLinkAlt style={{ color: "var(--text-muted)" }} />
          </a>

          {/* Phone Channel */}
          <div className="contact-channel-card">
            <div className="channel-icon" style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--emerald-accent)" }}>
              <FaPhoneAlt />
            </div>
            <div className="channel-details" style={{ flexGrow: 1 }}>
              <span className="channel-title">Mobile Phone</span>
              <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="channel-value">
                {personal.phone}
              </a>
            </div>
          </div>

          {/* Location Channel */}
          <div className="contact-channel-card">
            <div className="channel-icon" style={{ background: "rgba(245, 158, 11, 0.15)", color: "var(--amber-light)" }}>
              <FaMapMarkerAlt />
            </div>
            <div className="channel-details">
              <span className="channel-title">Location</span>
              <span className="channel-value">{personal.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Composer */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Send a Direct Message</h3>
          <p>Compose your message below. It will open in your preferred email client ready to send.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Your Full Name *</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Mercer"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email Address *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@company.com"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Full Stack Engineering Role / Project Discussion"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your team, project, or opportunity..."
                className="form-control"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              <FaPaperPlane />
              <span>Compose Email to Suchit</span>
            </button>

            {statusMessage && (
              <div
                className={`form-status-alert ${statusMessage.type}`}
                role="alert"
              >
                {statusMessage.text}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
