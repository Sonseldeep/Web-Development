import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home";
import Products from "./components/Products";
const App = () => {
  return (
    <div className="w-screen h-screen">
      <nav className="py-5 flex justify-center gap-10">
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/">Home</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
