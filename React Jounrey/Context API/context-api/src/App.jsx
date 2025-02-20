import React, { useState } from "react";
import Home from "./Components/Home";
import { Link, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import About from "./Components/About";
import Userdetails from "./Components/Userdetails";

const App = () => {
  return (
    <div className="p-1 container w-1/2  m-auto ">
      <nav className="mt-10 mb-10 flex justify-center gap-10">
        <Link className="font-semibold " to="/">
          Home
        </Link>
        <Link className="font-semibold " to="/user">
          User
        </Link>
        <Link className="font-semibold " to="/about">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<Userdetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
