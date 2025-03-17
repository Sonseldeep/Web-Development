import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown.jsx";
import axios from "../utils/axios.jsx";

import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards.jsx";
import Loading from "./Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);

      setTrending((prevState) => [...prevState, ...data.results]);
      setpage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  const navigate = useNavigate();
  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[5%] w-full flex items-center justify-between ">
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
      <InfiniteScroll
        dataLength={trending.length}
        loader={<h1>Loading...</h1>}
        next={GetTrending()}
        hasMore={true}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
