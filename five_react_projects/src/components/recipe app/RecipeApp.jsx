import React, { useContext, useEffect } from "react";
import { RecipeContext } from "./context/context";
import RecipeCard from "./RecipeCard";

const RecipeApp = () => {
  const { getRecipeData, recipeData } = useContext(RecipeContext);

  function handleInput() {
    getRecipeData("banana");
    console.log(recipeData);
  }

  return (
    <section>
      <button onClick={handleInput}>click</button>
      {recipeData &&
        recipeData.map((food) => <RecipeCard key={food.id} {...food} />)}
    </section>
  );
};

export default RecipeApp;
