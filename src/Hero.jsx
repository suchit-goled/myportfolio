import React, { useState } from "react";
import { FaPlay, FaFileAlt } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";
import IntroModal from "./IntroModal";

export default function Hero({ currentProfile }) {
  const [introOpen, setIntroOpen] = useState(false);
  const { branding, personal } = portfolioData;

  return (
    <>
      <section id="home" className="netflix-hero-section">
        {/* Background cinematic aura & ambient lighting */}
        <div className="hero-cinematic-backdrop">
          <div className="hero-red-glow" />
          <div className="hero-blue-ambient" />
          <div className="hero-vignette-overlay" />
        </div>

        <div className="hero-content-wrapper">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-typography-column">
            {/* The Series Label */}
            <div className="hero-series-badge">
              <span className="series-text">{branding.seriesLabel}</span>
              {currentProfile && currentProfile.id !== "everyone" && (
                <span className={`profile-personalized-tag theme-${currentProfile.theme}`}>
                  • {currentProfile.title} Mode
                </span>
              )}
            </div>

            {/* Main Title */}
            <h1 className="hero-main-title">{branding.heroTitle}</h1>

            {/* Subtitle */}
            <h2 className="hero-sub-title">{branding.heroSubtitle}</h2>

            {/* Narrative Description */}
            <p className="hero-lead-description">
              "{branding.heroDescription}"
            </p>

            {/* Action Buttons */}
            <div className="hero-button-group">
              <button
                type="button"
                className="netflix-btn-red hero-play-btn"
                onClick={() => setIntroOpen(true)}
                aria-label="Play Introduction to Suchit Goled"
              >
                <FaPlay className="btn-icon" aria-hidden="true" />
                <span>Play Introduction</span>
              </button>

              <a
                href={process.env.PUBLIC_URL + personal.resume}
                download="Suchit_Goled_Resume.pdf"
                className="netflix-btn-dark hero-resume-btn"
                aria-label="View or download Suchit Goled's Resume PDF"
              >
                <FaFileAlt className="btn-icon" aria-hidden="true" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cinematic Portrait */}
          <div className="hero-portrait-column">
            <div className="portrait-frame-container">
              {/* Cinematic Red Rim Light Halo */}
              <div className="portrait-halo-light" />
              <div className="portrait-ambient-flare" />

              {/* Portrait Image */}
              <img
                src={process.env.PUBLIC_URL + personal.avatar}
                alt="Suchit Goled — Electronics & Communication Engineer and Full Stack Developer"
                className="hero-cinematic-img"
                loading="eager"
              />

              {/* Seamless gradient fade overlay at the bottom and sides */}
              <div className="portrait-blend-gradient" />
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Introduction Modal */}
      <IntroModal isOpen={introOpen} onClose={() => setIntroOpen(false)} />
    </>
  );
}
