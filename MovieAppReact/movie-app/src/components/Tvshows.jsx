import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
const Tvshows = () => {
  const [category, setCategory] = useState("airing_today");

  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTv = async () => {
    document.title = "TV Shows ";

    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  const navigate = useNavigate();

  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[5%] w-full flex items-center justify-between ">
        <h1 className="text-2xl text-zinc-400 font-semibold w-[20%]">
          <i
            onClick={() => navigate(-1)}
            className=" text-2xl mr-3 font-semibold ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
          TV <small className="ml-2  text-sm "> ({category}) </small>
        </h1>
        <Topnav />
        <div className="flex gap-5">
          <Dropdown
            title="filter"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        loader={<h1>Loading...</h1>}
        next={GetTv()}
        hasMore={hasMore}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
