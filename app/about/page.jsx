import style from "./about.module.css";

export default function About() {
  return (
    <div>
      <div className={style.container}>
        <p className={style.parrafo}>
          Soy una Desarrolladora Full Stack con base en Argentina. Mi pasión
          radica en abordar desafíos de manera creativa y encontrar soluciones
          innovadoras en el desarrollo web. He forjado habilidades sólidas
          diseñando arquitecturas que mejoran la experiencia del usuario.
          ¡Explorar nuevas tecnologías y crear soluciones eficientes es mi
          enfoque!
        </p>
      </div>
      <div>
        <h1 className={style.h1}>Tecnologías</h1>
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,html,css,vite,nodejs,postgres,prisma,react,redux" />
          </a>
        </p>
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=sequelize,vercel,nextjs,ts,express,cs,dotnet" />
          </a>
        </p>
      </div>
    </div>
  );
}
