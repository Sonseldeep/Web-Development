import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../store/reducers/UserReducer";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.UserReducer);
  const HandleDelete = (index) => {
    console.log(index);
    dispatch(deleteUsers(index));
  };

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <span
              onClick={() => HandleDelete(index)}
              className="font-bold ml-4 cursor-pointer  "
            >
              *
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
