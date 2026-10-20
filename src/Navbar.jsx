import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaDownload, FaBriefcase, FaCode, FaAward } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main Navigation">
      <Link to="/" className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div className="brand-badge" aria-hidden="true">SG</div>
        <div className="brand-text">
          Suchit<span>.dev</span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="nav-links-desktop">
        <button className="nav-item" onClick={() => handleNavClick("home")}>
          Home
        </button>
        <button className="nav-item" onClick={() => handleNavClick("about")}>
          About
        </button>
        <button className="nav-item" onClick={() => handleNavClick("experience")}>
          Experience
        </button>
        <button className="nav-item" onClick={() => handleNavClick("projects")}>
          Projects
        </button>
        <button className="nav-item" onClick={() => handleNavClick("skills")}>
          Skills
        </button>
        <Link
          to="/certificates"
          className={`nav-item ${location.pathname === "/certificates" ? "active" : ""}`}
        >
          Certificates
        </Link>
        <Link
          to="/github"
          className={`nav-item ${location.pathname === "/github" ? "active" : ""}`}
        >
          GitHub
        </Link>
        <button className="nav-item" onClick={() => handleNavClick("contact")}>
          Contact
        </button>
      </div>

      {/* Actions: Resume CTA & Mobile Toggle */}
      <div className="nav-actions">
        <a
          href={process.env.PUBLIC_URL + portfolioData.personal.resume}
          download="Suchit_Goled_Resume.pdf"
          className="nav-resume-btn"
          aria-label="Download Suchit Goled's Resume PDF"
        >
          <FaDownload aria-hidden="true" />
          <span>Resume</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <div
            className="mobile-nav-menu"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              <div className="mobile-nav-header">
                <div className="nav-brand">
                  <div className="brand-badge">SG</div>
                  <div className="brand-text">Suchit<span>.dev</span></div>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="mobile-nav-links">
                <button className="mobile-nav-item" onClick={() => handleNavClick("home")}>
                  Home
                </button>
                <button className="mobile-nav-item" onClick={() => handleNavClick("about")}>
                  About
                </button>
                <button className="mobile-nav-item" onClick={() => handleNavClick("experience")}>
                  <FaBriefcase /> Experience & Education
                </button>
                <button className="mobile-nav-item" onClick={() => handleNavClick("projects")}>
                  <FaCode /> Projects
                </button>
                <button className="mobile-nav-item" onClick={() => handleNavClick("skills")}>
                  Skills
                </button>
                <Link
                  to="/certificates"
                  className="mobile-nav-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaAward /> Certificates
                </Link>
                <Link
                  to="/github"
                  className="mobile-nav-item"
                  onClick={() => setMenuOpen(false)}
                >
                  GitHub Analytics
                </Link>
                <button className="mobile-nav-item" onClick={() => handleNavClick("contact")}>
                  Contact
                </button>
              </div>
            </div>

            <div className="mobile-nav-footer">
              <a
                href={process.env.PUBLIC_URL + portfolioData.personal.resume}
                download="Suchit_Goled_Resume.pdf"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
