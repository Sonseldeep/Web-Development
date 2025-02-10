import React from "react";
import { useForm } from "react-hook-form";

const Practice_Form_Hook = () => {
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

export default Practice_Form_Hook;
