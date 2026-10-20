import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import Certificates from "./Certificates";
import GitHubStats from "./GitHubStats";
import ProjectDetail from "./ProjectDetail";
import "./App.css";

function App() {
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    try {
      const mediaQuery = window.matchMedia("(pointer: fine)");
      if (!mediaQuery) return;

      setHasPointer(Boolean(mediaQuery.matches));

      const handlePointerChange = (e) => setHasPointer(Boolean(e?.matches));

      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", handlePointerChange);
      } else if (typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(handlePointerChange);
      }

      const cursor = document.getElementById("cursor-dot");
      if (!cursor) {
        return () => {
          if (typeof mediaQuery.removeEventListener === "function") {
            mediaQuery.removeEventListener("change", handlePointerChange);
          } else if (typeof mediaQuery.removeListener === "function") {
            mediaQuery.removeListener(handlePointerChange);
          }
        };
      }

      const moveCursor = (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };

      window.addEventListener("mousemove", moveCursor, { passive: true });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        if (typeof mediaQuery.removeEventListener === "function") {
          mediaQuery.removeEventListener("change", handlePointerChange);
        } else if (typeof mediaQuery.removeListener === "function") {
          mediaQuery.removeListener(handlePointerChange);
        }
      };
    } catch (err) {
      // Graceful fallback for non-browser or test environments
    }
  }, []);

  return (
    <>
      {hasPointer && <div id="cursor-dot" aria-hidden="true"></div>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/github" element={<GitHubStats />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/project/ai-smart-bandage" element={<ProjectDetail explicitId="ai-smart-bandage" />} />
          <Route path="/project/electronova" element={<ProjectDetail explicitId="electronova" />} />
          <Route path="/project/product-catalog" element={<ProjectDetail explicitId="product-catalog" />} />
          <Route path="/project/smart-inhaler" element={<ProjectDetail explicitId="smart-inhaler" />} />
          <Route path="/project/pharma-crm" element={<ProjectDetail explicitId="pharma-crm" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
