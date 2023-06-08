import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import AppButton from "./AppButton";
import Logo from "../assets/images/newsly-logo.png";
import { AuthContext } from "../Pages/HomePage";
const Header = () => {
  const { authState, updateAuthState } = useContext(AuthContext);

  const openLogIn = () => {
    updateAuthState("logIn", true);
  };

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };
  return (
    <div>
      <header
        onClick={openSignUp}
        className="border-b-2 pb-2  border-solid border-gray-100 pb-9"
      >
        <nav className=" flex justify-between pt-4">
          {/* Logo */}
          <div className=" w-[150px]">
            <img src={Logo} alt="Newsly Logo" />
          </div>
          {/* Logo */}

          {/* Search bar */}
          <div>
            <SearchBar />
          </div>
          {/* Search bar */}

          {/* Auth button */}
          <div className="mr-3">
            {/*Sign up */}
            <AppButton
              onClick={openSignUp}
              className="bg-red-600 text-white font-bold w-[100px] hover:bg-white hover:text-main-text-color rounded h-[50px] pb-1"
              text="Sign up"
            />
            {/*Log in */}
            <AppButton
              onClick={openLogIn}
              className="bg-white text-main-text-color font-bold ml-6 w-[100px] hover:bg-red-600 hover:text-white rounded h-[50px] pb-1"
              text="Log in"
            />
          </div>
          {/* Auth button */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
