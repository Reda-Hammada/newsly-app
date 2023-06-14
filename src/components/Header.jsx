import React, { useContext, useEffect, useState } from "react";
import ReusableButton from "./ReusableButton ";
import Logo from "../assets/images/newsly-logo.png";
import { AuthContext } from "../App";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import avatar from "../assets/images/avatar.png";
import SettingDropDown from "./SettingDropDown";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
const Header = () => {
  const { updateAuthState } = useContext(AuthContext);
  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const { isDarkTheme } = useSelector((state) => state.theme);
  const user = useUserFromLocalStorage();

  const [settingState, setSettingState] = useState(false);

  const toggleSettings = () => {
    setSettingState(!settingState);
  };
  const openLogIn = () => {
    updateAuthState("logIn", true);
  };

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };

  return (
    <div>
      <header
        className={`border-b-2 fixed top-0 right-0 w-full ${
          isDarkTheme
            ? "bg-dark-theme-color border-gray-600"
            : " bg-white border-gray-100"
        }  border-solid  `}
      >
        <nav className=" flex justify-between pt-2">
          <div className=" w-[150px]">
            <img src={Logo} alt="Newsly Logo" />
          </div>
          {isAuthenticated === true ? (
            user && user.imagePath == false ? (
              <div onClick={toggleSettings}>
                <Avatar
                  className={
                    "W-[70px] cursor-pointer h-[60px] border-3 mr-12 mt-2  border rounded-full border-gray-300"
                  }
                  imageUser={avatar}
                />
              </div>
            ) : (
              <div onClick={toggleSettings}>
                <Avatar
                  className={
                    "W-[70px] cursor-pointer h-[60px] border-3 mr-12 mt-2  border rounded-full border-gray-300"
                  }
                  imageUser={user && user.imagePath}
                />
              </div>
            )
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
        {settingState === true ? <SettingDropDown /> : null}
      </header>
    </div>
  );
};

export default Header;
