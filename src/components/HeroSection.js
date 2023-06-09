import React, { useContext } from "react";
import ReusableButton from "./ReusableButton ";
import { AuthContext } from "../Pages/HomePage";
import Greeting from "../features/greetingService";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
const HeroSection = () => {
  const { updateAuthState } = useContext(AuthContext);

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };

  const greeting = Greeting();
  const user = useUserFromLocalStorage();
  return (
    <section className="w-full mt-28">
      {user === null ? (
        <div>
          <div className="w-[90%] pb-6 mr-auto ml-auto  ">
            <h1 className="main-text-color text-center font-bold text-3xl">
              GET INFROMED
              <br />
              READ WORLDWIDE NEWS FROM ONE PLACE
            </h1>
            <div className=" w-[40%] text-center mt-5 mr-auto ml-auto border-b-8 border-solid border-red-500 block"></div>
          </div>
          <div className="w-full text-center mt-12">
            <div onClick={openSignUp}>
              <ReusableButton
                className="bg-red-600 text-white font-bold w-[120px] hover:bg-red-700  rounded h-[60px] pb-1"
                text="Get started"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-28">
          <p className="font-bold  text-main-text-color">
            {greeting}, {user.fullname} !
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
