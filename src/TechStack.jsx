

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiArduino
} from "react-icons/si";

function TechStack() {

  const techGroups = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React.js" }
      ]
    },

    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" }
      ]
    },

    {
      title: "Database",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB" }
      ]
    },

    {
      title: "Languages",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaPython />, name: "Python" }
      ]
    },

    {
      title: "Tools & IoT",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiArduino />, name: "Arduino" }
      ]
    }
  ];

  return (
    <section className="tech-stack" id="skills">

      <h2>Tech Stack</h2>

      {techGroups.map((group, index) => (
        <div className="tech-group" key={index}>

          <h3>{group.title}</h3>

          <div className="tech-tags">

            {group.skills.map((skill, i) => (
              <div className="tech-tag" key={i}>

                {skill.icon}

                <span>{skill.name}</span>

              </div>
            ))}

          </div>

        </div>
      ))}

    </section>
  );
}

export default TechStack;