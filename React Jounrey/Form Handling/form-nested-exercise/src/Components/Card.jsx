import React from "react";
const Card = ({ users }) => {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex  flex-col items-center p-3">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
        <img className="w-full h-full object-cover" src="#" alt="" />
      </div>
      <h1 className=" mt-2 text-xl font-semibold ">Sasank</h1>
      <h4 className="opacity-40 text-xs">random@gmail.com</h4>
      <p className=" mt-2 text-center text-xs font-semibold tracking-tight">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quo!
      </p>
      <button className="mt-4 bg-red-600 rounded-md text-white px-3 py-1 text-xs font-semibold">
        Remove it
      </button>
    </div>
  );
};

export default Card;
