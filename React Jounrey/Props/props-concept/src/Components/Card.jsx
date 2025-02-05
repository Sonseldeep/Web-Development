import React from "react";

const Card = ({ values, handleFriendsButton }) => {
  const { image, name, profession, friends } = values;
  return (
    <>
      <div className="w-52 bg-white rounded-md ">
        <div className="w-full h-40 bg-sky-200">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
        <div className="w-full p-3 ">
          <h3 className="text-xl font-semibold">{name}</h3>
          <h5 className="text-xm">{profession}</h5>
          <button
            onClick={handleFriendsButton}
            className="mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md "
          >
            Add Friend
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
