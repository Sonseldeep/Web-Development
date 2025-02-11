import React from "react";

const Card = () => {
  return (
    <div className="w-52 h-full p-4 bg-zinc-100 rounded-lg flex flex-col items-center">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
        {/* <img className="w-full h-full object-cover" src="#" alt="" /> */}
      </div>
      <h1 className="text-xl font-semibold mt-1 ">Ram</h1>
      <p className="text-center text-xs font-semibold  tracking-normal mt-1">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <button className="px-3 py-1 mt-2 bg-red-600 rounded-md text-xs font-semibold text-white">
        Remove it
      </button>
    </div>
  );
};

export default Card;
