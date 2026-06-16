

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {
    FaReact,
    FaNodeJs,
    FaGithub,
} from "react-icons/fa";

import {
    SiMongodb,
    SiArduino,
} from "react-icons/si";

function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-left">

                <motion.div
                    className="status"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    🟢 Available for Opportunities
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    HELLO I'M
                </motion.h3>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    SUCHIT GOLED
                </motion.h1>

                <div className="animated-role">
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "IoT Innovator",
                            2000,
                            "AI Enthusiast",
                            2000,
                            "Problem Solver",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                <p>
                    Passionate about building intelligent solutions
                    using Artificial Intelligence, IoT, Cloud
                    Technologies and Full Stack Development.
                </p>

                <div className="hero-buttons">
                    <a
                        href="./Suchit_Resume1 (1).pdf"
                        download
                    >
                        <button className="primary-btn">
                            Download Resume
                        </button>
                    </a>

                    <button className="secondary-btn">
                        Contact Me
                    </button>
                </div>

            </div>

            <div className="hero-right">

                <div className="profile-circle">
                    <img
                        src="./Suchit.jpeg"
                        alt="Suchit Goled"
                    />
                </div>

                <div className="tech-card react">
                    <FaReact />
                    <span>React</span>
                </div>

                <div className="tech-card node">
                    <FaNodeJs />
                    <span>Node.js</span>
                </div>

                <div className="tech-card mongo">
                    <SiMongodb />
                    <span>MongoDB</span>
                </div>

                <div className="tech-card arduino">
                    <SiArduino />
                    <span>Arduino</span>
                </div>

                <div className="tech-card github">
                    <FaGithub />
                    <span>GitHub</span>
                </div>

            </div>

        </section>
    );
}

export default Hero;