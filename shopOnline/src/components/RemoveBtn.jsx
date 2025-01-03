import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/storeSlice";

const RemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(removeFromCart(id))}
      className="w-full text-center text-black hover:bg-yellow-600 duration-200 bg-yellow-500 py-2 rounded-md"
    >
      remove
    </button>
  );
};

export default RemoveBtn;
