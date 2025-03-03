import React from "react";
import Home from "./components/Home";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <div className="h-screen w-screen flex ">
      {(pathname !== "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 left-[18%] absolute mt-5 ml-2">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />\
        <Route path="/create" element={<Create />}></Route>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
