import Accordion from "./Accordion";
import { useState } from "react";

function BandageProject() {
    const images = [
        {
            src: "/Bandage_Layers.png",
            title: "Layer Architecture"
        },
        {
            src: "/Testing_Sensors.png",
            title: "Sensor Testing"
        },
        {
            src: "/Presentation.jpg",
            title: "Project Presentation"
        },
        {
            src: "/Prototype.jpg",
            title: "Prototype"
        }
    ];

    const [selectedImage, setSelectedImage] = useState(0);
    const [open, setOpen] = useState(false);
    return (
        <div className="bandage-project">

            {/* Hero Section */}
            <div className="bandage-header">
                <h1>AI-Powered Smart Bandage</h1>

                <p>
                    Real-time wound monitoring system using ESP32,
                    IoT connectivity, electrochemical biosensors,
                    and Artificial Intelligence for infection detection.
                </p>

                <div className="bandage-tech-stack">
                    <span>ESP32</span>
                    <span>BLE</span>
                    <span>AI</span>
                    <span>IoT</span>
                    <span>ThingSpeak</span>
                    <span>Arduino</span>
                </div>
            </div>


            <Accordion title="Project Overview">
                <p>
                    The AI-Powered Smart Bandage is an intelligent healthcare
                    solution designed to continuously monitor wound conditions.
                </p>
            </Accordion>

            <Accordion title="Problem Statement">
                <p>
                    Traditional wound monitoring requires frequent manual
                    inspection by healthcare professionals.
                </p>
            </Accordion>
            <Accordion title="Project Gallery">

    {/* Gallery Grid */}

    <div className="gallery-grid">

        {images.map((image, index) => (

            <div
                key={index}
                className="gallery-card"
                onClick={() => {
                    setSelectedImage(index);
                    setOpen(true);
                }}
            >

                <img
                    src={image.src}
                    alt={image.title}
                />

                <h4>{image.title}</h4>

            </div>

        ))}

    </div>

    {/* Lightbox */}

    {open && (

        <div
            className="lightbox"
            onClick={() => setOpen(false)}
        >

            <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
            >

                <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].title}
                />

                <h3>{images[selectedImage].title}</h3>

                <div className="lightbox-buttons">

                    <button
                        onClick={() =>
                            setSelectedImage(
                                (selectedImage - 1 + images.length) % images.length
                            )
                        }
                    >
                        ⬅ Previous
                    </button>

                    <button
                        onClick={() =>
                            setSelectedImage(
                                (selectedImage + 1) % images.length
                            )
                        }
                    >
                        Next ➡
                    </button>

                </div>

            </div>

        </div>

    )}

</Accordion>

            <Accordion title="Key Features">
                <ul>
                    <li>Real-Time Monitoring</li>
                    <li>pH Detection</li>
                    <li>Temperature Monitoring</li>
                    <li>BLE Connectivity</li>
                    <li>AI-Based Analysis</li>
                </ul>
            </Accordion>

            <Accordion title="Hardware Components">
                <div className="hardware-grid">
                    <div className="hardware-card">ESP32</div>
                    <div className="hardware-card">pH Sensor</div>
                    <div className="hardware-card">Temperature Sensor</div>
                    <div className="hardware-card">H₂O₂ Sensor</div>
                </div>
            </Accordion>


            {/* Footer Buttons */}
            <div className="project-links">

                <a
                    href="https://github.com/suchit-goled"
                    target="_blank"
                    rel="noreferrer"
                >
                    View GitHub
                </a>

                <a href="/">
                    Back to Portfolio
                </a>

            </div>

        </div>
    );
}

export default BandageProject;