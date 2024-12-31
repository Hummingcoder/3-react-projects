import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white h-[60px]  p-6">
      <p className="text-xl font-semibold font-serif">Find Recipes</p>
      <p>imdumb</p>
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
