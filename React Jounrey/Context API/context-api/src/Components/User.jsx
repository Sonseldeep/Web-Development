import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";
const User = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-4xl ">User List</h1>
      <div className="mt-10 flex flex-col w-1/5 text-xl">
        {users.map((u) => (
          <Link
            key={u.id}
            to={`/user/${u.id}`}
            className="p-3 bg-blue-300 mb-3  hover:bg-green-300 hover:font-semibold hover:rounded-md"
          >
            {u.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
