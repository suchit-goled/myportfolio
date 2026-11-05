import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ContinueExploring from "./ContinueExploring";
import TopMoments from "./TopMoments";
import MyJourney from "./MyJourney";
import Projects from "./Projects";
import TechStack from "./TechStack";
import FullStory from "./FullStory";
import Contact from "./Contact";
import Footer from "./Footer";
import ProfileSelection from "./ProfileSelection";
import { portfolioData } from "./data/portfolioData";

export default function Home() {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [hasChosenProfile, setHasChosenProfile] = useState(false);

  useEffect(() => {
    try {
      const savedProfileId = localStorage.getItem("suchit_netflix_profile");
      if (savedProfileId) {
        const found = portfolioData.profiles.find((p) => p.id === savedProfileId);
        if (found) {
          setCurrentProfile(found);
          setHasChosenProfile(true);
          return;
        }
      }
    } catch (e) {
      // Fallback for private browsing
    }
    // If not selected yet, show profile screen first as requested
    setHasChosenProfile(false);
  }, []);

  const handleSelectProfile = (profile) => {
    setCurrentProfile(profile);
    setHasChosenProfile(true);
    setProfileModalOpen(false);

    try {
      localStorage.setItem("suchit_netflix_profile", profile.id);
    } catch (e) {}

    // Smooth jump to profile's target section if specified and not 'everyone'
    if (profile.jumpTo && profile.jumpTo !== "home") {
      setTimeout(() => {
        const el = document.getElementById(profile.jumpTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  // If user hasn't chosen a profile yet, show Profile Selection Screen (WHO'S WATCHING?)
  if (!hasChosenProfile) {
    return (
      <ProfileSelection
        onSelectProfile={handleSelectProfile}
        initialProfile="recruiter"
      />
    );
  }

  return (
    <div className="netflix-portfolio-wrapper">
      <Navbar
        currentProfile={currentProfile}
        onOpenProfileModal={() => setProfileModalOpen(true)}
      />

      <main id="main-content">
        <Hero currentProfile={currentProfile} />
        <ContinueExploring />
        <TopMoments />
        <MyJourney />
        <Projects />
        <TechStack />
        <FullStory />
        <Contact />
      </main>

      <Footer />

      {/* Switch Profile Modal */}
      {profileModalOpen && (
        <ProfileSelection
          onSelectProfile={handleSelectProfile}
          onClose={() => setProfileModalOpen(false)}
          initialProfile={currentProfile?.id || "recruiter"}
        />
      )}
    </div>
  );
}
