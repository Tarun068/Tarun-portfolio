import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiShopify,
  SiReact,
  SiMongodb,
} from "react-icons/si";
import "./projectcard.css";

const categoryMeta = {
  Shopify: { icon: <SiShopify />, className: "is-shopify" },
  MERN: { icon: <SiMongodb />, className: "is-mern" },
  React: { icon: <SiReact />, className: "is-react" },
};

const ProjectCard = ({ project }) => {
  const { title, category, description, tech, image, links = {}, featured } = project;
  const meta = categoryMeta[category] || categoryMeta.React;

  return (
    <article className={`pcard ${featured ? "pcard--featured" : ""}`}>
      <div className={`pcard__media ${meta.className}`}>
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <span className="pcard__media-icon">{meta.icon}</span>
        )}
        <span className={`pcard__badge ${meta.className}`}>
          {meta.icon}
          {category}
        </span>
        {featured && <span className="pcard__star">★ Featured</span>}
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{title}</h3>
        <p className="pcard__desc">{description}</p>

        <div className="pcard__tech">
          {tech.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        {(links.live || links.github) && (
          <div className="pcard__links">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="pcard__link"
              >
                <FaExternalLinkAlt size={13} /> Live
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="pcard__link pcard__link--ghost"
              >
                <FaGithub size={15} /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
