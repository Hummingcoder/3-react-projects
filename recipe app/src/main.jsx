import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RecipeContextProvider from "./components/context/context.jsx";
import RecipeApp from "./components/RecipeApp.jsx";
import Favorites from "./components/Favorites.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<RecipeApp />} />
      <Route path="fav" element={<Favorites />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeContextProvider>
      <RouterProvider router={router} />
    </RecipeContextProvider>
  </StrictMode>
);
