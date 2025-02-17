import React from "react";
import { Link, Outlet } from "react-router-dom";
const User = () => {
  return (
    <div className=" w-1/2 m-auto mt-10 flex flex-col ">
      <h1 className="text-5xl mb-3 text-red-400">User</h1>
      <Link
        className="bg-red-200 text-2xl mb-3 hover:bg-red-300 p-3"
        to="/user/Krishna"
      >
        Krishna
      </Link>
      <Link
        className="bg-red-200 text-2xl mb-3 hover:bg-red-300 p-3"
        to="/user/Ram"
      >
        Ram
      </Link>
      <Link
        className="bg-red-200 text-2xl mb-3 hover:bg-red-300 p-3"
        to="/user/Hari"
      >
        Hari
      </Link>

      <hr />
      <Outlet />
    </div>
  );
};

export default User;
