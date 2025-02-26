import React from "react";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="h-screen w-screen flex ">
      <Link to="/" className="text-red-300">
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
