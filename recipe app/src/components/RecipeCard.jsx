import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RecipeContext } from "./context/context";
import { NavLink } from "react-router-dom";
const RecipeCard = ({ image_url, publisher, title, id }) => {
  const { favorite, addorRemoveToFav } = useContext(RecipeContext);

  const isInFav = () => {
    console.log(favorite && favorite.some((item) => item.id === id));

    return favorite && favorite.some((item) => item.id === id);
  };

  return (
    <article className="w-full max-w-[240px] flex flex-col items-center justify-between border border-black rounded-md p-4">
      <img
        className="w-full h-[140px] object-cover rounded-md"
        src={image_url}
        alt={title}
      />
      <div className="w-full flex flex-col gap-2 my-4 ">
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="text-sm text-slate-500">{publisher}</p>
      </div>
      <div className=" w-full flex items-center justify-between">
        <NavLink
          to={`/recipe/${id}`}
          className="bg-slate-900 text-slate-50 px-3 py-1 rounded-md"
        >
          recipe
        </NavLink>
        <button onClick={() => addorRemoveToFav(id)} className="w-fit ">
          {favorite && favorite.some((item) => item.id === id) ? (
            <FaHeart className="text-pink-500" size={30} />
          ) : (
            <CiHeart size={30} />
          )}
        </button>
      </div>
    </article>
  );
};

export default RecipeCard;
