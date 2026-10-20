import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaMicrochip,
  FaCheckCircle,
  FaImages,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function ProjectDetail({ explicitId }) {
  const params = useParams();
  const navigate = useNavigate();
  const projectId = explicitId || params.projectId || "ai-smart-bandage";

  const project = portfolioData.projects.find((p) => p.id === projectId) || portfolioData.projects[0];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft" && project.images) {
        setSelectedImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
      if (e.key === "ArrowRight" && project.images) {
        setSelectedImageIdx((prev) => (prev + 1) % project.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, project.images]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Find next project in sequence
  const currentIdx = portfolioData.projects.findIndex((p) => p.id === project.id);
  const nextProject = portfolioData.projects[(currentIdx + 1) % portfolioData.projects.length];

  return (
    <div className="project-detail-page">
      {/* Back Navigation Breadcrumb */}
      <Link to="/#projects" className="back-nav-link">
        <FaArrowLeft aria-hidden="true" />
        <span>Back to Projects</span>
      </Link>

      {/* Header Card */}
      <motion.div
        className="detail-header-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="project-category-tag" style={{ marginBottom: "16px", display: "inline-block" }}>
          {project.category}
        </span>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.description}</p>

        <div className="detail-tech-cluster">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="project-tech-badge" style={{ fontSize: "0.85rem", padding: "5px 12px" }}>
              {tech}
            </span>
          ))}
        </div>

        <div className="detail-actions-row">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <FaGithub />
              <span>View Source Code</span>
            </a>
          )}
          <Link to="/#contact" className="btn-secondary">
            <span>Inquire About Project</span>
          </Link>
        </div>
      </motion.div>

      {/* Key Engineering Highlights Block */}
      <motion.div
        className="detail-section-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3>
          <FaCheckCircle /> Key Capabilities & Implementation
        </h3>
        <ul className="detail-bullets">
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </motion.div>

      {/* Hardware Specifications (if applicable) */}
      {project.hardware && (
        <motion.div
          className="detail-section-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            <FaMicrochip /> Embedded Hardware Components
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginTop: "14px" }}>
            {project.hardware.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  padding: "14px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <span style={{ color: "var(--teal-light)" }}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Image Gallery & Prototype Showcase (if available) */}
      {project.images && project.images.length > 0 && (
        <motion.div
          className="detail-section-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            <FaImages /> Engineering Gallery & Prototype Schematics
          </h3>
          <p>Click any technical diagram or prototype photo to expand in high resolution.</p>

          <div className="project-gallery-grid">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="gallery-thumbnail-card"
                onClick={() => {
                  setSelectedImageIdx(idx);
                  setLightboxOpen(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImageIdx(idx);
                    setLightboxOpen(true);
                  }
                }}
                aria-label={`View ${img.title} enlarged`}
              >
                <img src={process.env.PUBLIC_URL + img.src} alt={img.title} />
                <div className="gallery-caption">{img.title}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Next Project Teaser */}
      <div
        style={{
          marginTop: "48px",
          padding: "28px",
          background: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "700" }}>
            Next Project
          </span>
          <h4 style={{ fontSize: "1.2rem", color: "var(--text-primary)", fontWeight: "700", marginTop: "4px" }}>
            {nextProject.title}
          </h4>
        </div>
        <button
          className="btn-primary"
          onClick={() => navigate(`/project/${nextProject.id}`)}
        >
          <span>Explore Next Project</span>
          <FaChevronRight />
        </button>
      </div>

      {/* Accessible Fullscreen Modal Lightbox */}
      {lightboxOpen && project.images && (
        <div
          className="modal-lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          <div
            className="modal-lightbox-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-lightbox-header">
              <div className="modal-lightbox-title">
                {project.images[selectedImageIdx].title} ({selectedImageIdx + 1}/{project.images.length})
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close image preview"
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-lightbox-body">
              <img
                src={process.env.PUBLIC_URL + project.images[selectedImageIdx].src}
                alt={project.images[selectedImageIdx].title}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 24px",
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)"
              }}
            >
              <button
                className="btn-secondary btn-sm"
                onClick={() =>
                  setSelectedImageIdx(
                    (selectedImageIdx - 1 + project.images.length) % project.images.length
                  )
                }
              >
                <FaChevronLeft /> Previous
              </button>
              <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Use Left / Right arrow keys to navigate • Esc to exit
              </span>
              <button
                className="btn-secondary btn-sm"
                onClick={() =>
                  setSelectedImageIdx((selectedImageIdx + 1) % project.images.length)
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

export default ProjectDetail;
