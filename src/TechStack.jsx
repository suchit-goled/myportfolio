import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaMicrochip,
  FaBrain,
  FaServer,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaBluetooth,
  FaSmog,
  FaVial
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiArduino,
  SiC,
  SiCplusplus,
  SiMysql,
  SiOpencv,
  SiFramer
} from "react-icons/si";

function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", category: "Languages", level: "Primary Language", icon: <SiJavascript /> },
        { name: "Python", category: "Languages", level: "AI & Scripting", icon: <FaPython /> },
        { name: "C", category: "Languages", level: "Firmware / Embedded", icon: <SiC /> },
        { name: "C++", category: "Languages", level: "Microcontrollers / OOP", icon: <SiCplusplus /> },
        { name: "SQL", category: "Languages", level: "Relational Queries", icon: <SiMysql /> }
      ]
    },
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        { name: "React.js", category: "Frontend", level: "Component Architecture", icon: <FaReact /> },
        { name: "HTML5", category: "Frontend", level: "Semantic Markup", icon: <FaHtml5 /> },
        { name: "CSS3 / Modern CSS", category: "Frontend", level: "Responsive Flex/Grid", icon: <FaCss3Alt /> },
        { name: "Framer Motion", category: "Frontend", level: "Interaction Design", icon: <SiFramer /> }
      ]
    },
    {
      id: "backend",
      title: "Backend & Data",
      skills: [
        { name: "Node.js", category: "Backend & Data", level: "Runtime Environment", icon: <FaNodeJs /> },
        { name: "Express.js", category: "Backend & Data", level: "REST Microservices", icon: <SiExpress /> },
        { name: "MongoDB", category: "Backend & Data", level: "Document Storage", icon: <SiMongodb /> },
        { name: "MySQL", category: "Backend & Data", level: "Relational DB", icon: <SiMysql /> },
        { name: "RESTful APIs", category: "Backend & Data", level: "System Integration", icon: <FaServer /> }
      ]
    },
    {
      id: "iot",
      title: "Embedded & IoT",
      skills: [
        { name: "ESP32", category: "Embedded & IoT", level: "Wi-Fi & BLE Telemetry", icon: <FaMicrochip /> },
        { name: "Arduino Uno", category: "Embedded & IoT", level: "Hardware Interfacing", icon: <SiArduino /> },
        { name: "BLE Connectivity", category: "Embedded & IoT", level: "Low Energy Protocol", icon: <FaBluetooth /> },
        { name: "MQ135 Gas Sensor", category: "Embedded & IoT", level: "Air Quality Analysis", icon: <FaSmog /> },
        { name: "Electrochemical Biosensors", category: "Embedded & IoT", level: "Wound Monitoring", icon: <FaVial /> }
      ]
    },
    {
      id: "ai",
      title: "AI & Tools",
      skills: [
        { name: "LangGraph", category: "AI & Tools", level: "Agentic Workflows", icon: <FaBrain /> },
        { name: "OpenCV", category: "AI & Tools", level: "Computer Vision", icon: <SiOpencv /> },
        { name: "Git", category: "AI & Tools", level: "Version Control", icon: <FaGitAlt /> },
        { name: "GitHub", category: "AI & Tools", level: "CI/CD & Collaboration", icon: <FaGithub /> },
        { name: "Arduino IDE", category: "AI & Tools", level: "Embedded Toolchain", icon: <SiArduino /> }
      ]
    }
  ];

  // Flattened skills for "all" filter
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const activeSkills =
    selectedCategory === "all"
      ? allSkills
      : skillCategories.find((cat) => cat.id === selectedCategory)?.skills || [];

  return (
    <section id="skills" className="section-container" aria-label="Technical Skills and Stack">
      <div className="section-header">
        <div className="section-tag">
          <FaCode /> Technical Competence
        </div>
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>
        <p className="section-subtitle">
          Hands-on proficiency across programming languages, web systems, database design, hardware microcontrollers, and machine learning tools.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="skills-nav-tabs" role="tablist" aria-label="Skill Categories">
        <button
          className={`skills-tab-pill ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
          role="tab"
          aria-selected={selectedCategory === "all"}
        >
          All Skills ({allSkills.length})
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`skills-tab-pill ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
            role="tab"
            aria-selected={selectedCategory === cat.id}
          >
            {cat.title} ({cat.skills.length})
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        className="skills-grid"
        layout
        transition={{ duration: 0.3 }}
      >
        {activeSkills.map((skill, idx) => (
          <motion.div
            key={`${skill.name}-${idx}`}
            className="skill-node-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.03 }}
            layout
          >
            <div className="skill-icon-wrap" aria-hidden="true">
              {skill.icon}
            </div>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-proficiency">{skill.level}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TechStack;
