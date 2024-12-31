import { createContext, useState } from "react";

export const RecipeContext = createContext({
  recipeData: [],
  favorite: [],
  addorRemoveToFav: () => {},
  loading: false,
});

const RecipeContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const [favorite, setFavorite] = useState([]);

  const getRecipeData = async (param) => {
    setLoading(true);
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
    setLoading(false);
  };

  const addorRemoveToFav = (id) => {
    console.log(favorite);

    const fav = recipeData.find((item) => item.id === id);
    if (favorite.some((item) => item.id === id)) {
      setFavorite((prev) => prev.filter((item) => item.id !== fav.id));
    } else {
      setFavorite((prev) => [...prev, fav]);
    }
  };

  return (
    <RecipeContext.Provider
      value={{ addorRemoveToFav, getRecipeData, recipeData, loading, favorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
