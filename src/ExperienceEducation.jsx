import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { portfolioData } from "./data/portfolioData";

function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState("all");
  const { experience, education, hackathons } = portfolioData;

  return (
    <section id="experience" className="section-container" aria-label="Experience, Education and Hackathons">
      <div className="section-header">
        <div className="section-tag">
          <FaBriefcase /> Track Record
        </div>
        <h2 className="section-title">
          Experience & <span>Education</span>
        </h2>
        <p className="section-subtitle">
          Verified industry internship, formal academic foundations in Electronics & Communication, and fast-paced hackathon accomplishments.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="timeline-tabs" role="tablist" aria-label="Timeline Categories">
        <button
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
          role="tab"
          aria-selected={activeTab === "all"}
        >
          All Milestones
        </button>
        <button
          className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
          role="tab"
          aria-selected={activeTab === "experience"}
        >
          Internships ({experience.length})
        </button>
        <button
          className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
          role="tab"
          aria-selected={activeTab === "education"}
        >
          Education ({education.length})
        </button>
        <button
          className={`tab-btn ${activeTab === "hackathons" ? "active" : ""}`}
          onClick={() => setActiveTab("hackathons")}
          role="tab"
          aria-selected={activeTab === "hackathons"}
        >
          Hackathons ({hackathons.length})
        </button>
      </div>

      <div className="timeline-stream">
        {/* Experience Entries */}
        {(activeTab === "all" || activeTab === "experience") &&
          experience.map((item, idx) => (
            <motion.div
              key={`exp-${idx}`}
              className="timeline-entry"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-node" aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.organization}</div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span className="timeline-period-badge">
                      <FaCalendarAlt /> {item.period}
                    </span>
                    <span className="timeline-period-badge">
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        {/* Education Entries */}
        {(activeTab === "all" || activeTab === "education") &&
          education.map((item, idx) => (
            <motion.div
              key={`edu-${idx}`}
              className="timeline-entry"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-node" style={{ borderColor: "var(--blue-accent)" }} aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.institution}</h3>
                    <div className="timeline-org">{item.degree}</div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span className="timeline-period-badge">
                      <FaCalendarAlt /> {item.period}
                    </span>
                    <span className="timeline-period-badge">
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-score">{item.score}</div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "14px" }}>
                  {item.description}
                </p>

                <div className="timeline-tags">
                  <span className="tech-pill" style={{ borderColor: "var(--blue-accent)", color: "var(--blue-accent)" }}>
                    <FaGraduationCap /> {item.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Hackathon Entries */}
        {(activeTab === "all" || activeTab === "hackathons") &&
          hackathons.map((item, idx) => (
            <motion.div
              key={`hack-${idx}`}
              className="timeline-entry"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-node" style={{ borderColor: "var(--amber-accent)" }} aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.title}</h3>
                    <div className="timeline-org">{item.organizer} • {item.role}</div>
                  </div>
                  <span className="timeline-period-badge" style={{ borderColor: "rgba(245, 158, 11, 0.3)" }}>
                    <FaTrophy style={{ color: "var(--amber-light)" }} /> {item.period}
                  </span>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                  {item.description}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                  <span className="timeline-score" style={{ marginBottom: 0 }}>
                    Hackathon Innovation Award
                  </span>
                  <Link
                    to="/certificates"
                    className="project-action-link primary"
                    style={{ fontSize: "0.82rem", padding: "6px 14px" }}
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default ExperienceEducation;
