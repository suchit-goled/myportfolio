import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowLeft,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaCode,
  FaLayerGroup,
  FaTerminal,
  FaFolderOpen
} from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

function GitHubStats() {
  const { personal } = portfolioData;

  const repositories = [
    {
      name: "Project (Electronova)",
      desc: "Full-stack electronics shopping platform with dynamic product catalog, admin management & MongoDB.",
      lang: "JavaScript / MERN",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      url: "https://github.com/suchit-goled/Project"
    },
    {
      name: "Product-Management",
      desc: "AI-powered product catalog generator using OpenCV image processing and prompt engineering.",
      lang: "Python / AI",
      tech: ["Python", "OpenCV", "Prompt Engineering"],
      url: "https://github.com/suchit-goled/Product-Management"
    },
    {
      name: "Pharmaceutical-CRM",
      desc: "Intelligent agentic customer relationship management application orchestrating LangGraph and React.",
      lang: "Python / LangGraph",
      tech: ["LangGraph", "AI Agents", "React"],
      url: "https://github.com/suchit-goled/Pharmaceutical-CRM"
    },
    {
      name: "myportfolio",
      desc: "Personal developer portfolio engineered with React 19, Framer Motion, and modern UI tokens.",
      lang: "React / CSS3",
      tech: ["React 19", "Framer Motion", "Jest"],
      url: "https://github.com/suchit-goled/myportfolio"
    }
  ];

  const githubMetrics = [
    { label: "Public Repositories", value: "10+", icon: <FaFolderOpen /> },
    { label: "Core Tech Focus", value: "MERN • IoT • AI", icon: <FaLayerGroup /> },
    { label: "Primary Languages", value: "JavaScript • Python • C++", icon: <FaCode /> },
    { label: "Developer Workflow", value: "Git • GitHub • VS Code", icon: <FaTerminal /> }
  ];

  return (
    <div className="github-stats-container">
      {/* Back to Home Breadcrumb */}
      <Link to="/" className="back-nav-link">
        <FaArrowLeft aria-hidden="true" />
        <span>Back to Portfolio</span>
      </Link>

      <div className="section-header" style={{ marginBottom: "40px" }}>
        <div className="section-tag">
          <FaGithub /> Open Source & Activity
        </div>
        <h1 className="section-title">
          GitHub <span>Statistics & Activity</span>
        </h1>
        <p className="section-subtitle">
          Real-time metrics, language distributions, and featured repositories hosted under @suchit-goled.
        </p>
      </div>

      {/* High-Level Developer Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginBottom: "36px" }}>
        {githubMetrics.map((metric, idx) => (
          <div key={idx} className="stat-card" style={{ padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--teal-light)", fontSize: "1.2rem", marginBottom: "8px" }}>
              {metric.icon}
              <span style={{ fontSize: "0.82rem", fontWeight: "700", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                {metric.label}
              </span>
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--text-primary)" }}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Readme Stats Embeds */}
      <div className="github-cards-grid">
        <motion.div
          className="github-embed-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=suchit-goled&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0c1724&title_color=2dd4bf&icon_color=14b8a6&text_color=94a3b8"
            alt="Suchit Goled GitHub Stats"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>

        <motion.div
          className="github-embed-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=suchit-goled&layout=compact&theme=tokyonight&hide_border=true&bg_color=0c1724&title_color=2dd4bf&text_color=94a3b8"
            alt="Suchit Goled Top Languages"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
      </div>

      {/* Verified Core Repositories Section */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "20px" }}>
          Key Code Repositories
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {repositories.map((repo, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--teal-light)", fontWeight: "700" }}>
                    {repo.lang}
                  </span>
                  <FaCodeBranch style={{ color: "var(--text-muted)", fontSize: "0.85rem" }} />
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
                  {repo.name}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "16px" }}>
                  {repo.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {repo.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill" style={{ fontSize: "0.72rem" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary btn-sm"
                style={{ width: "fit-content" }}
              >
                <span>Browse Code</span>
                <FaExternalLinkAlt style={{ fontSize: "0.75rem" }} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub Call to Action */}
      <div className="github-direct-cta">
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          <FaGithub />
          <span>Follow @suchit-goled on GitHub</span>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default GitHubStats;
