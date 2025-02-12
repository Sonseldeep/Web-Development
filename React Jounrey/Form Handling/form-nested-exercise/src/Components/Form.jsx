import React from "react";

const Form = () => {
  return (
    <div className="mt-10 flex  gap-10 justify-center ">
      <form className="flex gap-10" action="">
        <input
          className="rounded-md bg-white px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          className="rounded-md bg-white px-2 py-1 text-base font-semibold outline-none"
          type="email"
          placeholder="email"
        />
        <input
          className="rounded-md bg-white px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="image url"
        />
        <input
          className="rounded-md bg-blue-500 text-white font-semibold px-4 py-2 "
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
