import React from "react";
import { useForm } from "react-hook-form";
import AppButton from "../AppButton";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Register = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(Register)}>
        <div>
          <label>Full name:</label>
          <input
            type="text"
            name="fullname"
            {...register("fullname", {
              required: true,
            })}
          />
          {errors.fullname && errors.fullname.type === "required" && (
            <p className="text-red-500">Fullname is required</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="fullname"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="text-red-500">Email is not valid</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="text-red-500">
              Password should be at least 8 characters.
            </p>
          )}
        </div>
        <div>
          <AppButton
            text="Sign up"
            className="text-white bg-red-500 hover:bg-red-600 font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
