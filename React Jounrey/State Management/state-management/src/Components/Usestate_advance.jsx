import React from "react";
import { useState } from "react";

const Usestate_advance = () => {
  const [val, setValue] = useState({ name: "abc", isBanned: false });
  return (
    <>
      <h1>name: {val.name}</h1>
      <h1>isBanned: {val.isBanned.toString()}</h1>
      <button
        onClick={() => setValue({ ...val, isBanned: !val.isBanned })}
        className={`px-2 py-2  ${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        } rounded-md mt-5`}
      >
        {" "}
        Change
      </button>
    </>
  );
};

export default Usestate_advance;
