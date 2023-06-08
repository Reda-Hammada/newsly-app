import React from "react";
import { useForm } from "react-hook-form";
import AppButton from "../AppButton";
import Logo from "../../assets/images/newsly-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Pages/HomePage";
const Signup = () => {
  const { authState, updateAuthState } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setSignIn = () => {
    updateAuthState("logIn", true);
  };
  const Register = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="w-full pt-3 text-center ">
        <div className="w-[20%] ml-auto mr-auto">
          <img src={Logo} alt="Logo" />
        </div>

        <p className="font-bold mt-2 text-2xl">
          JOIN NEWSLY <br /> STAY INFROMED
        </p>
      </div>
      <form onSubmit={handleSubmit(Register)}>
        <div className="mt-6 ">
          <label className="font-bold text-xl ml-11">Full name:</label>
          <br />
          <div className="text-center mt-2 ">
            <input
              className=" border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
              type="text"
              name="fullname"
              {...register("fullname", {
                required: true,
              })}
            />
          </div>
          <div className="text-center mt-2 font-bold">
            {errors.fullname && errors.fullname.type === "required" && (
              <p className="text-red-500">Fullname is required</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="font-bold text-xl ml-11">Email:</label>
          <div className="text-center mt-2">
            <input
              className=" border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
              type="email"
              name="fullname"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
          </div>
          <div className="text-center mt-2 font-bold">
            {errors.email && errors.email.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-500">Email is not valid</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="font-bold text-xl ml-11">Password:</label>
          <div className="text-center mt-2">
            <input
              className=" border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
          </div>
          <div className="text-center mt-2 font-bold">
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="text-red-500">
                Password should be at least 8 characters.
              </p>
            )}
          </div>
        </div>
        <div className="text-center mt-6">
          <AppButton
            text="Sign up"
            className="text-white w-[100px] mt-3 rounded  h-[40px] bg-red-500 hover:bg-red-600 font-bold"
          />
        </div>
      </form>
      <div className="text-center mt-5">
        <p>
          Already have an account?
          <span className="font-bold cursor-pointer" onClick={setSignIn}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
