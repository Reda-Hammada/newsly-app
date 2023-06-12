import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SettingDropDown = () => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(LogoutUser());
    console.log("log out");
  };
  return (
    <div className="bg-gray-200 text-main-text-color  text-start right-0 absolute h-[200px] w-[200px]">
      <div className="w-full text-[18px]">
        {/** Setting */}
        <Link to="/Settings">
          <div className="border-b cursor-pointer border-gray-300 pl-3 pt-5 pb-5">
            <p>Settings</p>
          </div>
        </Link>
        {/** theme */}
        <div className="border-b cursor-pointer border-gray-300 pl-3 pt-5 pb-5">
          <p>Dark mode</p>
        </div>
        {/** log out */}
        <div
          onClick={logOutUser}
          className="pl-3 cursor-pointer border-gray-300 pt-5 pb-6"
        >
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SettingDropDown;
