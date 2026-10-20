import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { portfolioData } from "./data/portfolioData";

function Footer() {
  const { personal } = portfolioData;

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
    <footer className="footer-wrap" role="contentinfo" aria-label="Site Footer">
      <div className="footer-inner">
        {/* Brand Summary */}
        <div className="footer-brand">
          <h4>{personal.name}</h4>
          <p>
            Electronics and Communication Engineering student at Acharya Institute of Technology, Bangalore.
            Engineering full-stack web platforms, IoT biosensors, and AI workflows.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
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
              aria-label="Email Suchit"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Section Navigation */}
        <div className="footer-nav-col">
          <h5>Navigation</h5>
          <ul>
            <li>
              <button onClick={() => handleNavClick("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("about")}>About Me</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("experience")}>Experience & Education</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("projects")}>Featured Projects</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("skills")}>Technical Skills</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("contact")}>Contact</button>
            </li>
          </ul>
        </div>

        {/* Deep Pages & Resources */}
        <div className="footer-nav-col">
          <h5>Credentials & Links</h5>
          <ul>
            <li>
              <Link to="/certificates">Certificates & Hackathons</Link>
            </li>
            <li>
              <Link to="/github">GitHub Activity</Link>
            </li>
            <li>
              <Link to="/project/ai-smart-bandage">AI Smart Bandage</Link>
            </li>
            <li>
              <Link to="/project/electronova">Electronova MERN Platform</Link>
            </li>
            <li>
              <Link to="/project/product-catalog">AI Catalog Generator</Link>
            </li>
            <li>
              <a
                href={process.env.PUBLIC_URL + personal.resume}
                download="Suchit_Goled_Resume.pdf"
                style={{ color: "var(--teal-light)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <FaDownload style={{ fontSize: "0.8rem" }} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="footer-bottom-bar">
        <div>
          © {new Date().getFullYear()} Suchit Goled. Built with React & modern web engineering standards.
        </div>
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top of page"
        >
          <span>Back to Top</span>
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
