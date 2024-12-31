import React, { useContext } from "react";

import RecipeCard from "./RecipeCard";

const CardContainer = ({ recipeData, loading }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {recipeData && !loading && recipeData.length > 0
        ? recipeData.map((food) => <RecipeCard key={food.id} {...food} />)
        : ""}
      {recipeData && !loading && recipeData.length === 0 && "items not found"}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default CardContainer;
