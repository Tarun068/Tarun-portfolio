import React from "react";
import "./home.css";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1>
          Hi, I'm Tarun — a Software Developer I have 1 year of experience in
          building and customizing websites. I specialize in React and Shopify
          theme customization. I enjoy creating responsive, user-friendly
          website.
        </h1>
        <div className="btns">
          <button className="contact">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={50}
              activeClass="active"
            >
              Contact me
            </Link>
          </button>
          <a className="download" href="/Tarun Maheshwari.pdf" download>
            Download CV
          </a>
          <span className="icons">
            <a
              href="https://www.linkedin.com/in/tarun-maheshwari-854838249"
              target="_blank"
            >
              <FaLinkedin size={25} color="black" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
