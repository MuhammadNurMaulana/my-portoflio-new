import React from "react";
import { Skill } from "./skills";

export const Skills = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 ">
      {Skill.map((skill) => (
        <div className="flex flex-col items-center rounded-lg bg-slate-400/30 p-4 group" key={skill.name}>
          <img src={skill.src} alt={skill.name} className="w-[110px] h-[110px] group-hover:animate-bounce" />
          <h1 className="mt-2">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
};
