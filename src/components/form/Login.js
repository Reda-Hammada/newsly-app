import React from "react";
import { useForm } from "react-hook-form";
import AppButton from "../AppButton";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logIn = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(logIn)}>
        {/* Email */}
        <div>
          <label>Emal:</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="text-red-500">Email is not valid.</p>
          )}
        </div>
        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div>
          <AppButton
            text="Log in"
            className="text-white bg-red-500 hover:bg-red-600 font-bold"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
