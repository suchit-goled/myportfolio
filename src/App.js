import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import Certificates from "./Certificates";
import "./App.css";
import BandageProject from "./BandageProject";
import GitHubStats from "./GitHubStats";

import { useEffect } from "react";




function App() {

  useEffect(() => {
  const cursor = document.getElementById("cursor-dot");

  const moveCursor = (e) => {
    cursor.style.transform =
      `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  window.addEventListener("mousemove", moveCursor);

  return () =>
    window.removeEventListener("mousemove", moveCursor);
}, []);
  return (

    <><div id="cursor-dot"></div><BrowserRouter>
    

      <Routes>

        <Route
          path="/"
          element={<Home />} />

          

        <Route
          path="/certificates"
          element={<Certificates />} />

        <Route
          path="/project/ai-smart-bandage"
          element={<BandageProject />} />

           <Route
      path="/github"
      element={<GitHubStats/>}/>

      </Routes>

     

      

    </BrowserRouter></>
  );
}

export default App;