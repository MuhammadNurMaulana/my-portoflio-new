import React from "react";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="py-8  pl-4 pr-8 md:px-32 lg:pt-4 lg:pl-[370px] xl:pl-[500px] lg:pr-8 xl:pr-52 bg-slate-100 text-slate-800 w-full  dark:bg-slate-900 dark:text-slate-200 transition-all duration-700 -mt-1">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-lg font-mono">&copy; Muhammad Nur Maulana 2023</h1>
        <h1 className="flex items-center gap-4">
          with
          <FaHeart className="text-red-600 animate-ping" />
        </h1>
      </div>
    </div>
  );
};
