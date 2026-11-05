import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaBars, FaTimes, FaUserTie, FaCode, FaFlask, FaUsers, FaDownload } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";
import SearchModal from "./SearchModal";
import NotificationDropdown from "./NotificationDropdown";

export default function Navbar({ currentProfile, onOpenProfileModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setNotifOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getProfileIcon = () => {
    if (!currentProfile) return <FaUserTie />;
    switch (currentProfile.icon) {
      case "code":
        return <FaCode />;
      case "flask":
        return <FaFlask />;
      case "users":
        return <FaUsers />;
      default:
        return <FaUserTie />;
    }
  };

  return (
    <>
      <header className={`netflix-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo brand */}
          <Link
            to="/"
            className="navbar-brand-netflix"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="brand-netflix-lead">SUCHIT</span>
            <span className="brand-netflix-accent">ORIGINALS</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar-nav-desktop" aria-label="Main navigation">
            <button
              type="button"
              className={`nav-link-btn ${location.pathname === "/" && !location.hash ? "active" : ""}`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleNavClick("journey")}
            >
              My Journey
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleNavClick("top-moments")}
            >
              Achievements
            </button>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="navbar-actions-right">
            {/* Search Trigger */}
            <button
              type="button"
              className="nav-icon-action"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search catalogue"
              title="Search catalogue"
            >
              <FaSearch />
            </button>

            {/* Notification Bell */}
            <div className="notif-wrapper">
              <button
                type="button"
                className={`nav-icon-action ${notifOpen ? "active" : ""}`}
                onClick={() => setNotifOpen(!notifOpen)}
                aria-label="Open notifications"
                title="Notifications"
              >
                <FaBell />
                <span className="notif-dot" aria-hidden="true" />
              </button>
              <NotificationDropdown
                isOpen={notifOpen}
                onClose={() => setNotifOpen(false)}
              />
            </div>

            {/* Resume Button */}
            <a
              href={process.env.PUBLIC_URL + portfolioData.personal.resume}
              download="Suchit_Goled_Resume.pdf"
              className="nav-resume-pill"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <FaDownload className="resume-icon" />
              <span className="resume-text">Resume</span>
            </a>

            {/* Profile Avatar / Switcher Trigger */}
            <button
              type="button"
              className="nav-profile-avatar-btn"
              onClick={onOpenProfileModal}
              title={`Active Profile: ${currentProfile?.title || "Recruiter"} (Click to switch)`}
              aria-label={`Active Profile: ${currentProfile?.title || "Recruiter"}. Click to switch.`}
            >
              <img
                src={process.env.PUBLIC_URL + portfolioData.personal.avatar}
                alt="Suchit Goled Profile"
                className="profile-avatar-img"
              />
              <span className={`profile-status-indicator theme-${currentProfile?.theme || "red"}`}>
                {getProfileIcon()}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="mobile-menu-drawer" role="dialog" aria-modal="true">
            <div className="mobile-menu-header">
              <span className="brand-netflix-lead">SUCHIT</span>
              <span className="brand-netflix-accent">ORIGINALS</span>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mobile-menu-links">
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("home")}
              >
                Home
              </button>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </button>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("journey")}
              >
                My Journey
              </button>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </button>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("top-moments")}
              >
                Achievements
              </button>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("full-story")}
              >
                The Full Story
              </button>
              <button
                type="button"
                className="mobile-nav-link"
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </button>
            </div>

            <div className="mobile-menu-footer">
              <button
                type="button"
                className="mobile-profile-switch-btn"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenProfileModal();
                }}
              >
                <span>Switch Profile ({currentProfile?.title || "Recruiter"})</span>
              </button>

              <a
                href={process.env.PUBLIC_URL + portfolioData.personal.resume}
                download="Suchit_Goled_Resume.pdf"
                className="netflix-btn-red mobile-resume-btn"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
