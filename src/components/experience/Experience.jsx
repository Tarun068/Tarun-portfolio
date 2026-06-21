import React from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import "./experience.css";

const Experience = () => {
  return (
    <section className="section experience">
      <div className="experience__head">
        <span className="section-kicker">Career</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          A few years building products across React, MERN, and Shopify.
        </p>
      </div>

      <div className="timeline">
        {experience.map((job, i) => (
          <motion.div
            className="timeline__item"
            key={job.company + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="timeline__dot" />
            <div className="timeline__card">
              <div className="timeline__top">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__company">{job.company}</p>
              <ul className="timeline__points">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
