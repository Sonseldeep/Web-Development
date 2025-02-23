import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] h-full  m-auto p-[10%] flex items-center  gap-10 ">
      <img
        className="h-[50%]  object-contain "
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content">
        <h1 className="text-5xl">
          {" "}
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="mt-3 text-zinc-400 font-semibold">men's clothing</h3>
        <h2 className="text-red-300 mt-3 font-semibold">Rs. 109.95</h2>
        <p className="mt-3 font-semibold">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="mt-5 mr-5 py-2 inline-block px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className=" inline-block  py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Details;
