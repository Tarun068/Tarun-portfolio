import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
function Navbar() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <ul className="nav-bar-ul">
          <li className="navbar-list">
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Project
            </Link>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
