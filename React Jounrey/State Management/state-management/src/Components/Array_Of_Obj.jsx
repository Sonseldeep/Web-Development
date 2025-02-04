import React, { useState } from "react";

const Array_Of_Obj = () => {
  const [data, setData] = useState([
    { name: "sager", age: 23 },
    { name: "ram", age: 25 },
    { name: "shyam", age: 26 },
  ]);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <h1>Name: {item.name}</h1>
          <h1>Age: {item.age}</h1>
        </div>
      ))}

      <button
        onClick={() =>
          setData(() =>
            data.map((item) =>
              item.name === "ram" ? { name: "ram", age: 40 } : item
            )
          )
        }
        className="px-2 py-3, bg-blue-500 text-white,rounded-md m-5"
      >
        Change
      </button>
    </>
  );
};

export default Array_Of_Obj;
