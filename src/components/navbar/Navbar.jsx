import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../themetoggle/ThemeToggle";
import { profile } from "../../config";
import "./navbar.css";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "project", label: "Projects" },
  { to: "skill", label: "Skills" },
  { to: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <nav className="nav__inner">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav__brand"
          onClick={close}
        >
          <span className="nav__brand-dot" />
          Tarun<span className="gradient-text">.dev</span>
        </Link>

        <ul className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="nav__link--active"
                className="nav__link"
                onClick={close}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="nav__cta-mobile">
            <a className="nav__cta" href={profile.resume} download onClick={close}>
              Resume
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <ThemeToggle />
          <a className="nav__cta nav__cta-desktop" href={profile.resume} download>
            Resume
          </a>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
