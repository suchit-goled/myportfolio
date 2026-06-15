
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        Open to internships, collaborations,
        research opportunities and exciting projects.
      </p>

      <div className="contact-grid">

        <a
          href="mailto:suchitgoled@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />
          <h3>Email</h3>
          <span>suchitgoled@gmail.com</span>
        </a>

        <a
          href="https://github.com/suchit-goled"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <h3>GitHub</h3>
          <span>View Projects</span>
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <span>Let's Network</span>
        </a>

        <a
          href="tel:+91 7676716597"
          className="contact-card"
        >
          <FaPhone />
          <h3>Phone</h3>
          <span>Call Me</span>
        </a>

      </div>

    </section>
  );
}

export default Contact;