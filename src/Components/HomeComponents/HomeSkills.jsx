import React from "react";
import { FaStrava } from "react-icons/fa";
import { Skills } from "../Skills";

export const HomeSkills = () => {
  return (
    <div>
      <div className="flex gap-4 items-center text-2xl font-mono font-semibold mt-10">
        <FaStrava className="animate-bounce" />
        <h1>Skills</h1>
      </div>
      <h1 className="font-mono font-semibold mt-3">My Coding Skills</h1>
      <Skills />
    </div>
  );
};
