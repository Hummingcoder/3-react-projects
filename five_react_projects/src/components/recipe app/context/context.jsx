import { createContext, useState } from "react";

export const RecipeContext = createContext({
  recipeData: [],
  favorite: [],
  addToFav: () => {},
});

const RecipeContextProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState(null);

  const getRecipeData = async (param) => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${param}`
      );

      const data = await res.json();

      if (data && data.data?.recipes) {
        console.log(data.data.recipes);
        setRecipeData(data.data.recipes);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <RecipeContext.Provider value={{ getRecipeData, recipeData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
