import { useDispatch, useSelector } from "react-redux";
import { deleteusers } from "./store/reducers/UserReducer";
const App = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const DeleteHandle = (index) => {
    dispatch(deleteusers(index));
  };

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            {user.name}{" "}
            <span
              onClick={() => DeleteHandle(index)}
              className="ml-3 text-red-600 font-black cursor-pointer "
            >
              {" "}
              ⌫
            </span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
