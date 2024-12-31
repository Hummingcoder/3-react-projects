import React, { useContext } from "react";

import RecipeCard from "./RecipeCard";

const CardContainer = ({ recipeData, loading }) => {
  return (
    <div className="grid relative gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {recipeData && !loading && recipeData.length > 0
        ? recipeData.map((food) => <RecipeCard key={food.id} {...food} />)
        : ""}
      {recipeData && !loading && recipeData.length === 0 && (
        <p className="min-w-[140px] text-center absolute left-[50%] translate-x-[-50%]">
          item(s) not found
        </p>
      )}
      {loading && (
        <p className="absolute left-[50%] translate-x-[-50%]">Loading...</p>
      )}
    </div>
  );
};

export default CardContainer;
