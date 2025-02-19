import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("this is normla data");
  const [second, setSecond] = useState("this is very large data");

  useEffect(() => {
    console.log("Service Component is created");

    return () => {
      console.log("Service Component is deleted");
    };
  }, [second]);
  // yo [] empty array le component re-rendering gardaina, only component update hunxa
  // [] use garena vane last maa, re-rendereing hunxa so to prevent from re-rendering
  // use [] last maa

  // jaba jaba last ko second maa click gardaa chage hunxa ani sabai service component
  // lai nai kasari re-rendering garne?
  // [second] garemaa second varaiable maa change huda sabai service component re-render hunxa

  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("Normal data has been changed")}
        className="mt-5 px-3 py-2 bg-blue-600 rounded-md text-white font-semibold"
      >
        Change Normal Data
      </button>

      <h1 className="mt-5">{second}</h1>
      <button
        onClick={() => setSecond("Big data has been changed ")}
        className="mt-5 px-3 py-2 bg-blue-600 rounded-md text-white font-semibold"
      >
        Change Large Data
      </button>
    </div>
  );
};

export default Services;
