import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "./data/portfolioData";
import { FaSearch, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Search projects
  const matchingProjects = cleanQ
    ? portfolioData.projects.filter(
        (p) =>
          p.title.toLowerCase().includes(cleanQ) ||
          p.tagline.toLowerCase().includes(cleanQ) ||
          p.technologies.some((t) => t.toLowerCase().includes(cleanQ)) ||
          p.badges.some((b) => b.toLowerCase().includes(cleanQ))
      )
    : [];

  // Search skills
  const matchingSkills = cleanQ
    ? portfolioData.skills.categories.flatMap((cat) =>
        cat.items
          .filter(
            (item) =>
              item.name.toLowerCase().includes(cleanQ) ||
              item.desc?.toLowerCase().includes(cleanQ) ||
              cat.title.toLowerCase().includes(cleanQ)
          )
          .map((item) => ({ ...item, category: cat.title }))
      )
    : [];

  // Search achievements
  const matchingMoments = cleanQ
    ? portfolioData.topMoments.filter(
        (m) =>
          m.title.toLowerCase().includes(cleanQ) ||
          m.category.toLowerCase().includes(cleanQ) ||
          m.description.toLowerCase().includes(cleanQ)
      )
    : [];

  const totalResults =
    matchingProjects.length + matchingSkills.length + matchingMoments.length;

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <FaSearch className="search-input-icon" />
          <input
            ref={inputRef}
            type="search"
            className="search-input-field"
            placeholder="Search projects, skills, technologies, achievements..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search portfolio"
          />
          <button
            type="button"
            className="search-close-btn"
            onClick={onClose}
            aria-label="Close search"
          >
            <FaTimes />
          </button>
        </div>

        <div className="search-modal-body">
          {cleanQ === "" ? (
            <div className="search-empty-state">
              <p className="search-hint-lead">Search SUCHIT ORIGINALS catalogue</p>
              <div className="search-quick-tags">
                <span className="quick-tag-label">Try searching:</span>
                {["Smart Bandage", "React", "ESP32", "LangGraph", "Full Stack", "ICoICET"].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="quick-tag-pill"
                      onClick={() => setQuery(tag)}
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="search-no-results">
              <p>No results found for "{query}".</p>
              <p className="search-sub-hint">Try searching for keywords like "Python", "IoT", "Bandage", or "MERN".</p>
            </div>
          ) : (
            <div className="search-results-list">
              {matchingProjects.length > 0 && (
                <div className="search-group">
                  <h4 className="search-group-title">Projects ({matchingProjects.length})</h4>
                  {matchingProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/project/${p.id}`}
                      className="search-result-item"
                      onClick={onClose}
                    >
                      <div className="result-main">
                        <span className="result-badge">{p.episode}</span>
                        <span className="result-title">{p.title}</span>
                      </div>
                      <span className="result-desc">{p.subtitle}</span>
                      <FaExternalLinkAlt className="result-arrow" />
                    </Link>
                  ))}
                </div>
              )}

              {matchingSkills.length > 0 && (
                <div className="search-group">
                  <h4 className="search-group-title">Skills & Technologies ({matchingSkills.length})</h4>
                  <div className="search-skills-chips">
                    {matchingSkills.map((s, idx) => (
                      <div key={idx} className="search-skill-chip">
                        <span className="skill-chip-name">{s.name}</span>
                        <span className="skill-chip-cat">({s.category})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingMoments.length > 0 && (
                <div className="search-group">
                  <h4 className="search-group-title">Top Moments ({matchingMoments.length})</h4>
                  {matchingMoments.map((m) => (
                    <div key={m.id} className="search-result-item moment-item">
                      <div className="result-main">
                        <span className="result-badge gold">{m.category}</span>
                        <span className="result-title">{m.title}</span>
                      </div>
                      <span className="result-desc">{m.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
