import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2 ), rgba(0,0,0,.5),
        rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex justify-end items-start flex-col p-[5%]"
    >
      <h1 className="text-5xl font-black text-white w-[70%]">
        {data.original_title || data.name || data.title || data.original_name}
      </h1>
      <p className="font-semibold text-white w-[70%] mt-3">
        {data.overview.slice(0, 200)}
        ...<Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white  flex gap-3 mt-3">
        <i className="ri-megaphone-fill  text-amber-400"></i>{" "}
        {data.release_date || data.first_air_date || "No Information"}
        <i className="ri-album-fill text-amber-400"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>

      <Link className="p-4 rounded  mt-5 font-semibold text-white  bg-[#6556CD]">
        {" "}
        Watch Trailer{" "}
      </Link>
    </div>
  );
};

export default Header;
