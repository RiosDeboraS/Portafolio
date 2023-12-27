import Proyecto from "./proyect/page";
import About from "./about/page";
import style from "./home.module.css";

export default function Portafolio() {
  return (
    <div className={style.container}>
      <About></About>

      <Proyecto></Proyecto>
    </div>
  );
}
