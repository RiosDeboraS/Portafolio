import style from "./about.module.css";

export default function About() {
  return (
    <div>
      <div className={style.container}>
        <p className={style.parrafo}>
          Soy una Desarrolladora Full Stack con sede en Argentina. Mi pasión
          radica en abordar desafíos creativamente y encontrar soluciones
          innovadoras en el desarrollo web. Especializada en el Backend, he
          forjado habilidades sólidas diseñando arquitecturas robustas que
          mejoran la experiencia del usuario. ¡Explorar nuevas tecnologías y
          crear soluciones eficientes es mi enfoque!
        </p>
      </div>
      <div>
        <h1 className={style.h1}>Tecnologías</h1>
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,html,css,vite,nodejs,postgres,prisma,react,redux,sequelize,vercel,nextjs,ts,express" />
          </a>
        </p>
      </div>
    </div>
  );
}
