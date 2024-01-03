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
            Vortex Gaming no es simplemente una plataforma de venta de claves de
            videojuegos para PC; es tu compañero en la creación de experiencias
            de juego inigualables. Diseñada con la visión de satisfacer las
            necesidades de los usuarios, buscamos hacer cada experiencia única.
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
              <br />
              <br />
              Explora el fascinante mundo de los Pokémon a través de nuestra
              plataforma interactiva. Descubre y sumérgete en la colección de
              cartas de Pokémon, donde podrás acceder a información detallada
              sobre cada criatura, sus habilidades y características únicas.
              <br />
              <br></br>
              <h2>tech</h2>
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
