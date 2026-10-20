import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import ExperienceEducation from "./ExperienceEducation";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ExperienceEducation />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
