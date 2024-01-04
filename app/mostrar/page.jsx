import style from "./mostrar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Mostrar() {
  return (
    <div className={style.container}>
      <h1 className={style.h2}>VORTTEX GAMING</h1>
      <div className={style.content}>
        <img src="/portada2.png" alt="vorttex Gaming" className={style.img} />
        <div className={style.content}>
          <p className={style.parrafo}>
            e-commerce especializado en la venta de claves para videojuegos de
            PC.
            <br />
            <br />
            <span></span>
            <a href="https://skillicons.dev">
              <img src="https://skillicons.dev/icons?i=js,css,nodejs,postgres,prisma,react,vercel,nextjs" />
            </a>
          </p>
          <a
            href="https://vorttex-gaming-topabli2-topablis-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={style.buton}>
              <FontAwesomeIcon icon={faLink} />
            </button>
          </a>
          <a
            href="https://github.com/zuoki/VorttexGaming"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={style.buton}>
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </a>{" "}
        </div>
      </div>
      <div>
        <h1 className={style.titulo}>Otros proyectos</h1>
      </div>
      <div className={style.proyectosContainer}>
        <div className={style.proyectoContainer}>
          <div className={style.caja}>
            <h1>Pokédex</h1>
            <img
              src="/Captura de pantalla (79).png"
              alt="poke"
              className={style.imagenProyecto}
            />
            <p className={style.descripcionProyecto}>
              <a
                href="https://github.com/RiosDeboraS/pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.buton}>
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>{" "}
              <a
                href="https://pokedex-rose-nine.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.buton}>
                  <FontAwesomeIcon icon={faLink} />
                </button>
              </a>
              <br />
              <br />
              Landing Page temática de Pokémon, dedicada a la colección de
              personajes y creación personalizada.
              <br />
              <br></br>
              <h2>Tecnologías</h2>
              <p align="center">
                <a href="https://skillicons.dev">
                  <img src="https://skillicons.dev/icons?i=js,html,css,vite,nodejs,postgres,react,redux,sequelize,express" />
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
