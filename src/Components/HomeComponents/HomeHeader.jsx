import React from "react";

export const HomeHeader = () => {
  return (
    <div className="border-b-2 border-slate-800/40 py-8 dark:border-slate-300">
      <h1 className="font-mono text-xl animate-bounce">Hi, I`m</h1>
      <h1 className="font-bold text-xl text-center mt-4">Muhammad Nur Maulana</h1>
      <h1 className="font-mono text-center text-lg mb-4 animate-pulse">Frontend Developer</h1>
      <p className="text-justify font-semibold">
        I`m a passionate frontend developer from Jakarta. I have experience in using Bootstrap, Tailwind, React, and GitHub to build modern and user-friendly websites. I enjoy learning new technologies and applying them to solve real-world
        problems.
      </p>
    </div>
  );
};
