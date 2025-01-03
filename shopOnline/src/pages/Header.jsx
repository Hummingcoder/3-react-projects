import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <section className=" w-full h-[50px] bg-gray-700 text-white flex items-center justify-between gap-5 pl-4 pr-8 mb-[-2px]">
      <h1 className="flex flex-col min-w-fit">
        <span className="text-xs mb-[-4px] leading-[3px]">
          Add to cart <span className="text-[6px]"> w/ </span>
        </span>

        <span className="text-base md:text-lg capitalize font-bold ">
          redux toolkit
        </span>
      </h1>
      <div className="flex items-center justify-center gap-1 h-full">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-green-400  border-green-700 "
                : " border-transparent bg-transparent"
            } w-full h-full flex items-center justify-center rounded-t-md border-t-[6px] text-sm px-2 sm:px-4 sm:text-base min-w-[60px]`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-yellow-400 text-black border-yellow-700 "
                : "  border-transparent bg-transparent"
            } w-full h-full flex items-center justify-center rounded-t-md border-t-[6px] text-sm px-2 sm:px-4 sm:text-base min-w-[60px]`
          }
        >
          Cart
        </NavLink>
      </div>
    </section>
  );
};

export default Header;
