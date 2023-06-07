import React from "react";
import { useState } from "react";
import Login from "./form/Login";
import Signup from "./form/Signup";

const Auth = () => {
  const [whichAuth, setAuth] = useState("logIn");

  const setSignIn = () => {
    setAuth("logIn");
  };

  const setSignUp = () => {
    setAuth("signUp");
  };

  return (
    <section className="w-full h-full  absolute top-0 bg-opacity-50 bg-black">
      <div className="w-[420px] rounded-md bg-white ml-auto mr-auto mt-[6%] h-fit  pb-[3%]">
        <div className="font-bold float-right mr-5 mt-3 cursor-pointer">
          <span className="border border-main-text-color border-2 pb-[3px] pt-[2px] pr-[6px] pl-[7px] rounded-full">
            X
          </span>
        </div>

        {/*  tab between  component login and SignUp */}
        {whichAuth === "logIn" ? <Login setSignUp={setSignUp} /> : null}
        {whichAuth === "signUp" ? <Signup setSignIn={setSignIn} /> : null}
      </div>
    </section>
  );
};

export default Auth;
