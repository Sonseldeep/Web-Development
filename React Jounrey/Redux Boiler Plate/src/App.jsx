import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAsync,
  decrementByAmount,
} from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="bg-zinc-800 h-screen w-full text-white">
      <h1 className="text-center font-bold text-3xl text-red-900">
        {" "}
        Counter: {value}
      </h1>
      <div className="text-center flex  justify-center gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="border rounded bg-transparent p-2 mt-3 "
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="border rounded bg-transparent p-2 mt-3 "
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAsync(5))}
          className="border rounded bg-transparent p-2 mt-3 "
        >
          Increment by 5
        </button>

        <button
          onClick={() => dispatch(decrementByAmount(5))}
          className="border rounded bg-transparent p-2 mt-3 "
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
};

export default App;
