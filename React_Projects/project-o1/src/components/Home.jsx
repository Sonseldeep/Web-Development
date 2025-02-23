import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />

      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto">
        <Link
          to="/details/1"
          className="  card shadow rounded h-[30vh] w-[18%] flex-col  flex  justify-center items-center"
        >
          <div
            className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 hover:scale-110  "
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-400">Lorem ipsum dolor sit amet.</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
