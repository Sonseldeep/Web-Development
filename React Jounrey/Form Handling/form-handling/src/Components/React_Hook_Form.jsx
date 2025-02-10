import React from "react";
import { useForm } from "react-hook-form";

const React_Hook_Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="email" placeholder="email" />
        <input type="submit" />
      </form>
    </>
  );
};

export default React_Hook_Form;
