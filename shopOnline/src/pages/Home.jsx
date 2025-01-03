import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import AddBtn from "../components/AddBtn";

const Home = () => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();

      setdata(result);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="w-full   p-4  min-h-screen bg-green-400 rounded-lg">
      {loading && <p className="mt-40 text-center">Loading...</p>}

      <div className=" w-fit mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data &&
          !loading &&
          data.map((item) => (
            <Card key={item.id} {...item} btn={<AddBtn item={item} />} />
          ))}
      </div>
    </section>
  );
};

export default Home;
