import React, { useState, useEffect } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios.jsx";
import Header from "./partials/Header.jsx";

const Home = () => {
  document.title = "Movie APP | Home Page";

  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];

      setwallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <Sidenav />

      <div className="w-[80%] h-full ">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
