import React, { useContext } from "react";
import AppButton from "./AppButton";
import { AuthContext } from "../Pages/HomePage";

const HeroSection = () => {
  const { updateAuthState } = useContext(AuthContext);

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };
  return (
    <section className="w-full mt-28">
      <div className="w-[32%] pb-6 mr-auto ml-auto border-b-8 border-solid border-red-500 ">
        <h1 className="main-text-color text-center font-bold text-3xl">
          GET INFROMED
          <br />
          READ WORLDWIDE NEWS FROM ONE PLACE
        </h1>
      </div>
      <div onClick={openSignUp} className="w-full text-center mt-12">
        <AppButton
          className="bg-red-600 text-white font-bold w-[120px] hover:bg-red-700  rounded h-[60px] pb-1"
          text="Get started"
        />
      </div>
    </section>
  );
};

export default HeroSection;
