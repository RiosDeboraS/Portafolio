import style from "./bar.module.css";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <img className={style.img} src="perfil.jpeg" />
      <div> Full Stack Develop</div>
      <h2> Especialidad 'Backend'</h2>
      <p align="center">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=js,html,css,vite," />
        </a>
      </p>
      <p align="center">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=nodejs,postgres,prisma,react" />
        </a>
      </p>
      <p align="center">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=redux,sequelize,vercel,nextjs" />
        </a>
      </p>
    </div>
  );
}
