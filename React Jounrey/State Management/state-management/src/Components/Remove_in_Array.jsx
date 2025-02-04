import { useState } from "react";

const Remove_in_Array = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  return (
    <>
      <h2>Remove Even Number Only</h2>
      {val.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <button
        onClick={() =>
          setVal(() => val.filter((item, index) => item % 2 !== 0))
        }
        className="px-2 py-3 bg-red-500 rounded-md, text-white"
      >
        Remove
      </button>
    </>
  );
};

export default Remove_in_Array;
