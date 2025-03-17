import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] p-5  flex gap-3   overflow-x-auto rounded-lg">
      {data.map((d, i) => (
        <div className="bg-zinc-800 mb-5 min-w-[15%] rounded-lg" key={i}>
          <img
            className="mb-2 rounded-t-lg "
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }`}
            alt=""
          />
          <h1 className="pl-2 mt-3  text-xl text-white font-semibold">
            {d.name || d.title || d.original_title || d.original_name}
          </h1>

          <p className="pl-2 w-[95%] mt-3 mb-3 text-white">
            {d.overview.slice(0, 50)}...
            <span className="text-blue-400">more</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
