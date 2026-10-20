import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaAward,
  FaTimes,
  FaEye,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalIdx, setActiveModalIdx] = useState(null);
  const { certificates } = portfolioData;

  const categories = [
    { id: "all", label: "All Achievements" },
    { id: "Programming", label: "Programming" },
    { id: "Data & Databases", label: "Data & SQL" },
    { id: "Embedded & IoT", label: "Embedded & IoT" },
    { id: "Hackathons", label: "Hackathons" },
    { id: "Internships", label: "Internships" }
  ];

  const filteredCerts =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  // Keyboard controls for modal lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalIdx === null) return;
      if (e.key === "Escape") setActiveModalIdx(null);
      if (e.key === "ArrowLeft") {
        setActiveModalIdx((prev) => (prev - 1 + filteredCerts.length) % filteredCerts.length);
      }
      if (e.key === "ArrowRight") {
        setActiveModalIdx((prev) => (prev + 1) % filteredCerts.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIdx, filteredCerts.length]);

  return (
    <div className="certificates-page-container">
      {/* Back to Home Breadcrumb */}
      <Link to="/" className="back-nav-link">
        <FaArrowLeft aria-hidden="true" />
        <span>Back to Portfolio</span>
      </Link>

      <div className="section-header" style={{ marginBottom: "36px" }}>
        <div className="section-tag">
          <FaAward /> Professional Credentials
        </div>
        <h1 className="section-title">
          Certificates & <span>Honors</span>
        </h1>
        <p className="section-subtitle">
          Verified certifications from Infosys Springboard, NPTEL, Coursera, Scaler, alongside innovation hackathon citations and industry internships.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="cert-filter-row" role="tablist" aria-label="Certificate Categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat.id);
              setActiveModalIdx(null);
            }}
            role="tab"
            aria-selected={selectedCategory === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <motion.div className="cert-cards-grid" layout>
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={cert.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            layout
          >
            {/* Image Preview Box */}
            <div
              className="certificate-preview-box"
              onClick={() => setActiveModalIdx(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveModalIdx(idx);
                }
              }}
              aria-label={`View enlarged ${cert.title}`}
            >
              <img
                src={process.env.PUBLIC_URL + cert.image}
                alt={cert.title}
                loading="lazy"
              />
              <div className="preview-overlay">
                <FaEye />
                <span>Click to View Full Certificate</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="certificate-info-box">
              <div>
                <span className="cert-issuer-badge">{cert.issuer}</span>
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-desc">{cert.description}</p>

                <div className="cert-skills-wrap">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="cert-view-btn"
                onClick={() => setActiveModalIdx(idx)}
              >
                <FaEye />
                <span>Inspect Document</span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Accessible Full-Screen Certificate Modal */}
      {activeModalIdx !== null && filteredCerts[activeModalIdx] && (
        <div
          className="modal-lightbox-backdrop"
          onClick={() => setActiveModalIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview Modal"
        >
          <div
            className="modal-lightbox-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-lightbox-header">
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--teal-light)", fontWeight: "700", textTransform: "uppercase" }}>
                  {filteredCerts[activeModalIdx].issuer}
                </div>
                <div className="modal-lightbox-title">
                  {filteredCerts[activeModalIdx].title}
                </div>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalIdx(null)}
                aria-label="Close certificate preview"
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-lightbox-body">
              <img
                src={process.env.PUBLIC_URL + filteredCerts[activeModalIdx].image}
                alt={filteredCerts[activeModalIdx].title}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 24px",
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              <button
                className="btn-secondary btn-sm"
                onClick={() =>
                  setActiveModalIdx(
                    (activeModalIdx - 1 + filteredCerts.length) % filteredCerts.length
                  )
                }
              >
                <FaChevronLeft /> Previous
              </button>

              <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Document {activeModalIdx + 1} of {filteredCerts.length} • Use Arrow keys to navigate • Esc to exit
              </span>

              <button
                className="btn-secondary btn-sm"
                onClick={() =>
                  setActiveModalIdx((activeModalIdx + 1) % filteredCerts.length)
                }
              >
                Next <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
