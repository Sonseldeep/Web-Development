import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import User from "./Components/User";
import About from "./Components/About";
import Home from "./Components/Home";
import Userdetails from "./Components/Userdetails";

const App = () => {
  return (
    <div className="p-1 w-1/2 m-auto">
      <nav className="mt-10 flex gap-10 justify-center font-semibold">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
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
