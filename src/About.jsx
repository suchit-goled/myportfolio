import { motion } from "framer-motion";
import { FaMicrochip, FaLaptopCode, FaBrain, FaAward, FaGraduationCap } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section-container" aria-label="About Suchit Goled">
      <div className="section-header">
        <div className="section-tag">
          <FaGraduationCap /> Engineering Profile
        </div>
        <h2 className="section-title">
          Bridging <span>Hardware & Software</span>
        </h2>
        <p className="section-subtitle">
          Connecting physical sensors and embedded firmware with modern cloud services, scalable full-stack architectures, and practical AI.
        </p>
      </div>

      <div className="about-grid">
        {/* Narrative Card */}
        <motion.div
          className="about-narrative-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3>Electronics Engineer with a Software Builder Mindset</h3>
            <p>
              I am an <strong>Electronics and Communication Engineering</strong> student at{" "}
              <strong>Acharya Institute of Technology, Bangalore</strong> (Class of 2026). My technical journey
              sits at the intersection of embedded hardware engineering, full-stack web applications, and artificial intelligence.
            </p>
            <p>
              Rather than treating hardware and software as isolated silos, I specialize in end-to-end integration:
              from soldering biosensor circuits and writing low-level ESP32 / Arduino C++ firmware, to designing
              responsive React frontends, robust Node/Express microservices, and LangGraph-driven AI agent workflows.
            </p>
            <p>
              Whether competing in 12-hour high-pressure city hackathons like <em>Build for Bengaluru</em> or developing
              clinical healthcare monitoring prototypes like the <em>AI-Powered Smart Bandage</em>, I focus on building
              reliable, human-centered technology with real-world utility.
            </p>
          </div>

          {/* Three Engineering Pillars */}
          <div className="about-pillars-row">
            <div className="pillar-item">
              <div className="pillar-icon">
                <FaMicrochip />
              </div>
              <div className="pillar-title">Embedded & IoT</div>
              <div className="pillar-desc">ESP32, BLE telemetry, Arduino, analog biosensors & particulate detection.</div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <FaLaptopCode />
              </div>
              <div className="pillar-title">MERN Full-Stack</div>
              <div className="pillar-desc">Modern React.js, Express microservices, MongoDB aggregations & REST APIs.</div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <FaBrain />
              </div>
              <div className="pillar-title">Applied AI & Vision</div>
              <div className="pillar-desc">LangGraph multi-agent systems, OpenCV image analysis & prompt workflows.</div>
            </div>
          </div>
        </motion.div>

        {/* Stats & Key Metrics Grid */}
        <div className="about-stats-grid">
          {personal.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </motion.div>
          ))}

          {/* Location & Institution Highlight Card */}
          <motion.div
            className="stat-card"
            style={{ gridColumn: "span 2", background: "var(--bg-card)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div style={{ color: "var(--teal-light)", fontSize: "1.2rem" }}>
                <FaAward />
              </div>
              <div style={{ fontWeight: "700", color: "var(--text-primary)", fontSize: "1rem" }}>
                Acharya Institute of Technology • ECE
              </div>
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Undergraduate program focused on Embedded System Design, Signal Processing, Computer Networks, and Object-Oriented Software.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
