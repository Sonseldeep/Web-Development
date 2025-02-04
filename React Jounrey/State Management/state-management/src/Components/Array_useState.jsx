import React from "react";
import { useState } from "react";
const Array_useState = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      <div className="p-5">
        {val.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </>
  );
};

export default Array_useState;
