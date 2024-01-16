"use client";
import ProjectCard from "@/component/proyectCard";
import { useState } from "react";
import style from "./mostrar.module.css";

export default function Mostrar() {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Vorttex Gaming",
      description: "E-commerce, venta de claves para videojuegos de PC",
      githubLink: "https://github.com/zuoki/VorttexGaming",
      liveLink: "https://vorttex-gaming-topabli2-topablis-projects.vercel.app/",
    },
    {
      id: 1,
      title: "Web Api",
      description: "Api web rest",
      githubLink: "https://github.com/RiosDeboraS/WebApiPeakyPhones",
    },
  ];

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={handleClick}>
        {isVisible ? "cerrar" : "abrir"}
      </button>

      {isVisible &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
}
