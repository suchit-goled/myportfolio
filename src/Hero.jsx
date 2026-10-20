import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaMicrochip, FaReact, FaBrain } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function Hero() {
  const { personal } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="section-container" style={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
        <div className="hero-grid">
          {/* Left Column: Narrative & Actions */}
          <div className="hero-content">
            <div className="hero-badge-pill">
              <span className="beacon-dot" aria-hidden="true"></span>
              <span>{personal.availability}</span>
            </div>

            <p className="hero-intro">
              Hello, I'm
            </p>

            <h1 className="hero-title">
              <span className="gradient-name">{personal.name}</span>
            </h1>

            <div className="hero-dynamic-role" aria-label="Specialization">
              <span>Focusing on</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Development",
                  2200,
                  "IoT & Embedded Systems",
                  2200,
                  "Real-Time Biosensors",
                  2200,
                  "AI & LangGraph Systems",
                  2200,
                  "Hardware-Software Integration",
                  2200
                ]}
                speed={50}
                repeat={Infinity}
                className="role-highlight"
              />
            </div>

            <p className="hero-description">
              Electronics and Communication Engineering student at <strong>Acharya Institute of Technology</strong>.
              I architect full-stack web applications with <strong>React, Node.js & MongoDB</strong> and engineer real-time
              hardware solutions with <strong>ESP32, biosensors & AI telemetry</strong>.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                <span>View Projects</span>
                <FaArrowRight aria-hidden="true" />
              </button>

              <a
                href={process.env.PUBLIC_URL + personal.resume}
                download="Suchit_Goled_Resume.pdf"
                className="btn-secondary"
              >
                <FaDownload aria-hidden="true" />
                <span>Resume</span>
              </a>

              <button
                className="btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="hero-social-row">
              <span className="hero-social-label">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Visual Showcase */}
          <div className="hero-visual">
            <div className="hero-avatar-frame">
              <img
                src={process.env.PUBLIC_URL + personal.avatar}
                alt={personal.name}
                loading="eager"
              />
              <div className="avatar-overlay-gradient"></div>
              <div className="avatar-caption">
                <div>
                  <div className="avatar-caption-title">Suchit Goled</div>
                  <div className="avatar-caption-sub">ECE • Full Stack • IoT</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Based in</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#f8fafc" }}>Bangalore, IN</div>
                </div>
              </div>
            </div>

            {/* Floating Context Chips */}
            <div className="floating-chip chip-top-left" aria-hidden="true">
              <div className="chip-icon">
                <FaReact />
              </div>
              <div className="chip-info">
                <strong>Full Stack</strong>
                <span>MERN Architecture</span>
              </div>
            </div>

            <div className="floating-chip chip-bottom-right" aria-hidden="true">
              <div className="chip-icon">
                <FaMicrochip />
              </div>
              <div className="chip-info">
                <strong>Embedded IoT</strong>
                <span>ESP32 & Sensors</span>
              </div>
            </div>

            <div className="floating-chip chip-mid-left" aria-hidden="true">
              <div className="chip-icon">
                <FaBrain />
              </div>
              <div className="chip-info">
                <strong>Applied AI</strong>
                <span>LangGraph & Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
