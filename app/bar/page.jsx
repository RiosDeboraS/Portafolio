import style from "./bar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar}>
        <img className={style.img} src="Captura de pantalla (89).png" />
        <h1> RIOS DEBORA SABRINA</h1>
        <p className={style.p}>Full Stack Developer</p>
      </div>

      <h2 className={style.h2}>
        <br />
        <br />
        <br />
        contacto:
        <a
          href="https://www.linkedin.com/in/debora-sabrina-rios-fullstack/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.buton}>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>
        <a
          href="https://github.com/RiosDeboraS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.buton}>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>{" "}
        <a
          href="mailto:riosdeborasabrina@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.buton}>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </a>{" "}
        <a
          href="Rios Debora Sabrina (5).pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={style.buton}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </a>{" "}
      </h2>
    </div>
  );
}
