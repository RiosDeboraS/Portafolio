import Proyecto from "./proyect/page";
import About from "./about/page";
import Sidebar from "./bar/page";
import style from "./home.module.css";

export default function Portafolio() {
  return (
    <div className={style.container}>
      <Sidebar></Sidebar>
      <About></About>
      <Proyecto></Proyecto>
    </div>
  );
}
