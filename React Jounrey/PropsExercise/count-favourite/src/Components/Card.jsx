import React from "react";

const Card = ({ data, handleClick, index }) => {
  const { image, artist, added, name } = data;
  return (
    <>
      <div className="w-60 flex gap-4 relative   rounded-md   bg-zinc-100 p-4 pb-10 mt-10 ">
        <div className="w-20 h-20 relative bg-orange-600 rounded-md overflow-hidden">
          <img className="w-full h-full object-coverd" src={image} alt="" />
        </div>
        <div className="">
          <h3 className="text-xl leading-none font-semibold">{name}</h3>
          <h6 className="text-sm">{artist}</h6>
        </div>
        <button
          onClick={() => handleClick(index)}
          className={`px-4 whitespace-nowrap  py-3 absolute bottom-0 left-1/2 translate-y-[50%]  -translate-x-[50%] ${
            added ? "bg-blue-600 text-white" : "bg-red-600 text-white"
          }   rounded-full text-white `}
        >
          {added === false ? "Add to favourite" : "Added"}
        </button>
      </div>
    </>
  );
};

export default Card;
