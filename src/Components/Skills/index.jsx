import React from "react";
import { bootstrap, css, html23, javascript, react, sass, tailwind } from "../../../public/image";

export const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      src: html23,
    },
    {
      name: "CSS3",
      src: css,
    },
    {
      name: "Javascript",
      src: javascript,
    },
    {
      name: "Bootstrap",
      src: bootstrap,
    },
    {
      name: "Tailwind CSS",
      src: tailwind,
    },
    {
      name: "Sass",
      src: sass,
    },
    {
      name: "React Js",
      src: react,
    },
  ];
  return (
    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 ">
      {skills.map((skill) => (
        <div className="flex flex-col items-center rounded-lg bg-slate-400/30 p-4 group" key={skill.name}>
          <img src={skill.src} alt={skill.name} className="w-[100px] h-[100px] group-hover:animate-bounce" />
          <h1 className="mt-2">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
};
