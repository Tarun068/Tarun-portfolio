import React from "react";
import { motion } from "framer-motion";
import "./skill.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Redux",
  "Material UI",
  "Framer Motion",
  "MySQL",
  "RESTful APIs",
  "GraphQL",
  "PHP",
  "Laravel",
  "Git",
  "GitHub",
  "GitLab",
];

function Skill() {
  return (
    <div className="skill-wrapper">
      <h2 className="skill-title">My Skills</h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="skill-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
              type: "spring",
              stiffness: 50,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Skill;
