import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const Movies = () => {
  const [category, setCategory] = useState("now_playing");

  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetMovie = async () => {
    document.title = "Movies ";

    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  const navigate = useNavigate();

  return movie.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className=" px-[5%] w-full flex items-center justify-between ">
        <h1 className="text-2xl text-zinc-400 font-semibold w-[20%]">
          <i
            onClick={() => navigate(-1)}
            className=" text-2xl mr-3 font-semibold ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
          Movie <small className="ml-2  text-sm "> ({category}) </small>
        </h1>
        <Topnav />
        <div className="flex gap-5">
          <Dropdown
            title="filter"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        loader={<h1>Loading...</h1>}
        next={GetMovie()}
        hasMore={hasMore}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
