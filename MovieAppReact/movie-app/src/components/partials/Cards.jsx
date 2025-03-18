import React from "react";
import { Link } from "react-router-dom";
import No_image from "/No_image.webp"; // Import the placeholder image

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link className=" relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="w-[40vh] object-cover shadow-[8px_17px_28px_2px_rgba(0,0,0,.5)]"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : No_image
            }
            alt={c.name || c.title || c.original_name || c.original_title}
          />
          <h1 className="text-2xl text-zinc-300 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}{" "}
          </h1>
          {c.vote_average && (
            <div className=" absolute right-[-10%] bottom-[15%]  rounded-full text-xl  font-semibold bg-yellow-600 mt-2 w-[5vh] h-[5vh] flex justify-center items-center  text-white">
              {" "}
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
