import stylo from "./proyect.module.css";

// export default function Proyectos() {
//   const proyectos = [
//     {
//       titulo: "Vorttex Gaming",
//       imagen: "/portada2.png",
//       descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       enlace: "https://vorttex-gaming-topabli2-topablis-projects.vercel.app/",
//       repositorio: "https://github.com/RiosDeboraS",
//     },
//     // Agrega más proyectos aquí
//   ];

//   return (
//     <div className={stylo.body}>
//       <h1 className={stylo.h2}>PROYECTOS</h1>

//       {proyectos.map((proyecto) => (
//         <div className={stylo.box} key={proyecto.titulo}>
//           <h2 className={stylo.h2}> </h2>
//           <img
//             className={stylo.img}
//             src={proyecto.imagen}
//             alt={proyecto.titulo}
//           />
//           <p className={stylo.h2}>{proyecto.descripcion}</p>
//           <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
//             <button>Enlace</button>
//           </a>
//           <a
//             href={proyecto.repositorio}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button>Repositorio</button>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }
export default function Proyectos() {
  return (
    <div className={stylo.cont}>
      <div className={stylo.box}>
        <h1 className={stylo.h2}>Proyectos</h1>
      </div>
    </div>
  );
}
