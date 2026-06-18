
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        SG
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>


        <li>
          <Link
            to="/certificates"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link to="/github"
          onClick={()=>setMenuOpen(false)}>
            GitHub-Activity
          </Link>
          </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>


      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;