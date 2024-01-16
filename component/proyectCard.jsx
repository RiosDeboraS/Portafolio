import React from "react";
import style from "./estilos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Componente ProjectCard
const ProjectCard = ({ project }) => (
  <div className={style.contenedor}>
    <h2 className={style.titulo}>{project.title}</h2>
    <br />
    <p>{project.description}</p>
    <div className="project-links">
      {project.liveLink && (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <button className={style.buton}>
            {" "}
            <FontAwesomeIcon icon={faLink} />
          </button>
        </a>
      )}
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <button className={style.buton}>
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
