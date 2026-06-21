import React from "react";
import { motion } from "framer-motion";
import "./skill.css";

const groups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Redux", "Material UI", "Framer Motion"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "PHP", "Laravel", "REST APIs", "GraphQL"],
  },
  {
    title: "E-commerce",
    skills: ["Shopify Themes", "Liquid", "Shopify Apps", "Polaris", "Admin API"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Vite", "Figma"],
  },
  {
    title: "AI Tools",
    wide: true,
    skills: [
      "Cursor",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Codex",
      "Lovable",
      "Emergent",
      "Antigravity",
    ],
  },
];

function Skill() {
  return (
    <section className="section skill">
      <div className="skill__head">
        <span className="section-kicker">Toolbox</span>
        <h2 className="section-title">Skills &amp; Technologies</h2>
      </div>

      <div className="skill__groups">
        {groups.map((group, gi) => (
          <motion.div
            className={`skill-group ${group.wide ? "skill-group--wide" : ""}`}
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
          >
            <h3 className="skill-group__title">{group.title}</h3>
            <div className="skill-group__list">
              {group.skills.map((s) => (
                <span className="skill-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
