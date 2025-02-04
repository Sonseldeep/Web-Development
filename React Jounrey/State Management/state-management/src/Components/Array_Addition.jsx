import React, { useState } from "react";

const Array_Addition = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      {val.map((item) => (
        <h1 key={Math.random()}>{item}</h1>
      ))}

      <button
        onClick={() => setVal([...val, 9])}
        className="px-2 py-2 bg-blue-600 text-white rounded-md"
      >
        Add
      </button>
    </>
  );
};

export default Array_Addition;
