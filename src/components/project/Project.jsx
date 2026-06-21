import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./project.css";

function Project() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="section project">
      <div className="project__head">
        <span className="section-kicker">My work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A mix of Shopify stores & custom apps, MERN full-stack builds, and
          React applications. Filter by category below.
        </p>
      </div>

      <div className="project__tabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`tab ${active === cat ? "tab--active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {active === cat && (
              <motion.span layoutId="tab-pill" className="tab__pill" />
            )}
            <span className="tab__label">{cat}</span>
          </button>
        ))}
      </div>

      <motion.div className="project__grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Project;
