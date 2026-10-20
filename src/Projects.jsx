import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaCode, FaStar } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function Projects() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const { projects } = portfolioData;

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="section-container" aria-label="Featured Engineering Projects">
      <div className="section-header">
        <div className="section-tag">
          <FaCode /> Portfolio Showcase
        </div>
        <h2 className="section-title">
          Featured <span>Engineering Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications spanning embedded healthcare IoT devices, production-grade MERN web platforms, and automated computer vision pipelines.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-bar" role="tablist" aria-label="Project Category Filters">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
          role="tab"
          aria-selected={filter === "all"}
        >
          All Projects ({projects.length})
        </button>
        <button
          className={`filter-btn ${filter === "iot" ? "active" : ""}`}
          onClick={() => setFilter("iot")}
          role="tab"
          aria-selected={filter === "iot"}
        >
          IoT & Hardware (2)
        </button>
        <button
          className={`filter-btn ${filter === "full stack" ? "active" : ""}`}
          onClick={() => setFilter("full stack")}
          role="tab"
          aria-selected={filter === "full stack"}
        >
          Full Stack (1)
        </button>
        <button
          className={`filter-btn ${filter === "ai" ? "active" : ""}`}
          onClick={() => setFilter("ai")}
          role="tab"
          aria-selected={filter === "ai"}
        >
          AI & Machine Learning (2)
        </button>
      </div>

      {/* Projects Grid */}
      <motion.div className="projects-cards-grid" layout>
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            className={`project-card ${project.featured ? "featured-card" : ""}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            layout
          >
            <div>
              <div className="project-card-header">
                <span className="project-category-tag">{project.category}</span>
                {project.featured && (
                  <span className="project-featured-badge">
                    <FaStar style={{ marginRight: "4px" }} /> Featured
                  </span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              <div className="project-tech-list">
                {project.technologies.slice(0, 5).map((tech, tIdx) => (
                  <span key={tIdx} className="project-tech-badge">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="project-tech-badge">
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>
            </div>

            <div className="project-card-actions">
              <button
                className="project-action-link primary"
                onClick={() => navigate(`/project/${project.id}`)}
                aria-label={`View full details for ${project.title}`}
              >
                <span>Full Details</span>
                <FaArrowRight aria-hidden="true" />
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-link secondary"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <FaGithub aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
