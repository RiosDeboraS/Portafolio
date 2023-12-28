//import style from "./about.module.css";
"use client";
import React, { useEffect } from "react";
import style from "./About.module.css";

export default function About() {
  useEffect(() => {
    const text = "RIOS DEBORA SABRINA|";
    let index = 0;

    const typeWriter = () => {
      const typingElement = document.getElementById("typing");
      if (typingElement && index < text.length) {
        typingElement.innerHTML = text.slice(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.container}>
        <h1 id="typing" className={style.h1}></h1>
      </div>

      <h2 className={style.h1}>
        Hola soy desarroladora full stack te invito a ver mi trabajo!!
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet et
          <br />
          eos ipsum. Asperiores sapiente ipsa nobis ducimus quasi veritatis esse
          <br />
        </span>
      </h2>
      <br />
    </div>
  );
}
