import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const GoBackHandler = () => {
    navigate("/user");
  };

  return (
    <div className=" w-1/2 m-auto mt-10 ">
      <h1 className="text-5xl mb-3 text-red-400">User Details</h1>
      <h1 className="text-2xl mt-3">Hi!! {name}</h1>

      <button
        onClick={GoBackHandler}
        className=" mt-5 bg-blue-500 text-white font-semibold rounded-md py-3 px-2 text-center"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
