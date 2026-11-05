import React, { useRef } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function ContinueExploring() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const offset = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleCardClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="continue-exploring-section" aria-labelledby="continue-exploring-heading">
      <div className="section-container">
        <div className="exploring-header-row">
          <h2 id="continue-exploring-heading" className="section-shelf-heading">
            Continue Exploring
          </h2>
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll("left")}
              aria-label="Scroll left in episodes"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll("right")}
              aria-label="Scroll right in episodes"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="exploring-carousel-track" ref={carouselRef}>
          {portfolioData.continueExploring.map((item) => (
            <button
              key={item.id}
              type="button"
              className="episode-explore-card"
              style={{
                background: item.gradient,
                boxShadow: `0 8px 24px ${item.glowColor}`
              }}
              onClick={() => handleCardClick(item.target)}
              aria-label={`Jump to ${item.title}`}
            >
              {/* Top Row: Episode number & Play icon */}
              <div className="episode-card-top">
                <span className="episode-tag">{item.episode}</span>
                <span className="episode-play-icon" aria-hidden="true">
                  <FaPlay />
                </span>
              </div>

              {/* Title */}
              <h3 className="episode-card-title">{item.title}</h3>

              {/* Red Watch Progress Bar (Netflix signature detail) */}
              <div className="episode-progress-bar" aria-hidden="true">
                <div className="episode-progress-fill" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
