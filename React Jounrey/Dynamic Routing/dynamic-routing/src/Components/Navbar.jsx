import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="mt-10 flex justify-center gap-10">
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-600" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-600" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-600" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
