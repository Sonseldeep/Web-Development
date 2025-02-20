import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";

const Userdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  console.log(users[id]);
  return (
    <div>
      <h1 className="text-2xl font-bold">{users[id].name}</h1>
      <h3 className="mt-5 ">{users[id].city}</h3>
      <h3 className="mt-2">{users[id].email}</h3>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 mt-5  rounded-md text-white font-semibold px-3 py-3"
      >
        Go Back
      </button>
    </div>
  );
};

export default Userdetails;
