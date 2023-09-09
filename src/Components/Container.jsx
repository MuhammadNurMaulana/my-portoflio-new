import React from "react";

export const Container = (props) => {
  const { children } = props;
  return <div className="py-16 pl-4 pr-8 pt-24 md:px-32 md:pt-36 lg:pt-4 lg:pl-[370px] xl:pl-[520px] lg:pr-8 xl:pr-40 bg-slate-100 text-slate-800 w-full  dark:bg-slate-900 dark:text-slate-200 transition-all duration-700 ">{children}</div>;
};
