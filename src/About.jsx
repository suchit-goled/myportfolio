
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="about-left">

          <div className="profile-image">
            SG
          </div>

        </div>

        <div className="about-right">

          <h2>About Me</h2>

          <p>
            I'm Suchit Goled, an Electronics and
            Communication Engineering student with a
            strong passion for Full Stack Development,
            Artificial Intelligence, and IoT Systems.
          </p>

          <p>
            I enjoy building intelligent products that
            bridge software and hardware, ranging from
            AI-powered healthcare systems to scalable
            web applications.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h3>4+</h3>
              <span>Major Projects</span>
            </div>

            <div className="stat-box">
              <h3>2</h3>
              <span>Hackathons</span>
            </div>

            <div className="stat-box">
              <h3>7.9</h3>
              <span>CGPA</span>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;