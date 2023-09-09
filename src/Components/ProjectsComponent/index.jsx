import React from "react";
import { FaInnosoft } from "react-icons/fa";

export const ProjectsComponents = () => {
  return (
    <div className="py-8">
      <div className="flex gap-4 items-center text-2xl font-mono font-semibold">
        <FaInnosoft className="animate-bounce" />
        <h1>Projects</h1>
      </div>
      <h1 className="font-mono font-semibold mt-3">My List Projects Code</h1>
    </div>
  );
};
