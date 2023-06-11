import React from "react";
import { useForm } from "react-hook-form";
import ReusableButton from "../ReusableButton ";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/images/newsly-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Pages/HomePage";
import { logInUser } from "../../features/auth/authSlice";

const Login = () => {
  // use context to tab between log in and register form
  const { authState, updateAuthState } = useContext(AuthContext);
  // import state globally
  const { message, isSuccess, isError, isLogin } = useSelector(
    (state) => state.auth || {}
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // tab to sign up form
  const setSignUp = () => {
    updateAuthState("signUp", true);
  };

  // login the new user by calling dispatch in the auth slice to consume the login auth service
  const logIn = (data) => {
    const userData = data;
    dispatch(logInUser(userData));
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
              className=" pl-3 border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
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
              className=" pl-3 border border-md h-[35px] bg-gray-100 mt-2 w-[80%]  "
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
        {/*Login Error message */}
        {isError && isLogin ? (
          <div className="text-center w-full text-red-500">
            <p>{message}</p>
          </div>
        ) : null}
        <div className="text-center mt-6">
          <ReusableButton
            text="Log in"
            className="text-white w-[100px] mt-3 rounded  h-[40px] bg-red-500 hover:bg-red-600 font-bold"
            type="submit"
          />
        </div>
      </form>
      <div className="text-center mt-5">
        <p>
          New to Newsly?
          <span onClick={setSignUp} className="font-bold cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
