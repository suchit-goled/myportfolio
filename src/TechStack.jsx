import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBrain,
  FaLightbulb,
  FaMicrochip,
  FaVial,
  FaSmog
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiArduino,
  SiTensorflow,
  SiFlask,
  SiFastapi,
  SiOpencv,
  SiFramer
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { portfolioData } from "./data/portfolioData";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getTechIcon = (iconName) => {
    switch (iconName) {
      case "FaReact":
        return <FaReact className="skill-icon color-react" />;
      case "SiJavascript":
        return <SiJavascript className="skill-icon color-js" />;
      case "SiHtml5":
        return <SiHtml5 className="skill-icon color-html" />;
      case "SiCss":
      case "SiCss3":
        return <SiCss className="skill-icon color-css" />;
      case "SiTailwindcss":
        return <SiTailwindcss className="skill-icon color-tailwind" />;
      case "SiFramer":
        return <SiFramer className="skill-icon color-framer" />;
      case "FaNodeJs":
        return <FaNodeJs className="skill-icon color-node" />;
      case "SiExpress":
        return <SiExpress className="skill-icon color-express" />;
      case "SiFlask":
        return <SiFlask className="skill-icon color-flask" />;
      case "SiFastapi":
        return <SiFastapi className="skill-icon color-fastapi" />;
      case "SiMongodb":
        return <SiMongodb className="skill-icon color-mongo" />;
      case "SiMysql":
      case "FaDatabase":
        return <SiMysql className="skill-icon color-sql" />;
      case "FaPython":
        return <FaPython className="skill-icon color-python" />;
      case "SiTensorflow":
        return <SiTensorflow className="skill-icon color-tf" />;
      case "FaBrain":
        return <FaBrain className="skill-icon color-ai" />;
      case "SiOpencv":
        return <SiOpencv className="skill-icon color-cv" />;
      case "FaLightbulb":
        return <FaLightbulb className="skill-icon color-prompt" />;
      case "FaMicrochip":
        return <FaMicrochip className="skill-icon color-chip" />;
      case "SiArduino":
        return <SiArduino className="skill-icon color-arduino" />;
      case "FaVial":
        return <FaVial className="skill-icon color-sensor" />;
      case "FaSmog":
        return <FaSmog className="skill-icon color-sensor" />;
      case "FaGitAlt":
        return <FaGitAlt className="skill-icon color-git" />;
      case "FaGithub":
        return <FaGithub className="skill-icon color-github" />;
      case "VscVscode":
      case "SiVisualstudiocode":
      default:
        return <VscVscode className="skill-icon color-vscode" />;
    }
  };

  const categories = portfolioData.skills.categories;
  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="tech-stack-netflix-section" aria-labelledby="skills-heading">
      <div className="section-container">
        <div className="skills-header-row">
          <div>
            <h2 id="skills-heading" className="section-shelf-heading">
              MY SKILLS
            </h2>
            <p className="skills-shelf-subtitle">
              PRODUCTION STACKS & EMBEDDED SYSTEM DOMAINS
            </p>
          </div>

          {/* Filter Pills */}
          <div className="skills-filter-pills" role="tablist">
            <button
              type="button"
              className={`filter-pill-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
              role="tab"
              aria-selected={activeCategory === "all"}
            >
              All Domains
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.title.replace(" Development", "").replace(" & Storage", "").replace(" & Machine Learning", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Shelves */}
        <div className="skills-shelves-container">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-shelf">
              <div className="category-shelf-header">
                <h3 className="category-shelf-title">{category.title}</h3>
                <span className="category-shelf-count">{category.items.length} Technologies</span>
              </div>

              <div className="skill-cards-grid">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-card">
                    <div className="skill-icon-box">{getTechIcon(skill.icon)}</div>
                    <div className="skill-info-box">
                      <div className="skill-name-row">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level-badge">{skill.level}</span>
                      </div>
                      <p className="skill-desc-text">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
