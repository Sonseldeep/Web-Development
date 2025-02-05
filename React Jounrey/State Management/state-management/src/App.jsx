import React from "react";
import Card from "./Components/Card";
import { useState } from "react";
import Array_Of_Obj from "./Components/Array_Of_Obj";
import Array_Addition from "./Components/Array_Addition";
import Usestate_advance from "./Components/Usestate_advance";
import Array_useState from "./Components/Array_useState";
import Remove_lastVal from "./Components/Remove_lastVal";
import UseState_Array_Pop from "./Components/UseState_Array_Pop";
import Remove_in_Array from "./Components/Remove_in_Array";
const App = () => {
  const [score, setScore] = useState(1000);
  const [available, setAvailable] = useState(true);

  const [val, setVal] = useState(0);
  const [user, SetUser] = useState({ username: "ram", canDrive: false });

  const [person, setPerson] = useState({ name: "Ram Bahadur", canVote: true });

  return (
    <>
      <Card />
      <Array_Of_Obj />
      <Array_Addition />
      <Remove_in_Array />
      <UseState_Array_Pop />

      <Remove_lastVal />
      <Array_useState />
      <Usestate_advance />

      <h1>name: {person.name}</h1>
      <h1>canVote: {person.canVote.toString()}</h1>
      <button
        onClick={() => setPerson({ ...person, canVote: !person.canVote })}
        className="mb-10 mt-2 px-2 py-2 bg-blue-500 rounded-md text-white"
      >
        toggle
      </button>

      <h1>{score}</h1>
      <button
        onClick={() => setScore(-1)}
        className="px-2 py-2 text-white bg-blue-600 rounded-md mt-10 mb-10"
      >
        Increment
      </button>
      <h1>{available.toString()}</h1>
      <button
        onClick={() => setAvailable(!available)}
        className="px-2 py-2 text-white bg-blue-700 rounded-md mt-10 mb-10"
      >
        Toggle
      </button>

      <h1>number: {val}</h1>
      <button
        onClick={() => setVal((prev) => prev + 1)}
        className="px-2 py-3 bg-blue-500 mt-5"
      >
        increment
      </button>

      <button
        onClick={() => setVal((prev) => prev - 1)}
        className="px-2 py-3 block bg-blue-500 mt-5"
      >
        decrement
      </button>

      <h1 className="mt-5">Username: {user.username}</h1>
      <h1>CanDrive: {user.canDrive.toString()}</h1>
      <button
        onClick={() => SetUser({ ...user, canDrive: !user.canDrive })}
        className="bg-blue-500 mt-5 px-2 py-3 text-white"
      >
        Toggle
      </button>
    </>
  );
};

export default App;
