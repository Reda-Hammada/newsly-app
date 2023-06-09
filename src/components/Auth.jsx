import React, { useContext } from "react";
import Login from "./form/Login";
import Signup from "./form/Signup";
import { AuthContext } from "../App";
import { useSelector } from "react-redux";
const Auth = () => {
  const { authState, updateAuthState } = useContext(AuthContext);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const closeAuthForm = () => {
    updateAuthState("", false);
  };

  {
    /* return authentications 
    form if isAuth is true */
  }

  return authState.isAuth && isAuthenticated === false ? (
    <section className="w-[100wh] h-[100%] overflow-hidden right-0 left-0   absolute top-0 bg-opacity-50 bg-black">
      <div className="w-[370px] rounded-md bg-white ml-auto mr-auto mt-[6%] h-fit  pb-[3%]">
        <div
          onClick={closeAuthForm}
          className="font-bold float-right mr-5 mt-3 cursor-pointer"
        >
          <span className="border border-main-text-color border-2 pb-[3px] pt-[2px] pr-[6px] pl-[7px] rounded-full">
            X
          </span>
        </div>

        {/*  tab between  component login and SignUp */}
        {authState.whichAuth === "logIn" ? <Login /> : null}
        {authState.whichAuth === "signUp" ? <Signup /> : null}
      </div>
    </section>
  ) : null;
};

export default Auth;
