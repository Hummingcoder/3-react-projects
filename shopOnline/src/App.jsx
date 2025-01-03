import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <main className="bg-gray-700 px-4 pt-5 pb-6">
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
