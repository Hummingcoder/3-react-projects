import React from "react";
import { useSelector } from "react-redux";

const Card = ({ id, image, title, btn }) => {
  return (
    <div className="border-2 w-full flex items-start justify-between flex-col gap-3 max-w-[300px] border-black shadow-md p-3 rounded-md bg-white">
      <img
        className="w-full h-[200px] object-contain"
        src={image}
        alt={title}
      />
      <p>{title}</p>
      {btn}
    </div>
  );
};

export default Card;
