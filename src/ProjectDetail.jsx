import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlay,
  FaGithub,
  FaExternalLinkAlt,
  FaMicrochip,
  FaThermometerHalf,
  FaVial,
  FaHeartbeat,
  FaCheckCircle,
  FaTimes,
  FaPython,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaSmog,
  FaMapMarkerAlt,
  FaLightbulb
} from "react-icons/fa";
import {
  SiTensorflow,
  SiArduino,
  SiFastapi,
  SiFlask,
  SiOpencv,
  SiMongodb,
  SiExpress,
  SiCplusplus
} from "react-icons/si";
import { portfolioData } from "./data/portfolioData";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ProjectDetail({ explicitId }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const activeId = explicitId || projectId || "ai-smart-bandage";
  const [activeTab, setActiveTab] = useState("overview");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeId]);

  const project =
    portfolioData.projects.find((p) => p.id === activeId) ||
    portfolioData.projects[0];

  const getTechIcon = (name) => {
    switch (name) {
      case "Python":
        return <FaPython className="tech-chip-icon text-python" />;
      case "TensorFlow":
        return <SiTensorflow className="tech-chip-icon text-tf" />;
      case "Arduino":
      case "Arduino Uno":
        return <SiArduino className="tech-chip-icon text-arduino" />;
      case "NanoEdge AI":
      case "LangGraph":
        return <FaBrain className="tech-chip-icon text-ai" />;
      case "React.js":
        return <FaReact className="tech-chip-icon text-react" />;
      case "Node.js":
        return <FaNodeJs className="tech-chip-icon text-node" />;
      case "Express.js":
        return <SiExpress className="tech-chip-icon text-express" />;
      case "MongoDB":
        return <SiMongodb className="tech-chip-icon text-mongo" />;
      case "OpenCV":
        return <SiOpencv className="tech-chip-icon text-cv" />;
      case "Flask":
        return <SiFlask className="tech-chip-icon text-flask" />;
      case "FastAPI":
        return <SiFastapi className="tech-chip-icon text-fastapi" />;
      case "MQ135 Gas Sensor":
        return <FaSmog className="tech-chip-icon text-sensor" />;
      case "GPS Module":
        return <FaMapMarkerAlt className="tech-chip-icon text-gps" />;
      case "Embedded C++":
        return <SiCplusplus className="tech-chip-icon text-cpp" />;
      case "Prompt Eng":
        return <FaLightbulb className="tech-chip-icon text-prompt" />;
      default:
        return <FaMicrochip className="tech-chip-icon text-default" />;
    }
  };

  const tabsList = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "architecture", label: "Architecture" },
    { id: "myRole", label: "My Role" },
    { id: "results", label: "Results" }
  ];

  return (
    <div className="project-detail-page">
      <Navbar />

      <main className="detail-main-container">
        {/* Top Breadcrumb */}
        <div className="detail-breadcrumb-row">
          <button
            type="button"
            className="back-to-projects-btn"
            onClick={() => navigate("/#projects")}
          >
            <FaArrowLeft className="back-arrow" />
            <span>Back to Projects</span>
          </button>
        </div>

        {/* Hero Showcase Area */}
        <section className="detail-hero-section">
          {/* Left Column: Metadata & Details */}
          <div className="detail-text-column">
            {/* Episode Series Tag */}
            <div className="detail-series-tag">
              <span className="series-name">{project.series || "SUCHIT ORIGINALS"}</span>
              <span className="separator">|</span>
              <span className="episode-code">{project.episode}</span>
            </div>

            {/* Main Title */}
            <h1 className="detail-project-title">{project.title}</h1>

            {/* Subtitle */}
            <h2 className="detail-project-subtitle">{project.subtitle}</h2>

            {/* Badges */}
            <div className="detail-badges-row">
              {project.badges.map((badge, idx) => (
                <span key={idx} className="detail-badge-pill">
                  {badge}
                </span>
              ))}
            </div>

            {/* Tagline Description */}
            <p className="detail-description-lead">{project.tagline}</p>

            {/* Action Buttons matching reference image */}
            <div className="detail-actions-row">
              <button
                type="button"
                className="netflix-btn-red detail-cta-btn"
                onClick={() => setDemoModalOpen(true)}
              >
                <FaPlay className="btn-icon" />
                <span>Watch Demo</span>
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-btn-dark detail-cta-btn"
                >
                  <FaGithub className="btn-icon" />
                  <span>View Code</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-btn-dark detail-cta-btn"
                >
                  <FaExternalLinkAlt className="btn-icon" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Futuristic Telemetry HUD Graphic (matching bottom-left reference screenshot) */}
          <div className="detail-visual-column">
            <div className="detail-hud-wrapper">
              {/* Background Bandage / Circuit Imagery */}
              <div className="hud-backdrop-container">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={process.env.PUBLIC_URL + project.images[0].src}
                    alt={project.title}
                    className="hud-base-image"
                  />
                ) : (
                  <div className="hud-circuit-placeholder" />
                )}
                <div className="hud-overlay-tint" />
              </div>

              {/* Holographic HUD Card Overlay (as shown in reference image) */}
              <div className="holographic-telemetry-hud">
                <div className="hud-header">
                  <span className="hud-label">Telemetry Status</span>
                  <span className="hud-live-tag">LIVE FEED</span>
                </div>

                <div className="hud-status-row">
                  <div className="hud-circular-metric">
                    <svg viewBox="0 0 36 36" className="circular-chart-svg">
                      <path
                        className="circle-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle-fill"
                        strokeDasharray={`${project.hudData?.healingPercentage || 78}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="circle-percentage">
                      {project.hudData?.healingPercentage || 78}%
                    </div>
                  </div>
                  <div className="hud-status-meta">
                    <span className="hud-status-title">
                      {project.hudData?.woundStatus || "Healing (78%)"}
                    </span>
                    <span className="hud-trend-pill">
                      {project.hudData?.trend || "Stable Recovery"}
                    </span>
                  </div>
                </div>

                {/* Telemetry metrics rows */}
                <div className="hud-data-grid">
                  <div className="hud-metric-row">
                    <span className="hud-metric-key">
                      <FaThermometerHalf className="hud-inline-icon" /> Temperature
                    </span>
                    <span className="hud-metric-val">
                      {project.hudData?.temperature || "36.5 °C"}
                    </span>
                  </div>

                  <div className="hud-metric-row">
                    <span className="hud-metric-key">
                      <FaVial className="hud-inline-icon" /> pH Level
                    </span>
                    <span className="hud-metric-val">
                      {project.hudData?.phLevel || "7.1"}
                    </span>
                  </div>

                  <div className="hud-metric-row">
                    <span className="hud-metric-key">
                      <FaHeartbeat className="hud-inline-icon" /> Biomarker Status
                    </span>
                    <span className="hud-metric-val status-ok">
                      <FaCheckCircle className="status-icon" /> {project.hudData?.status || "Stable"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation (Overview, Problem, Solution, Architecture, My Role, Results) */}
        <section className="detail-tabs-section">
          <div className="detail-tabs-bar" role="tablist">
            {tabsList.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`detail-tab-btn ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
                role="tab"
                aria-selected={activeTab === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content Grid */}
          <div className="detail-tab-content-grid">
            {/* Left: Tab Text Narrative */}
            <div className="tab-narrative-box">
              <h3 className="tab-section-heading">
                {activeTab === "overview" && "Project Overview"}
                {activeTab === "problem" && "The Problem Statement"}
                {activeTab === "solution" && "Engineered Solution"}
                {activeTab === "architecture" && "System Architecture"}
                {activeTab === "myRole" && "My Engineering Contribution"}
                {activeTab === "results" && "Demonstrated Results & Verification"}
              </h3>

              <p className="tab-narrative-text">
                {project.tabs?.[activeTab] || project.description}
              </p>

              {/* Hardware specifications if available */}
              {project.hardware && project.hardware.length > 0 && (
                <div className="hardware-specs-block">
                  <h4 className="hardware-specs-title">Hardware Components</h4>
                  <div className="hardware-chips-list">
                    {project.hardware.map((hw, hIdx) => (
                      <span key={hIdx} className="hardware-chip">
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Tech Stack Category Chips */}
            <div className="tab-tech-stack-box">
              <h3 className="tab-section-heading">Tech Stack</h3>
              <div className="tech-stack-chips-grid">
                {project.techStackChips?.map((tech, tIdx) => (
                  <div key={tIdx} className="detail-tech-chip">
                    <div className="tech-chip-icon-box">{getTechIcon(tech.name)}</div>
                    <div className="tech-chip-details">
                      <span className="tech-chip-title">{tech.name}</span>
                      <span className="tech-chip-role">{tech.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Schematics Showcase if project has multiple images */}
        {project.images && project.images.length > 1 && (
          <section className="detail-gallery-section">
            <h3 className="gallery-section-heading">Technical Schematics & Artifacts</h3>
            <div className="gallery-grid">
              {project.images.map((img, iIdx) => (
                <button
                  key={iIdx}
                  type="button"
                  className="gallery-image-card"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={process.env.PUBLIC_URL + img.src}
                    alt={img.title}
                    className="gallery-thumbnail-img"
                    loading="lazy"
                  />
                  <span className="gallery-img-caption">{img.title}</span>
                </button>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Interactive Watch Demo Simulator Modal */}
      {demoModalOpen && (
        <div
          className="demo-modal-backdrop"
          onClick={() => setDemoModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="demo-modal-header">
              <div className="demo-modal-title">
                <span className="modal-badge-red">LIVE SIMULATOR</span>
                <h3>{project.title} — Interactive Demo</h3>
              </div>
              <button
                type="button"
                className="demo-close-btn"
                onClick={() => setDemoModalOpen(false)}
                aria-label="Close demo modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="demo-modal-body">
              <div className="simulator-feed-card">
                <div className="simulator-hud-metrics">
                  <div className="sim-metric">
                    <span className="sim-label">Sensor Telemetry</span>
                    <span className="sim-val status-active">● Active (200Hz)</span>
                  </div>
                  <div className="sim-metric">
                    <span className="sim-label">Target Biomarker</span>
                    <span className="sim-val">{project.hudData?.temperature || "36.5 °C"}</span>
                  </div>
                  <div className="sim-metric">
                    <span className="sim-label">Infection Sepsis Risk</span>
                    <span className="sim-val text-safe">Minimal / Healthy</span>
                  </div>
                </div>

                <div className="simulator-chart-graphic">
                  <svg viewBox="0 0 500 120" className="telemetry-chart-svg">
                    <path
                      d="M0,60 Q50,30 100,60 T200,60 T300,40 T400,70 T500,50"
                      fill="none"
                      stroke="#00d2ff"
                      strokeWidth="3"
                    />
                    <path
                      d="M0,60 Q50,80 100,50 T200,65 T300,75 T400,55 T500,65"
                      fill="none"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                  </svg>
                  <div className="chart-legend">
                    <span className="legend-item blue">● pH Sensor Signal</span>
                    <span className="legend-item red">-- DS18B20 Temp Probe</span>
                  </div>
                </div>

                <p className="sim-explanation">
                  Simulating live ESP32 BLE GATT characteristic transmission and EfficientNet inference pipeline.
                  In production, data is packaged into 16-byte telemetry packets and analyzed every 60 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Gallery Images */}
      {selectedImage && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <FaTimes />
            </button>
            <img
              src={process.env.PUBLIC_URL + selectedImage.src}
              alt={selectedImage.title}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{selectedImage.title}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
