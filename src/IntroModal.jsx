import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaTimes, FaVolumeUp, FaVolumeMute, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData } from "./data/portfolioData";

export default function IntroModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const introSteps = [
    {
      title: "01. FOUNDATION IN ELECTRONICS",
      tagline: "Acharya Institute of Technology, Bangalore (7.9 CGPA)",
      text: "Suchit Goled specializes in Electronics and Communication Engineering, bridging low-level hardware registers, IoT microcontrollers, and bio-sensors with modern computer architecture.",
      badge: "ACADEMIC EXCELLENCE",
      icon: "⚡"
    },
    {
      title: "02. FULL-STACK DEVELOPMENT",
      tagline: "4-Month Internship at Prinston Smart Engineers",
      text: "Engineering scalable web applications with React.js, Node.js, Express, and MongoDB. Architect of ElectroMart — a complete electronics e-commerce platform with JWT auth and dynamic inventory.",
      badge: "MERN STACK",
      icon: "💻"
    },
    {
      title: "03. REVOLUTIONARY HEALTHCARE IoT",
      tagline: "AI-Powered Smart Bandage (ICoICET 2026 Accepted)",
      text: "Conceived and prototyped a non-invasive smart bandage using ZnO electrochemical sensors and ESP32 BLE telemetry to monitor chronic wounds in real time, detecting bacterial infection prior to sepsis.",
      badge: "RESEARCH PAPER",
      icon: "🧬"
    },
    {
      title: "04. AGENTIC AI & COMPUTER VISION",
      tagline: "Promptathon IVIS Labs & LangGraph CRM",
      text: "Building stateful LLM multi-agent graphs with LangGraph, OpenCV visual attribute extraction pipelines, and automated product cataloging solutions that reduce manual listing time by 70%.",
      badge: "AI & INNOVATION",
      icon: "🤖"
    }
  ];

  useEffect(() => {
    if (!isOpen) return;
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % introSteps.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, introSteps.length]);

  if (!isOpen) return null;

  const current = introSteps[activeStep];

  return (
    <div className="intro-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="intro-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="intro-modal-header">
          <div className="intro-brand-row">
            <span className="brand-netflix-lead">SUCHIT</span>
            <span className="brand-netflix-accent">ORIGINALS</span>
            <span className="intro-tag-pill">PILOT INTRO</span>
          </div>
          <div className="intro-ctrls">
            <button
              type="button"
              className="intro-icon-btn"
              onClick={() => setIsMuted(!isMuted)}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button
              type="button"
              className="intro-icon-btn close-btn"
              onClick={onClose}
              aria-label="Close introduction"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Video / Visual Screen Area */}
        <div className="intro-screen-area">
          <div className="intro-backdrop-glow" />
          <div className="intro-screen-content">
            <span className="intro-step-badge">{current.badge}</span>
            <h2 className="intro-step-title">
              <span className="step-emoji">{current.icon}</span> {current.title}
            </h2>
            <h3 className="intro-step-tagline">{current.tagline}</h3>
            <p className="intro-step-text">{current.text}</p>
          </div>

          {/* Progress Timeline indicators */}
          <div className="intro-progress-bar-row">
            {introSteps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`intro-step-dash ${idx === activeStep ? "active" : idx < activeStep ? "passed" : ""}`}
                onClick={() => setActiveStep(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Playback Controls */}
        <div className="intro-playback-bar">
          <button
            type="button"
            className="intro-play-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause introduction" : "Play introduction"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>

          <div className="intro-actions-right">
            <Link
              to="/project/ai-smart-bandage"
              className="netflix-btn-red intro-cta-btn"
              onClick={onClose}
            >
              <span>Explore S01 E01 Project</span>
              <FaExternalLinkAlt />
            </Link>

            <a
              href={process.env.PUBLIC_URL + portfolioData.personal.resume}
              download="Suchit_Goled_Resume.pdf"
              className="netflix-btn-dark intro-resume-btn"
              onClick={onClose}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
