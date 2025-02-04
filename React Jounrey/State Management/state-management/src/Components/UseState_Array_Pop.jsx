import React from "react";
import { useState } from "react";
const UseState_Array_Pop = () => {
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 5]);
  return (
    <>
      <div className="px-2 py-3">
        {num.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}

        <button
          onClick={() =>
            setNum(() => num.filter((item, index) => index != num.length - 1))
          }
          className="bg-red-500 px-3 py-2 mt-3 mb-3 text-white rounded-md "
        >
          Pop
        </button>
      </div>
    </>
  );
};

export default UseState_Array_Pop;
