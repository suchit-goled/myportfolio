
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>Suchit Goled</h3>

      <p>
        Building intelligent solutions with AI, IoT and Full Stack Development.
      </p>

      <div className="footer-socials">

        <a
          href="https://github.com/suchit-goled"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:suchitgoled@gmail.com"
        >
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © 2026 Suchit Goled. Built with React.
      </p>

    </footer>
  );
}

export default Footer;