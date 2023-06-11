import React, { useContext, useEffect, useState } from "react";
import ReusableButton from "./ReusableButton ";
import Logo from "../assets/images/newsly-logo.png";
import { AuthContext } from "../Pages/HomePage";
import { useSelector } from "react-redux";
const Header = () => {
  const { updateAuthState } = useContext(AuthContext);
  const { isAuthenticated } = useSelector((state) => state.auth || {});

  const openLogIn = () => {
    updateAuthState("logIn", true);
  };

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };

  return (
    <div>
      <header className="border-b-2 fixed top-0 right-0 w-full bg-white  border-solid border-gray-100 pb-2">
        <nav className=" flex justify-between pt-2">
          <div className=" w-[150px]">
            <img src={Logo} alt="Newsly Logo" />
          </div>
          {isAuthenticated === true ? (
            <p>User</p>
          ) : (
            // Auth Buttons
            <div className="flex mr-5 mt-3">
              <div onClick={openSignUp} className="mr-3">
                {/*Sign up */}
                <ReusableButton
                  className="bg-red-600 text-white font-bold w-[100px] hover:bg-white hover:text-main-text-color rounded h-[50px] pb-1"
                  text="Sign up"
                />
              </div>

              <div onClick={openLogIn}>
                {/*Log in */}
                <ReusableButton
                  className="bg-white text-main-text-color font-bold ml-6 w-[100px] hover:bg-red-600 hover:text-white rounded h-[50px] pb-1"
                  text="Log in"
                />
              </div>

              {/* Auth button */}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
