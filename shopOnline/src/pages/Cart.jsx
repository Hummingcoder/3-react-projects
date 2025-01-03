import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import RemoveBtn from "../components/RemoveBtn";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <section className="w-full   p-4  min-h-screen bg-yellow-400 rounded-lg">
      {cart && cart.length > 0 ? (
        <div className=" w-fit mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {cart.map((item) => (
            <Card key={item.id} {...item} btn={<RemoveBtn id={item.id} />} />
          ))}
        </div>
      ) : (
        <p className="mt-40 text-center">no item(s) found</p>
      )}
    </section>
  );
};

export default Cart;
