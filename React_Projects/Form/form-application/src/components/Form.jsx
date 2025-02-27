import React, { useState } from "react";

const Form = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  // instead of passing like that we can create a object

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleValidatePassword = () => {
    if (!passwordRegex.test(formValues.password)) {
      alert("try again");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleValidatePassword();

    console.log(formValues);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form onSubmit={handleFormSubmit}>
        <div className="wrapper email-input-wrapper">
          <input
            type="email"
            value={formValues.email}
            placeholder="email"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            className=" bg-zinc-100 mb-3"
          />
        </div>

        <div className="wrapper password-input-wrapper">
          <input
            type="password"
            value={formValues.password}
            placeholder="password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            required
            className="bg-zinc-100"
          />
        </div>
        <input
          className="mt-3 bg-green-400 text-black font-semibold p-2 rounded-md"
          type="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
