import React, { useState } from "react";

const FormByControlledComponent = () => {
  const [val, setVal] = useState({ name: "", email: "", gender: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setVal({ ...val, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setVal({ ...val, email: e.target.value })}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setVal({ ...val, gender: e.target.value })}
          type="text"
          placeholder="gender"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default FormByControlledComponent;
