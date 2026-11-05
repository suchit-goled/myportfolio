import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { portfolioData } from "./data/portfolioData";

export default function Footer() {
  const { personal, branding } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="netflix-footer" role="contentinfo" aria-label="Site Footer">
      <div className="section-container">
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand-box">
            <div className="footer-logo">
              <span className="brand-netflix-lead">{branding.leadWord}</span>
              <span className="brand-netflix-accent">{branding.accentWord}</span>
            </div>
            <p className="footer-tagline-text">{branding.tagline}</p>
            <p className="footer-bio-summary">
              Electronics & Communication Engineering · Full Stack Developer · IoT & Bio-Sensing Innovator.
              Acharya Institute of Technology, Bangalore.
            </p>

            <div className="footer-social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-social-btn"
                aria-label="Email Suchit"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">ORIGINALS CATALOGUE</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" onClick={() => handleNavClick("home")}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("projects")}>
                  Projects Showcase
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("journey")}>
                  My Journey
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("skills")}>
                  Technical Skills
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("top-moments")}>
                  Top Moments
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("full-story")}>
                  The Full Story
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("contact")}>
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          {/* Productions & Case Studies */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">FEATURED PRODUCTIONS</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/project/ai-smart-bandage">S01 E01 · AI Smart Bandage</Link>
              </li>
              <li>
                <Link to="/project/smart-inhaler">S01 E02 · Smart Inhaler System</Link>
              </li>
              <li>
                <Link to="/project/pharma-crm">S01 E03 · Pharmaceutical CRM</Link>
              </li>
              <li>
                <Link to="/project/product-catalog">S01 E04 · Product Catalog AI</Link>
              </li>
              <li>
                <Link to="/project/electronova">S01 E05 · ElectroMart MERN</Link>
              </li>
              <li>
                <Link to="/certificates">Verified Certifications</Link>
              </li>
              <li>
                <a
                  href={process.env.PUBLIC_URL + personal.resume}
                  download="Suchit_Goled_Resume.pdf"
                  className="footer-resume-link"
                >
                  <FaDownload className="mini-icon" /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Suchit Goled · SUCHIT ORIGINALS. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
