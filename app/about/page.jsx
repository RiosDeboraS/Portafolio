import style from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={style.container}>
        <p className={style.parrafo}>
          ¡Hola! soy Desarrolladora Full Stack con sede en Argentina, y estoy
          emocionada de compartir contigo mi apasionante trayectoria en el mundo
          del desarrollo web.
        </p>
        <p className={style.parrafo}>
          Desde el inicio de mi carrera, he llevado mi fascinación por abordar
          desafíos creativamente y encontrar soluciones innovadoras al ámbito
          del desarrollo web. Mi enfoque va más allá de la simple codificación;
          estoy constantemente buscando maneras de mejorar la experiencia del
          usuario y encontrar soluciones tecnológicas que no solo resuelvan
          problemas, sino que también destaquen en términos de creatividad y
          eficiencia.
        </p>
        <p className={style.parrafo}>
          Mi especialidad se centra en el desarrollo Backend, donde he forjado
          habilidades sólidas y experiencias valiosas. Me enorgullece diseñar
          arquitecturas robustas y eficientes que respalden las aplicaciones
          desde su núcleo.
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div>
        <h1 className={style.h1}>Stack Tech</h1>
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,html,css,vite,nodejs,postgres,prisma,react,redux,sequelize,vercel,nextjs,ts" />
          </a>
        </p>
      </div>
    </div>
  );
}
