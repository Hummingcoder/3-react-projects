import React from "react";
import { CiHeart } from "react-icons/ci";
const RecipeCard = ({ image_url, publisher, title, id }) => {
  return (
    <article className="w-full max-w-[240px] border border-black rounded-md p-4">
      <img
        className="w-full h-[140px] object-cover rounded-md"
        src={image_url}
        alt={title}
      />
      <div className="flex flex-col gap-2 my-4 ">
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="text-sm text-slate-500">{publisher}</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-slate-900 text-slate-50 px-3 py-1 rounded-md">
          recipe
        </button>
        <button className="w-fit ">
          <CiHeart size={30} />
        </button>
      </div>
    </article>
  );
};

export default RecipeCard;
