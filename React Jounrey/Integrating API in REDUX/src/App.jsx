import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "./store/reducers/UserReducer";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.UserReducer);
  const HandleDelete = (index) => {
    console.log(index);
    dispatch(deleteUsers(index));
  };

  return (
    <div>
      Accessing users data in the App
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

export default App;
