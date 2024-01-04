import Proyecto from "./proyect/page";
import About from "./about/page";
import Sidebar from "./bar/page";
import style from "./home.module.css";
import Mostrar from "./mostrar/page";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./footer/page";
import ParticlesWall from "@/component/wallpeaper.jsx/ParticlesWall";

export default function Portafolio() {
  return (
    <div className={style.container}>
      <ParticlesWall></ParticlesWall>
      <Sidebar></Sidebar>
      <About></About>
      <Proyecto></Proyecto>
      <Mostrar></Mostrar>
      <Footer></Footer>
    </div>
  );
}
