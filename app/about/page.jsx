import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.container}>
        <p className={style.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque
          voluptatibus sunt cumque facere ut rerum, magni dolorem cum excepturi
          iste, quaerat fuga corrupti quibusdam ad libero aliquam, tenetur quia.
        </p>
        <p className={style.parrafo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          expedita enim inventore reprehenderit. Facilis quos, optio repellat
          perferendis in porro quia vitae error distinctio aut suscipit, iusto
          repudiandae reiciendis ullam.
        </p>
        <p align="center">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=js,html,css,vite,nodejs,postgres,prisma,react,redux,sequelize,vercel,nextjs" />
          </a>
        </p>
      </div>
    </div>
  );
}
