import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import "./about.css";

const stats = [
  { icon: <FaBriefcase />, value: "3+ yrs", label: "Experience" },
  { icon: <FaCode />, value: "12+", label: "Projects" },
  { icon: <FaGraduationCap />, value: "B.Tech", label: "Computer Science" },
  { icon: <FaMapMarkerAlt />, value: "Ahmedabad", label: "India" },
];

function About() {
  return (
    <section className="section about">
      <div className="about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">About me</span>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">clean, usable web</span>
          </h2>
          <p className="about__p">
            I'm a Software Developer based in Ahmedabad, India, with a B.Tech in
            Computer Science (2023) and 3+ years of professional experience
            across Elsner, Web Minds, and Huptech Technologies. I work across
            the stack — building React front-ends, MERN full-stack
            applications, and customizing Shopify themes and apps.
          </p>
          <p className="about__p">
            I love the problem-solving side of programming and I'm always eager
            to pick up new technologies. I'm currently looking for a remote
            Software Developer role where I can grow and contribute to
            meaningful projects. Outside of code, you'll find me gaming,
            watching movies, or playing cricket.
          </p>
        </motion.div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-card__icon">{s.icon}</span>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
