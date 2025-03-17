import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown.jsx";
import axios from "../utils/axios.jsx";

import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards.jsx";
import Loading from "./Loading.jsx";
const Trending = () => {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);

      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  const navigate = useNavigate();
  return trending ? (
    <div className="w-screen h-screen overflow-hidden overflow-y-auto p-[3%]">
      <div className=" w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold w-[20%]">
          <i
            onClick={() => navigate(-1)}
            className=" text-2xl mr-3 font-semibold ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
          Trending
        </h1>
        <Topnav />
        <div className="flex gap-5">
          <Dropdown
            title="filter"
            options={["movie", "all", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />

          <Dropdown
            title="filter"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <Cards data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
