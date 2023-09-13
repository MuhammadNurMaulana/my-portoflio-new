import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const BackArrow = (props) => {
  const { to } = props;
  return (
    <Link to={to} className="p-2 w-10 h-10 mt-10 ml-2 flex rounded-full bg-slate-800 dark:bg-slate-300 items-center justify-center">
      <FaArrowLeft className="text-white dark:text-slate-800" />
    </Link>
  );
};
