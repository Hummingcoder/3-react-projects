import React, { useContext } from "react";
import CardContainer from "./CardContainer";
import { RecipeContext } from "./context/context";

const Favorites = () => {
  const { favorite } = useContext(RecipeContext);

  return (
    <section className="flex items-start justify-center pt-12">
      {favorite && favorite.length > 0 ? (
        <CardContainer recipeData={favorite} loading={false} />
      ) : (
        <p>"item(s) not found"</p>
      )}
    </section>
  );
};

export default Favorites;
