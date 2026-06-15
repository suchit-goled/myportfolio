import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;