import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" relative w-60 h-32  rounded-md  flex overflow-hidden  ">
          <img
            className={`shrink-0 transition-transform duration-600 ease-in-out ${
              val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
            }`}
            src="https://images.unsplash.com/photo-1738432323553-b9471e2239b9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="nature"
          />
          <img
            className={`shrink-0 transition-transform duration-600 ease-in-out ${
              val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
            }`}
            src="https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="nature"
          />

          <span
            onClick={() => setVal(() => !val)}
            className="absolute w-8 h-8 bg-zinc-200 rounded-full flex justify-center   items-center botton-.2 "
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
