import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import {
  SiReact,
  SiShopify,
  SiMongodb,
  SiClaude,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import Typewriter from "../typewriter/Typewriter";
import { profile } from "../../config";
import "./home.css";

const NAME = ["Tarun Maheshwari"];
const ROLES = [
  "a React Developer",
  "a MERN Stack Developer",
  "a Shopify Developer",
  "a Problem Solver",
];

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
  return (
    <div className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__avatar"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="avatar-frame">
            <div className="avatar-inner">
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} />
              ) : (
                <span className="avatar-initials gradient-text">{initials}</span>
              )}
            </div>
          </div>
          <span className="avatar-badge avatar-badge--react" aria-hidden="true">
            <SiReact />
          </span>
          <span className="avatar-badge avatar-badge--claude" aria-hidden="true">
            <SiClaude />
          </span>
          <span className="avatar-badge avatar-badge--gemini" aria-hidden="true">
            <SiGooglegemini />
          </span>
          <span className="avatar-badge avatar-badge--mongo" aria-hidden="true">
            <SiMongodb />
          </span>
          <span className="avatar-badge avatar-badge--openai" aria-hidden="true">
            <SiOpenai />
          </span>
          <span className="avatar-badge avatar-badge--shopify" aria-hidden="true">
            <SiShopify />
          </span>
        </motion.div>

        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
        <motion.span className="hero__badge" variants={item}>
          <span className="hero__badge-dot" /> Available for remote work
        </motion.span>

        <motion.h1 className="hero__title" variants={item}>
          Hi, I'm{" "}
          <Typewriter
            words={NAME}
            className="gradient-text"
            loop={false}
            typeSpeed={110}
            startDelay={500}
          />
        </motion.h1>

        <motion.p className="hero__role" variants={item}>
          I'm <Typewriter words={ROLES} className="hero__role-accent" />
        </motion.p>

        <motion.p className="hero__desc" variants={item}>
          I build and customize fast, responsive web experiences. With 3+ years
          of professional experience, I specialize in React front-ends, MERN
          full-stack apps, and Shopify theme & custom app development.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn btn--primary"
          >
            Get in touch
          </Link>
          <a className="btn btn--ghost" href={profile.resume} download>
            Download CV
          </a>
        </motion.div>

        <motion.div className="hero__socials" variants={item}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hero__social"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hero__social"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hero__social"
          >
            <FaEnvelope size={20} />
          </a>
        </motion.div>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="hero__scroll"
        aria-label="Scroll to about"
      >
        <FaArrowDown size={16} />
      </Link>
    </div>
  );
}

export default Home;
