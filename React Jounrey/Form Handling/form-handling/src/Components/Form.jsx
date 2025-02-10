import React from "react";
import { useRef } from "react";

const Form = () => {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, email.current.value, age.current.value);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder="name" />
        <input ref={age} type="text" placeholder="age" />
        <input ref={email} type="email" placeholder="email" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
