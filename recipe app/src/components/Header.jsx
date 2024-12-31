import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center bg-white h-[60px] px-6">
      <NavLink to={"/"} className="text-xl font-semibold font-serif">
        FindRecipes
      </NavLink>

      <nav className="w-full  h-full flex items-center text-lg justify-end gap-5">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 underline" : "text-black"} `
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-blue-500 underline" : "text-black"}`
          }
          to={"fav"}
        >
          Favorite
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
