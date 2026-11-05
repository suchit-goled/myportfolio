import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaBookOpen,
  FaCertificate,
  FaExternalLinkAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function FullStory() {
  const [activeCert, setActiveCert] = useState(null);

  const timelineEvents = [
    {
      id: "event-paper",
      year: "2026",
      type: "Research Paper Acceptance",
      icon: <FaBookOpen className="timeline-icon red" />,
      title: "ICoICET 2026 Research Acceptance",
      institution: "International Conference on Innovative Computing and Evolutionary Technologies",
      location: "Bangalore, India",
      description:
        "Authored and submitted research on 'AI-Powered Smart Bandage for Real-Time Wound Monitoring'. Accepted with minor revisions, validating the electrochemical bio-sensor integration and EfficientNet healing analysis.",
      badge: "RESEARCH PAPER",
      projectLink: "/project/ai-smart-bandage"
    },
    {
      id: "event-internship",
      year: "2026",
      type: "Industry Internship",
      icon: <FaBriefcase className="timeline-icon blue" />,
      title: "Full Stack Web Development Intern",
      institution: "Prinston Smart Engineers",
      location: "Bangalore, India",
      description:
        "Architected and deployed responsive frontend user interfaces and scalable backend services with React.js, Node.js, Express, and MongoDB. Built ElectroMart e-commerce with JWT auth and dynamic catalog.",
      badge: "FULL STACK INTERN",
      projectLink: "/project/electronova"
    },
    {
      id: "event-degree",
      year: "2022 – 2026",
      type: "Degree Program",
      icon: <FaGraduationCap className="timeline-icon gold" />,
      title: "B.Tech in Electronics & Communication Engineering",
      institution: "Acharya Institute of Technology",
      location: "Bangalore, Karnataka",
      description:
        "Consistent 7.9 CGPA across Embedded Systems, Microcontroller Architecture, Digital Signal Processing, Communication Networks, Data Structures, and Object-Oriented Programming.",
      badge: "CGPA 7.9 / 10"
    },
    {
      id: "event-hackathons",
      year: "2025",
      type: "Rapid Prototyping & AI Hackathons",
      icon: <FaTrophy className="timeline-icon purple" />,
      title: "Hackathon Successes: Bengaluru & Promptathon",
      institution: "City Innovation Council & IVIS Labs",
      location: "Bangalore, India",
      description:
        "IoT & Hardware Lead for Smart Inhaler (12-hour Build for Bengaluru Hackathon) and AI Developer for the automated Product Catalog Generator at Promptathon.",
      badge: "2 HACKATHONS",
      projectLink: "/project/smart-inhaler"
    },
    {
      id: "event-pu",
      year: "2020 – 2022",
      type: "Pre-University",
      icon: <FaGraduationCap className="timeline-icon cyan" />,
      title: "Pre-University Course (PCMB)",
      institution: "Konnur Science PU College",
      location: "Bagalkote, Karnataka",
      description:
        "Rigorous scientific curriculum covering Physics, Chemistry, Mathematics, and Biology with high academic distinction.",
      badge: "88.6% DISTINCTION"
    }
  ];

  return (
    <section id="full-story" className="full-story-section" aria-labelledby="story-heading">
      <div className="section-container">
        <div className="story-header-row">
          <div className="streaming-badge-red">EPISODIC TIMELINE</div>
          <h2 id="story-heading" className="section-shelf-heading">
            THE FULL STORY
          </h2>
          <p className="story-shelf-subtitle">
            AN ENGINEERING CHRONICLE · EDUCATION, RESEARCH & PRODUCTION
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="cinematic-timeline-track">
          {timelineEvents.map((item, index) => (
            <div key={item.id} className="timeline-story-node">
              {/* Timeline Marker with Date */}
              <div className="timeline-date-marker">
                <span className="marker-year">{item.year}</span>
                <div className="marker-bullet">{item.icon}</div>
              </div>

              {/* Timeline Card */}
              <div className="timeline-story-card">
                <div className="story-card-header">
                  <span className="story-badge-pill">{item.badge}</span>
                  <span className="story-location-tag">
                    <FaMapMarkerAlt className="mini-icon" /> {item.location}
                  </span>
                </div>

                <h3 className="story-event-title">{item.title}</h3>
                <h4 className="story-institution-name">{item.institution}</h4>

                <p className="story-event-text">{item.description}</p>

                {item.projectLink && (
                  <Link to={item.projectLink} className="story-project-link">
                    <span>View Project Case Study</span>
                    <FaExternalLinkAlt className="mini-icon" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Credentials Showcase */}
        <div className="story-credentials-shelf">
          <div className="credentials-shelf-header">
            <h3 className="shelf-sub-heading">
              <FaCertificate className="cred-icon red" /> Verified Professional Certifications
            </h3>
            <Link to="/certificates" className="all-certs-link">
              View All 8 Certificates Gallery →
            </Link>
          </div>

          <div className="story-certs-grid">
            {portfolioData.certificates.slice(0, 4).map((cert) => (
              <div
                key={cert.id}
                className="cert-mini-card"
                onClick={() => setActiveCert(cert)}
              >
                <div className="cert-thumb-container">
                  <img
                    src={process.env.PUBLIC_URL + cert.image}
                    alt={cert.title}
                    className="cert-mini-thumb"
                    loading="lazy"
                  />
                  <div className="cert-thumb-tint" />
                </div>
                <div className="cert-meta">
                  <span className="cert-issuer-tag">{cert.issuer}</span>
                  <h4 className="cert-card-title">{cert.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {activeCert && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close certificate"
            >
              ✕
            </button>
            <img
              src={process.env.PUBLIC_URL + activeCert.image}
              alt={activeCert.title}
              className="lightbox-img"
            />
            <p className="lightbox-caption">
              <strong>{activeCert.title}</strong> — {activeCert.issuer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
