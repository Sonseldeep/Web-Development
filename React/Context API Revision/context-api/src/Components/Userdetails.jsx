import React from "react";
import { useContext } from "react";
import { userContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
const Userdetails = () => {
  const { id } = useParams();
  const { users } = useContext(userContext);
  const navigate = useNavigate();
  console.log(users[id]);
  return (
    <div>
      <h1 className="text-3xl bg-blue-300 p-3 w-fit rounded">User Details: </h1>
      <h1 className="text-2xl font-semibold mt-3 mb-3 text-red-300">
        {users[id].username}
      </h1>
      <h3 className="text-xl font-semibold mt-3 mb-3">{users[id].city}</h3>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600  p-4 font-semibold text-white rounded-md hover:bg-green-400 hover:text-black"
      >
        Go Back
      </button>
    </div>
  );
};

export default Userdetails;
