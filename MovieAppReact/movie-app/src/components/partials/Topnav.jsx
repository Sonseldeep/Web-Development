import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios.jsx";
import No_image from "/No_image.webp";
const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data.results);
      setsearches(data.results);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className=" h-[10vh] relative flex justify-start items-center ml-[20%]">
      <i className=" text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-white mx-10 p-5 bg-transparent outline-none border-none"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-zinc-  400 text-3xl  ri-close-line"
        ></i>
      )}

      <div className=" absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-lg">
        {searches.map((s, i) => (
          <Link
            key={i}
            className=" hover:text-black  duration-300 hover:bg-zinc-100  flex justify-start items-center text-zinc-600  w-full p-10  border-b-2 border-zinc-100 font-semibold"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow"
              src={
                s.backdrop_path || s.profile_path
                  ? ` https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : No_image
              }
              alt=""
            />
            <span>
              {s.original_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
