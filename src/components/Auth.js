import React, { useContext } from "react";
import Login from "./form/Login";
import Signup from "./form/Signup";
import { AuthContext } from "../Pages/HomePage";

const Auth = () => {
  const { authState, updateAuthState } = useContext(AuthContext);

  const closeAuthForm = () => {
    updateAuthState("", false);
  };

  {
    /* return authentications 
    form if isAuth is true */
  }

  return authState.isAuth ? (
    <section className="w-full overflow-hidden h-full   absolute top-0 bg-opacity-50 bg-black">
      <div className="w-[420px] rounded-md bg-white ml-auto mr-auto mt-[6%] h-fit  pb-[3%]">
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
