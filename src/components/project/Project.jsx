import React from "react";
import "./project.css";
import { motion } from "framer-motion";
import classbox from "../../assets/classbox.png";
import pet from "../../assets/pet.png";
import ProjectCard from "./ProjectCard";

function Project() {
  const projects = [
    {
      title: "Classbox",
      subtitle:
        "A platform for providing class services online. Developed a user-friendly interface for school admin to create projects and lecture and access services for both teacher and students.",
      image: classbox,
      languages: ["React js", "Redux", "Material UI", "Drag & Drop"],
    },
    {
      title: "Petsential – Shopify Website",
      subtitle:
        "An online pet supply store built on Shopify, offering a range of essential products for pets. I handled the theme customization, UI enhancements, and optimized the user experience for both mobile and desktop.",
      image: pet,
      languages: ["Shopify Theme", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="project-wrapper">
      <div className="project-main">
        <h1>My projects</h1>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
