import React from "react";

const Button = ({ type, color }) => {
  return (
    <>
      <button className={`px-2 py-3 m-2 bg-blue-500 text-white ${color}`}>
        {" "}
        {type}
      </button>
    </>
  );
};

export default Button;
