import React from "react";
import { useState } from "react";

const Second_useSate = () => {
  const [val, setVal] = useState({ name: "harsh", age: 24 });
  return (
    <>
      <button
        onClick={() => {
          setVal({ ...val, gender: "male" }, console.log(val));
        }}
      >
        {" "}
        click
      </button>
    </>
  );
};

export default Second_useSate;
