import React from "react";
import { motion } from "framer-motion";
import "./projectcard.css";

const ProjectCard = ({ project }) => {
  const { title, subtitle, image, languages } = project;

  return (
    <motion.div
      className="card-wrapper"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card-content">
        <div className="card-details">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="language">
            {languages.map((lang, index) => (
              <span className="lan" key={index}>
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
