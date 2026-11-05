import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function MyJourney() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const offset = direction === "left" ? -360 : 360;
      trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const renderVisual = (visualType) => {
    switch (visualType) {
      case "brain":
        return (
          <div className="journey-visual-art brain-visual" aria-hidden="true">
            <svg viewBox="0 0 100 80" className="visual-svg">
              <path
                d="M30,30 Q20,10 50,15 Q80,10 70,30 Q90,50 65,65 Q50,75 35,65 Q10,50 30,30 Z"
                fill="none"
                stroke="rgba(229,9,20,0.85)"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              <circle cx="50" cy="35" r="4" fill="#E50914" />
              <line x1="50" y1="35" x2="35" y2="25" stroke="#E50914" strokeWidth="1.5" />
              <line x1="50" y1="35" x2="65" y2="25" stroke="#E50914" strokeWidth="1.5" />
              <line x1="50" y1="35" x2="50" y2="55" stroke="#E50914" strokeWidth="1.5" />
              <circle cx="35" cy="25" r="3" fill="#FF4444" />
              <circle cx="65" cy="25" r="3" fill="#FF4444" />
              <circle cx="50" cy="55" r="3" fill="#FF4444" />
            </svg>
            <div className="visual-pulse red" />
          </div>
        );
      case "chip":
        return (
          <div className="journey-visual-art chip-visual" aria-hidden="true">
            <svg viewBox="0 0 100 80" className="visual-svg">
              <rect x="30" y="20" width="40" height="40" rx="4" fill="#0c1729" stroke="#00d2ff" strokeWidth="2" />
              <circle cx="50" cy="40" r="8" fill="#0070f3" />
              <line x1="15" y1="28" x2="30" y2="28" stroke="#00d2ff" strokeWidth="2" />
              <line x1="15" y1="40" x2="30" y2="40" stroke="#00d2ff" strokeWidth="2" />
              <line x1="15" y1="52" x2="30" y2="52" stroke="#00d2ff" strokeWidth="2" />
              <line x1="70" y1="28" x2="85" y2="28" stroke="#00d2ff" strokeWidth="2" />
              <line x1="70" y1="40" x2="85" y2="40" stroke="#00d2ff" strokeWidth="2" />
              <line x1="70" y1="52" x2="85" y2="52" stroke="#00d2ff" strokeWidth="2" />
            </svg>
            <div className="visual-pulse blue" />
          </div>
        );
      case "code":
        return (
          <div className="journey-visual-art code-visual" aria-hidden="true">
            <svg viewBox="0 0 100 80" className="visual-svg">
              <rect x="20" y="15" width="60" height="50" rx="6" fill="#150d2a" stroke="#a855f7" strokeWidth="2" />
              <line x1="28" y1="28" x2="48" y2="28" stroke="#c084fc" strokeWidth="2" />
              <line x1="28" y1="38" x2="65" y2="38" stroke="#c084fc" strokeWidth="2" />
              <line x1="28" y1="48" x2="55" y2="48" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="26" cy="21" r="1.5" fill="#ef4444" />
              <circle cx="31" cy="21" r="1.5" fill="#eab308" />
              <circle cx="36" cy="21" r="1.5" fill="#22c55e" />
            </svg>
            <div className="visual-pulse purple" />
          </div>
        );
      case "spark":
      default:
        return (
          <div className="journey-visual-art spark-visual" aria-hidden="true">
            <svg viewBox="0 0 100 80" className="visual-svg">
              <polygon points="50,15 54,32 71,36 54,40 50,57 46,40 29,36 46,32" fill="#fbbf24" opacity="0.9" />
              <circle cx="50" cy="36" r="3" fill="#ffffff" />
            </svg>
            <div className="visual-pulse amber" />
          </div>
        );
    }
  };

  return (
    <section id="journey" className="my-journey-section" aria-labelledby="journey-heading">
      <div className="section-container">
        <div className="journey-header-row">
          <div>
            <h2 id="journey-heading" className="section-shelf-heading">
              My Journey
            </h2>
            <p className="journey-shelf-subtitle">
              BUILDING REAL PRODUCTS. SOLVING REAL PROBLEMS.
            </p>
          </div>
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll("left")}
              aria-label="Scroll left in journey"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll("right")}
              aria-label="Scroll right in journey"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Journey Cards Carousel */}
        <div className="journey-carousel-track" ref={trackRef}>
          {portfolioData.journeyCards.map((card, idx) => (
            <div key={idx} className={`journey-card theme-${card.theme}`}>
              <div className="journey-card-top">
                <span className={`season-badge theme-${card.theme}`}>{card.season}</span>
                {renderVisual(card.visual)}
              </div>

              <div className="journey-card-content">
                <h3 className="journey-title">{card.title}</h3>
                <p className="journey-desc">{card.description}</p>

                {/* Technology tags */}
                <div className="journey-tags-row">
                  {card.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="journey-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Explore Link + Play Button */}
              <div className="journey-card-footer">
                <Link
                  to={`/project/${card.projectId}`}
                  className="journey-explore-btn"
                  aria-label={`Explore ${card.title} project`}
                >
                  <span className="btn-label">Explore Case Study</span>
                  <span className="journey-play-pill" aria-hidden="true">
                    <FaPlay />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
