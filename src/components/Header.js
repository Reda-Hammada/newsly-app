import React, { useContext, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import AppButton from "./AppButton";
import Logo from "../assets/images/newsly-logo.png";
import { AuthContext } from "../Pages/HomePage";
const Header = () => {
  const { updateAuthState } = useContext(AuthContext);

  const openLogIn = () => {
    updateAuthState("logIn", true);
  };

  const openSignUp = () => {
    updateAuthState("signUp", true);
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Retrieve the user data from local storage
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  return (
    <div>
      <header className="border-b-2 pb-2  border-solid border-gray-100 pb-9">
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
          {user !== null ? (
            <div>
              <h2>User Information</h2>
              <p>ID: {user.id}</p>
              <p>Full Name: {user.fullname}</p>
              <p>Email: {user.email}</p>
              <img src={user.imagePath} alt="lol" />
            </div>
          ) : (
            <div className="flex mr-5 mt-3">
              <div onClick={openSignUp} className="mr-3">
                {/*Sign up */}
                <AppButton
                  className="bg-red-600 text-white font-bold w-[100px] hover:bg-white hover:text-main-text-color rounded h-[50px] pb-1"
                  text="Sign up"
                />
              </div>
              <div onClick={openLogIn}>
                {/*Log in */}
                <AppButton
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
