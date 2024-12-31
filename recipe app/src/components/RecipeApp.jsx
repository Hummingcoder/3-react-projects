import React, { useContext, useRef } from "react";
import { RecipeContext } from "./context/context";
import { CiSearch } from "react-icons/ci";
import CardContainer from "./CardContainer";

const RecipeApp = () => {
  const inputRef = useRef(null);
  const { recipeData, getRecipeData, loading } = useContext(RecipeContext);

  function handleInput(e) {
    e.preventDefault();
    getRecipeData(inputRef.current.value);
  }

  return (
    <section className="p-2 pt-12 flex flex-col gap-12 items-center justify-start">
      <form
        className="border border-black w-full h-[40px] max-w-[400px] flex items-center justify-center rounded-xl  overflow-hidden"
        onSubmit={handleInput}
      >
        <input
          ref={inputRef}
          className="w-full h-full outline-none pl-3 py-1 pr-1"
          type="text"
          placeholder="search recipe..."
        />
        <button
          className="w-[50px] h-full flex items-center justify-center bg-blue-600 text-white "
          type="submit"
        >
          <CiSearch size={25} />
        </button>
      </form>
      <CardContainer recipeData={recipeData} loading={loading} />
    </section>
  );
};

export default RecipeApp;
