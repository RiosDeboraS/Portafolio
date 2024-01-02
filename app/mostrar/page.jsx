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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo
            soluta qui perspiciatis et aliquam suscipit ad dolor possimus itaque
            nihil, eos quod sint consequuntur delectus laboriosam dolore
            temporibus nam.
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
            <h1>POKEDEX</h1>
            <img
              src="/portada.png"
              alt="poke"
              className={style.imagenProyecto}
            />
            <p className={style.descripcionProyecto}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              rem asperiores doloremque inventore iusto exercitationem adipisci
              reiciendis assumenda quia aperiam labore in nobis, cumque
              pariatur? Architecto adipisci tempore fugit ea!
            </p>
          </div>
        </div>
        <div className={style.proyectoContainer}>
          <div className={style.caja}>
            <h1>POKEDEX</h1>
            <img
              src="/portada.png"
              alt="poke"
              className={style.imagenProyecto}
            />
            <p className={style.descripcionProyecto}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              rem asperiores doloremque inventore iusto exercitationem adipisci
              reiciendis assumenda quia aperiam labore in nobis, cumque
              pariatur? Architecto adipisci tempore fugit ea!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
