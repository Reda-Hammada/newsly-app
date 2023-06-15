import React, { useContext, useState, useEffect } from "react";
import ReusableButton from "./ReusableButton ";
import { AuthContext } from "../App";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const { updateAuthState } = useContext(AuthContext);
  const user = useUserFromLocalStorage();
  const [greeting, setGreeting] = useState("");

  const refresh = () => window.location.reload(true);

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };

  useEffect(() => {
    if (isAuthenticated === true) {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(`Good Morning, ${user && user.fullname} !`);
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting(`Good Afternoon, ${user && user.fullname} !`);
      } else {
        setGreeting(`Good Evening, ${user && user.fullname} !`);
      }
    }
  }, [user,isAuthenticated]);
  return (
    <section className="w-full mt-28">
      {isAuthenticated === false ? (
        <div>
          <div className="w-[90%] pb-6 mr-auto ml-auto  ">
            <h1 className="main-text-color text-center font-bold text-3xl">
              GET INFROMED
              <br />
              READ WORLDWIDE NEWS FROM ONE PLACE
              <br />
              PERSONALIZED FEED FOR YOU
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
        <div className="ml-5 w-[100%] text-start">
          <p className="font-bold  ">
            {isAuthenticated ? <p className="text-xl">{greeting}</p> : null}
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
