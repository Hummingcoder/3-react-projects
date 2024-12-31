import React from "react";
import Weather from "./components/Weather";
import RecipeContextProvider from "./components/recipe app/context/context";
import RecipeApp from "./components/recipe app/RecipeApp";

const App = () => {
  return (
    <main>
      <Weather />
      <RecipeContextProvider>
        <RecipeApp />
      </RecipeContextProvider>
    </main>
  );
};

export default App;
