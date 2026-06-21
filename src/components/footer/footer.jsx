import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { profile } from "../../config";
import "./footer.css";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "project", label: "Projects" },
  { to: "skill", label: "Skills" },
  { to: "contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <Link to="home" smooth={true} duration={500} className="footer__brand">
            <span className="footer__brand-dot" />
            Tarun<span className="gradient-text">.dev</span>
          </Link>

          <nav className="footer__nav">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="footer__link"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="footer__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React, Vite &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
