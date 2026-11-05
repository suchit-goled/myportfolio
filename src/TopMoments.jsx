import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaTrophy, FaBriefcase, FaStar, FaMicrochip, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function TopMoments() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const offset = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const getMomentIcon = (iconName) => {
    switch (iconName) {
      case "trophy":
        return <FaTrophy className="moment-card-icon" />;
      case "briefcase":
        return <FaBriefcase className="moment-card-icon" />;
      case "star":
        return <FaStar className="moment-card-icon" />;
      case "cpu":
      default:
        return <FaMicrochip className="moment-card-icon" />;
    }
  };

  return (
    <section id="top-moments" className="top-moments-section" aria-labelledby="top-moments-heading">
      <div className="section-container">
        <div className="moments-header-row">
          <h2 id="top-moments-heading" className="section-shelf-heading">
            Top Moments
          </h2>
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll("left")}
              aria-label="Scroll left in moments"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scroll("right")}
              aria-label="Scroll right in moments"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Moments Cards Track */}
        <div className="moments-carousel-track" ref={carouselRef}>
          {portfolioData.topMoments.map((moment) => {
            const isInternalLink = moment.link.startsWith("/");
            return (
              <div key={moment.id} className="moment-card">
                <div className="moment-card-inner">
                  {/* Top Header: Icon + Category Badge */}
                  <div className="moment-header-row">
                    <div className="moment-icon-gold">{getMomentIcon(moment.icon)}</div>
                    <span className="moment-badge-gold">{moment.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="moment-title">{moment.title}</h3>

                  {/* Description */}
                  <p className="moment-description">{moment.description}</p>

                  {/* Card Action Link */}
                  {isInternalLink ? (
                    <Link to={moment.link} className="moment-card-cta">
                      Explore Case Study →
                    </Link>
                  ) : (
                    <a href={moment.link} className="moment-card-cta">
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
