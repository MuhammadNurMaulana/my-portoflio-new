import React from "react";
import { List } from "./Navbar.List";
import { Link, NavLink } from "react-router-dom";

export const NavbarStyles = (props) => {
  const { children, classname } = props;
  return (
    <nav
      className={`fixed w-full  left-0 py-4 pl-4 pr-8 bg-neutral-100 flex z-50 justify-between dark:bg-slate-900 dark:text-slate-200 transition-all duration-700 md:px-32 md:py-8 lg:w-[22rem] xl:w-[30rem] lg:flex-col lg:h-[100vh] lg:justify-start lg:pt-8 lg:px-0 lg:pl-12 xl:pl-48 ${classname}`}
    >
      {children}
    </nav>
  );
};

export const Header = (props) => {
  const { children, classname, onClick } = props;
  return (
    <div className={`flex items-center lg:flex-col gap-x-4 lg:gap-4 lg:items-start  ${classname}`}>
      <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden relative bg-slate-800 dark:bg-slate-400">
        <div className="absolute -top-10 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-slate-600 dark:bg-slate-200 "></div>
        <img src="../public/images/my.png" alt="My Profile" className="w-12 h-12 md:h-16 md:w-16 lg:w-24 lg:h-24 z-20 relative" />
      </div>

      <div className="flex items-center">
        <div>
          <h1 className="font-sans text-[10px] font-bold md:text-lg lg:text-xl lg:font-bold">
            Muhammad <div className="hidden md:inline-block">Nur Maulana</div>
          </h1>
          <h1 className="md:hidden font-sans text-[10px] font-bold">Nur Maulana</h1>
        </div>
        <img src="../public/images/verified.png" alt="verified" className="ml-3 w-7 h-7 lg:ml-2" />
      </div>

      <div className="flex gap-3 items-center">
        <h1 className="hidden lg:block text-sm">Click here for change Theme</h1>
        <button onClick={onClick} className="ml-8 p-2 rounded-sm bg-neutral-200 lg:ml-0 dark:bg-slate-800">
          {children}
        </button>
      </div>
      <div className="hidden lg:flex w-full h-[3px] bg-slate-800/20 dark:bg-slate-300"></div>
    </div>
  );
};

export const MenuList = (props) => {
  const { classname } = props;
  return (
    <div className={`gap-1 items-center lg:items-start lg:flex-col lg:mt-12 ${classname}`}>
      {List.map((menu) => (
        <NavLink
          key={menu.name}
          to={menu.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active flex items-center p-2 bg-slate-800 text-white gap-3 box-border dark:bg-white dark:text-slate-800 rounded-md text-2xl w-[190px] transition-all duration-500 text-start "
              : "flex items-center gap-2 text-xl  rounded-md transition-all duration-500 p-2 justify-start bg-transparent hover:bg-slate-500 hover:text-white hover:translate-x-3 dark:hover:bg-slate-300 dark:hover:text-slate-800 w-[190px]"
          }
        >
          {menu.icon}
          <h1 className="text-lg font-semibold font-mono">{menu.name}</h1>
        </NavLink>
      ))}
    </div>
  );
};

export const MenuBar = (props) => {
  const { onClick, classname, classname2, classname3 } = props;
  return (
    <Link className="flex flex-col p-2 gap-2 justify-center lg:hidden transition-all duration-300" onClick={onClick}>
      <span className={`w-8 h-[3px] bg-slate-800 dark:bg-slate-200 ${classname}`}></span>
      <span className={`w-8 h-[3px] bg-slate-800 dark:bg-slate-200 ${classname2}`}></span>
      <span className={`w-8 h-[3px] bg-slate-800 dark:bg-slate-200 ${classname3}`}></span>
    </Link>
  );
};

NavbarStyles.Header = Header;
NavbarStyles.MenuList = MenuList;
NavbarStyles.MenuBar = MenuBar;
