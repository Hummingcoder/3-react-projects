import React, { useContext, useEffect, useState } from "react";
import { CiHeart, CiLink } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { RecipeContext } from "./context/context";
import { FaHeart } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams();
  const [RecipeData, setRecipeData] = useState(null);
  const { favorite, addorRemoveToFav } = useContext(RecipeContext);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      setloading(true);
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );

        const data = await res.json();

        if (data && data.data && data.data?.recipe) {
          setRecipeData(data.data.recipe);
        }
        setloading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    getItem();
  }, []);

  return (
    <section className="w-full pb-12">
      {RecipeData && !loading ? (
        <div className="w-full  flex flex-col lg:flex-row  items-start justify-start gap-4">
          <img
            className="w-full max-h-[70vh] object-cover lg:max-w-[500px]"
            src={RecipeData.image_url}
            alt=""
          />
          <div className="p-4 flex flex-col items-start justify-center gap-3">
            <a
              href={RecipeData.source_url}
              target="_blank"
              className="w-fit text-sm hover:underline text-blue-500 flex items-center justify-center"
            >
              {RecipeData.publisher} <CiLink />
            </a>
            <h1 className="text-lg font-semibold">{RecipeData.title}</h1>
            <button
              onClick={() => addorRemoveToFav(id)}
              className="w-fit border border-black px-3 py-1 capitalize bg-black text-white rounded-lg m-1"
            >
              {favorite && favorite.some((item) => item.id === id)
                ? "remove from favorites"
                : "add to favorite"}
            </button>
            <h3 className="font-semibold text-lg">Ingredients : </h3>
            <ul className="list-none flex flex-col gap-1 md:px-12">
              {RecipeData.ingredients?.map((item, i) => (
                <li className="max-w-[500px]" key={i}>
                  {" "}
                  <span>
                    {item.quantity} {item.unit}
                  </span>{" "}
                  {item.description}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {loading === true && <p className="text-center">Loading...</p>}
      {loading === false && !RecipeData && (
        <p className="text-center">unable to find the recipe</p>
      )}
    </section>
  );
};

export default RecipeDetails;
