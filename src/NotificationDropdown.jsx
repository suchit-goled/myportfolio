import React from "react";
import { Link } from "react-router-dom";
import { FaTrophy, FaBriefcase, FaGraduationCap, FaMicrochip, FaTimes } from "react-icons/fa";

export default function NotificationDropdown({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: "notif-1",
      icon: <FaTrophy className="notif-icon gold" />,
      title: "ICoICET 2026 Research Accepted",
      time: "Recent Update",
      text: "Research paper on AI-Powered Smart Bandage accepted with minor revisions.",
      link: "/project/ai-smart-bandage"
    },
    {
      id: "notif-2",
      icon: <FaBriefcase className="notif-icon blue" />,
      title: "Internship Completed",
      time: "May 2026",
      text: "4-month Full Stack Web Development Internship at Prinston Smart Engineers.",
      link: "/project/electronova"
    },
    {
      id: "notif-3",
      icon: <FaGraduationCap className="notif-icon purple" />,
      title: "ECE Academic Progress",
      time: "Acharya Institute of Tech",
      text: "Consistent 7.9 CGPA across Embedded Systems, IoT, DSP & Software Systems.",
      link: "#full-story"
    },
    {
      id: "notif-4",
      icon: <FaMicrochip className="notif-icon red" />,
      title: "Build for Bengaluru Hackathon",
      time: "Hardware Prototyping",
      text: "Demonstrated IoT Smart Inhaler with live AQI & emergency telemetry.",
      link: "/project/smart-inhaler"
    }
  ];

  return (
    <div className="notif-dropdown-menu" role="menu" aria-label="Recent notifications">
      <div className="notif-header">
        <h4 className="notif-heading">NOTIFICATIONS</h4>
        <button
          type="button"
          className="notif-close-btn"
          onClick={onClose}
          aria-label="Close notifications"
        >
          <FaTimes />
        </button>
      </div>

      <div className="notif-list">
        {notifications.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="notif-item"
            onClick={onClose}
          >
            <div className="notif-icon-col">{item.icon}</div>
            <div className="notif-content-col">
              <div className="notif-top">
                <span className="notif-title">{item.title}</span>
                <span className="notif-time">{item.time}</span>
              </div>
              <p className="notif-text">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
