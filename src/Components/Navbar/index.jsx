import React, { useState } from "react";
import { NavbarStyles } from "./Navbar.styles";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setChangeTheme(!changeTheme);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavbarStyles>
      <NavbarStyles.Header onClick={toggleTheme}>{changeTheme ? <FaSun className="text-white text-xl" /> : <FaMoon className="text-xl text-slate-900" />}</NavbarStyles.Header>

      <NavbarStyles.MenuList classname="hidden lg:flex" />

      <NavbarStyles.MenuBar
        onClick={toggleMenu}
        classname={`${showMenu ? "translate-y-[11px] rotate-45 transition-all duration-300" : "transition-all duration-300"}`}
        classname2={`${showMenu ? "opacity-0 transition-all duration-300" : "transition-all duration-300"}`}
        classname3={`${showMenu ? "-translate-y-[11px] -rotate-45 transition-all duration-300" : "transition-all duration-300"}`}
      />

      {showMenu && (
        <div className="absolute top-full left-0 dark:bg-slate-900 py-6 bg-white w-full h-[100vh] px-10 lg:hidden">
          <NavbarStyles.MenuList classname="flex flex-col lg:hidden" />
        </div>
      )}
    </NavbarStyles>
  );
};
