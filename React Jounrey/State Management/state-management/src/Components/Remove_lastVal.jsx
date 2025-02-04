import React from "react";
import { useState } from "react";

const Remove_lastVal = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      {val.map((item, index) => (
        <h1 key={index}> {item}</h1>
      ))}

      <button
        onClick={() =>
          setVal(() => val.filter((item, index) => index != val.length - 1))
        }
        className="px-2 py-2 mt-2 bg-red-500 text-white rounded-md"
      >
        Remove
      </button>
    </>
  );
};

export default Remove_lastVal;
