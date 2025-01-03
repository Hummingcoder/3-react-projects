import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/storeSlice";

const AddBtn = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[40px] overflow-hidden text-center   text-white  rounded-md">
      {cart.some((i) => i.id === item.id) ? (
        <p className="w-full h-full flex items-center justify-center bg-slate-400">
          added
        </p>
      ) : (
        <button
          onClick={() => dispatch(addToCart(item))}
          className="w-full h-full hover:bg-green-600  bg-green-500"
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default AddBtn;
