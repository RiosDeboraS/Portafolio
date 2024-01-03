import style from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={style.container}>
        <p className={style.parrafo}>
          ¡Hola! Soy una Desarrolladora Full Stack con base en Argentina,
          entusiasmada por compartir mi apasionante trayectoria en el desarrollo
          web. Desde el inicio de mi carrera, he llevado mi fascinación por
          abordar desafíos creativamente y encontrar soluciones innovadoras al
          ámbito del desarrollo web. Mi enfoque va más allá de la simple
          codificación; estoy constantemente buscando maneras de mejorar la
          experiencia del usuario y encontrar soluciones tecnológicas que no
          solo resuelvan problemas, sino que también destaquen en términos de
          creatividad y eficiencia. Mi especialidad se centra en el desarrollo
          Backend, donde he forjado habilidades sólidas y experiencias valiosas,
          diseñando arquitecturas robustas y eficientes que respaldan las
          aplicaciones desde su núcleo.
        </p>
      </div>
      <div>
        <h1 className={style.h1}>Stack Tech</h1>
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,html,css,vite,nodejs,postgres,prisma,react,redux,sequelize,vercel,nextjs,ts,express" />
          </a>
        </p>
      </div>
    </div>
  );
}
