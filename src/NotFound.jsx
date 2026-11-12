import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaFolderOpen, FaCertificate, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found-page-wrapper">
      <div className="not-found-container">
        {/* Brand */}
        <Link to="/" className="navbar-brand-netflix not-found-brand">
          <span className="brand-netflix-lead">SUCHIT</span>
          <span className="brand-netflix-accent">ORIGINALS</span>
        </Link>

        {/* 404 Glitch Badge */}
        <div className="not-found-badge">
          <FaExclamationTriangle className="not-found-badge-icon" />
          <span>ERROR 404 • STREAM NOT FOUND</span>
        </div>

        {/* Big Heading */}
        <h1 className="not-found-title">LOST IN THE STREAM?</h1>

        {/* Description */}
        <p className="not-found-desc">
          The requested title or route <code className="not-found-path">{location.pathname}</code> is currently
          unavailable, has been moved, or does not exist in the catalogue.
        </p>

        {/* Action Buttons */}
        <div className="not-found-actions">
          <Link to="/" className="netflix-btn-red not-found-btn">
            <FaHome />
            <span>Return to Home Stage</span>
          </Link>
          <Link to="/#projects" className="netflix-btn-secondary not-found-btn">
            <FaFolderOpen />
            <span>Browse Originals & Projects</span>
          </Link>
          <Link to="/certificates" className="netflix-btn-secondary not-found-btn">
            <FaCertificate />
            <span>View Certifications</span>
          </Link>
          <Link to="/#contact" className="netflix-btn-secondary not-found-btn">
            <FaEnvelope />
            <span>Contact Suchit Directly</span>
          </Link>
        </div>

        {/* Diagnostic Meta */}
        <div className="not-found-meta-card">
          <div className="meta-item">
            <span className="meta-label">Path:</span>
            <span className="meta-value">{location.pathname}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status:</span>
            <span className="meta-value text-red">404 (Not Found)</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Developer:</span>
            <span className="meta-value">Suchit Goled • Bangalore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
