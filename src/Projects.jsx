import { useNavigate } from "react-router-dom";


function Projects() {
    const navigate = useNavigate();
    return (
        <div className="Projects">
            
            <section className="projects" id="projects">
        <h2>Projects</h2>
                <div className="project-card featured-project">
                    <div className="project-image">
                        🏥
                    </div>
                    <div className="project-content">



                        <h3>AI + IoT Smart Bandage</h3>

                        <p>
                            Smart wound monitoring system using ESP32,
                            BLE connectivity and AI-assisted healthcare.
                        </p>

                        <div className="tech">
                            <span>ESP32</span>
                            <span>AI</span>
                            <span>IoT</span>
                            <span>BLE</span>
                        </div>

                        <div className="project-actions">
                            <button className="github-btn">
                                GitHub
                            </button>

                            <button
                                className="details-btn"
                                onClick={() =>
                                    navigate("/project/ai-smart-bandage")
                                }
                            >
                                Details
                            </button>
                        </div>

                    </div>

                </div>

                {/* Product Catalog */}

                <div className="project-card">

                    <div className="project-image">
                        🤖
                    </div>
                    <div className="project-content">

                        <h3>Product Catalog Generator</h3>

                        <p>
                            AI-powered product catalog generation using
                            image processing and intelligent content generation.
                        </p>

                        <div className="tech">
                            <span>Python</span>
                            <span>OpenCV</span>
                            <span>AI</span>
                        </div>
                        <div className="project-actions">
                            <button
                                className="github-btn"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/suchit-goled/Product-Management",
                                        "_blank"
                                    )
                                }
                            >
                                GitHub
                            </button>

                            <button className="details-btn">
                                Details
                            </button>
                        </div>

                    </div>

                </div>

                {/* Smart Inhaler */}

                <div className="project-card">

                    <div className="project-image">
                        🌍
                    </div>
                    <div className="project-content">

                        <h3>Smart Inhaler</h3>

                        <p>
                            Air quality monitoring device with GPS,
                            alerts and mobile connectivity.
                        </p>

                        <div className="tech">
                            <span>Arduino</span>
                            <span>MQ135</span>
                            <span>GPS</span>
                        </div>
                        <div className="project-actions">
                            <button
                                className="github-btn"
                                onClick={() =>
                                    window.open(
                                        "",
                                        "_blank"
                                    )
                                }
                            >
                                GitHub
                            </button>

                            <button className="details-btn">
                                Details
                            </button>
                        </div>

                    </div>

                </div>

                {/* Electronova */}

                <div className="project-card">

                    <div className="project-image">
                        🛒
                    </div>

                    <div className="project-content">

                        <h3>Electronova</h3>

                        <p>
                            MERN stack electronics e-commerce platform
                            with product management, admin dashboard
                            and responsive design.
                        </p>

                        <div className="tech">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Express</span>
                        </div>
                        <div className="project-actions">
                            <button
                                className="github-btn"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/suchit-goled/Project",
                                        "_blank"
                                    )
                                }
                            >
                                GitHub
                            </button>

                            <button className="details-btn">
                                Details
                            </button>
                        </div>

                    </div>

                </div>



            </section>
        </div>
    );
}

export default Projects;