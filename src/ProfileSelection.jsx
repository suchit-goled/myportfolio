import React, { useState } from "react";
import { portfolioData } from "./data/portfolioData";
import { FaUserTie, FaCode, FaFlask, FaUsers, FaCheck } from "react-icons/fa";

export default function ProfileSelection({ onSelectProfile, onClose, initialProfile = "recruiter" }) {
  const [selected, setSelected] = useState(initialProfile);

  const getProfileIcon = (icon) => {
    switch (icon) {
      case "user":
        return <FaUserTie className="profile-card-icon" />;
      case "code":
        return <FaCode className="profile-card-icon" />;
      case "flask":
        return <FaFlask className="profile-card-icon" />;
      case "users":
      default:
        return <FaUsers className="profile-card-icon" />;
    }
  };

  const handleContinue = () => {
    const chosen = portfolioData.profiles.find((p) => p.id === selected) || portfolioData.profiles[0];
    if (typeof onSelectProfile === "function") {
      onSelectProfile(chosen);
    }
  };

  const handleSkip = () => {
    const defaultProfile = portfolioData.profiles.find((p) => p.id === "everyone") || portfolioData.profiles[3];
    if (typeof onSelectProfile === "function") {
      onSelectProfile(defaultProfile);
    }
  };

  return (
    <div className="profile-selection-overlay" role="dialog" aria-modal="true" aria-labelledby="whos-watching-title">
      <div className="profile-selection-container">
        {/* Brand Header */}
        <div className="profile-brand">
          <span className="brand-netflix-lead">SUCHIT</span>
          <span className="brand-netflix-accent">ORIGINALS</span>
        </div>

        {/* Heading */}
        <h1 id="whos-watching-title" className="whos-watching-heading">
          WHO'S WATCHING?
        </h1>

        {/* Profile Cards Grid */}
        <div className="profile-grid">
          {portfolioData.profiles.map((profile) => {
            const isSelected = selected === profile.id;
            return (
              <button
                key={profile.id}
                type="button"
                className={`profile-card profile-${profile.theme} ${isSelected ? "selected" : ""}`}
                onClick={() => setSelected(profile.id)}
                aria-pressed={isSelected}
              >
                {isSelected && (
                  <div className="profile-checkmark" aria-hidden="true">
                    <FaCheck />
                  </div>
                )}
                <div className={`profile-avatar-box theme-${profile.theme}`}>
                  {getProfileIcon(profile.icon)}
                </div>
                <h3 className="profile-title">{profile.title}</h3>
                <p className="profile-subtitle">{profile.subtitle}</p>
                <span className="profile-pill">{profile.pill}</span>
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button type="button" className="netflix-btn-red profile-continue-btn" onClick={handleContinue}>
            <span>Continue</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>

          <button type="button" className="profile-skip-link" onClick={handleSkip}>
            Skip and Explore Directly
          </button>
        </div>

        {/* Close button if triggered from navbar switch */}
        {onClose && (
          <button
            type="button"
            className="profile-modal-close"
            onClick={onClose}
            aria-label="Close Profile Switcher"
          >
            ✕
          </button>
        )}
      </div>

      {/* Netflix Cinematic Curved Red Swoop at the bottom */}
      <div className="netflix-cinematic-arc" aria-hidden="true" />
    </div>
  );
}
