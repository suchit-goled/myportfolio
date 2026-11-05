import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaGithub, FaExternalLinkAlt, FaInfoCircle, FaShieldAlt } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Originals" },
    { id: "IoT & Healthcare AI", label: "IoT & Bio-Sensors" },
    { id: "AI & Full Stack", label: "AI & Agents" },
    { id: "Full Stack MERN", label: "Full Stack MERN" }
  ];

  const projects = portfolioData.projects;

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(filter.toLowerCase()) ||
            p.badges.some((b) => b.toLowerCase().includes(filter.toLowerCase()))
        );

  const getPosterGradient = (id) => {
    switch (id) {
      case "ai-smart-bandage":
        return "radial-gradient(circle at top right, rgba(229, 9, 20, 0.35), #0d1527 80%)";
      case "smart-inhaler":
        return "radial-gradient(circle at top right, rgba(0, 112, 243, 0.35), #0a1120 80%)";
      case "pharma-crm":
        return "radial-gradient(circle at top right, rgba(168, 85, 247, 0.35), #120d20 80%)";
      case "product-catalog":
        return "radial-gradient(circle at top right, rgba(245, 158, 11, 0.35), #1a1209 80%)";
      case "electronova":
      default:
        return "radial-gradient(circle at top right, rgba(16, 185, 129, 0.35), #091a14 80%)";
    }
  };

  return (
    <section id="projects" className="projects-streaming-section" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="projects-header-row">
          <div>
            <div className="streaming-badge-red">STREAMING NOW</div>
            <h2 id="projects-heading" className="section-shelf-heading">
              SUCHIT ORIGINALS
            </h2>
            <p className="projects-shelf-subtitle">
              FEATURED PRODUCTIONS · DIRECTED BY SUCHIT GOLED
            </p>
          </div>

          {/* Filter Bar */}
          <div className="projects-filter-bar">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`filter-btn-pill ${filter === opt.id ? "active" : ""}`}
                onClick={() => setFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Posters Grid */}
        <div className="projects-poster-grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="streaming-poster-card"
              style={{ background: getPosterGradient(project.id) }}
            >
              {/* Top Banner Bar */}
              <div className="poster-top-bar">
                <span className="poster-episode-tag">{project.episode}</span>
                <span className="poster-category-tag">{project.category}</span>
              </div>

              {/* Poster Visual Backdrop */}
              <div className="poster-artwork-area">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={process.env.PUBLIC_URL + project.images[0].src}
                    alt={project.title}
                    className="poster-preview-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="poster-circuit-pattern" aria-hidden="true" />
                )}
                <div className="poster-gradient-blend" />
              </div>

              {/* Card Meta Content */}
              <div className="poster-content-box">
                <h3 className="poster-title">{project.title}</h3>
                <h4 className="poster-subtitle">{project.subtitle}</h4>

                <p className="poster-tagline">{project.tagline}</p>

                {/* Badges */}
                <div className="poster-badges-row">
                  {project.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="poster-badge-chip">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="poster-actions-row">
                  <Link
                    to={`/project/${project.id}`}
                    className="netflix-btn-red poster-play-btn"
                  >
                    <FaPlay className="action-icon" />
                    <span>Watch Case Study</span>
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poster-circle-btn"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}

                  <Link
                    to={`/project/${project.id}`}
                    className="poster-circle-btn"
                    title="Detailed Specifications"
                    aria-label="Detailed Specifications"
                  >
                    <FaInfoCircle />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
