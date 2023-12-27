import style from "./proyect.module.css";

export default function Proyectos() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>PROYECTOS</h1>
      <div className={style.proyect}>
        <h2 className={style.subtitle}> Vorttex Gaming</h2>
        <img
          className={style.image}
          src="https://plugins-media.makeupar.com/smb/blog/post/2023-02-17/d6243cdd-3593-4c7b-b667-660c26c835aa.jpg"
          alt="PRUEBA1"
        />
        <p className={style.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <a
          href="https://vorttex-gaming-topabli2-topablis-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.button}>Enlace</button>
        </a>
        <a
          href="https://github.com/RiosDeboraS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.button}>Repositorio</button>
        </a>
      </div>
      <div className={style.proyect}>
        <h2 className={style.subtitle}> Vorttex Gaming</h2>
        <img
          className={style.image}
          src="https://plugins-media.makeupar.com/smb/blog/post/2023-02-17/d6243cdd-3593-4c7b-b667-660c26c835aa.jpg"
          alt="PRUEBA1"
        />
        <p className={style.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <a
          href="https://vorttex-gaming-topabli2-topablis-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.button}>Enlace</button>
        </a>
        <a
          href="https://github.com/RiosDeboraS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.button}>Repositorio</button>
        </a>
      </div>
    </div>
  );
}
