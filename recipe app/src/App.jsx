import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="w-full  min-h-screen max-w-[1240px] mx-auto ">
      <Header />
      <Outlet />
    </main>
  );
};

export default App;
