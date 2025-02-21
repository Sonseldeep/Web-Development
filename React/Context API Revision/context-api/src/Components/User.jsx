import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/Context";
const User = () => {
  const { users, setUsers } = useContext(userContext);

  return (
    <div className="">
      <h1 className="text-3xl">User List</h1>
      <div className="  w-1/2 flex flex-col gap-3 p-5">
        {users.map((u) => (
          <Link
            key={u.id}
            className="p-2 text-left  rounded-md mt-2 bg-blue-300 w-1/3 hover:bg-blue-400 hover:font-semibold"
            to={`/user/${u.id}`}
          >
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
