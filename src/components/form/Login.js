import React from "react";
import { useForm } from "react-hook-form";
import AppButton from "../AppButton";
import { useDispatch } from "react-redux";
import { toggleAuth } from "../../redux/authSlice";
import Logo from "../../assets/images/newsly-logo.png";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const logIn = (data) => {
    if (data) {
      dispatch(
        toggleAuth({
          booleanValue: true,
        })
      );

      console.log(data);
    }
  };
  return (
    <div className="pt-7 ">
      <div className="w-full pt-3 text-center ">
        <div className="w-[20%] ml-auto mr-auto">
          <img src={Logo} alt="Logo" />
        </div>

        <p className="font-bold text-2xl">LOG IN TO NEWSLY</p>
      </div>

      <form onSubmit={handleSubmit(logIn)}>
        {/* Email */}
        <div className=" mt-6 mb">
          <label className="font-bold text-xl ml-11">Email:</label>
          <br />
          <div className="text-center ">
            <input
              className=" border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
          </div>
          <div className="text-center mt-2 font-bold">
            {errors.email && errors.email.type === "required" && (
              <p className="text-red-500">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-red-500">Email is not valid.</p>
            )}
          </div>
        </div>
        {/* Password */}
        <div className="mt-6">
          <label className="font-bold text-xl ml-11">Password:</label>
          <div className="text-center">
            <input
              className=" border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
              type="password"
              name="password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {/* Password Errors*/}
          <div className="text-center mt-2 font-bold">
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-500">The Password is required</p>
            )}
          </div>
        </div>
        <div className="text-center mt-6">
          <AppButton
            text="Log in"
            className="text-white w-[100px] mt-3 rounded  h-[40px] bg-red-500 hover:bg-red-600 font-bold"
            type="submit"
          />
        </div>
      </form>
      <div className="text-center mt-5">
        <p>
          New to Newsly?
          <span className="font-bold cursor-pointer" onClick={props.setSignUp}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
