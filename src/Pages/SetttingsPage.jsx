import Header from "../components/Header";
import ReuSableLink from "../components/ReuSableLink";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useUserFromLocalStorage from "../hooks/useUserFromLocalStorage";
import { useEffect } from "react";
import Avatar from "../components/Avatar";
import avatar from "../assets/images/avatar.png";
import SettingsForm from "../components/form/SettingsForm";

const SettingPage = () => {
  const user = useUserFromLocalStorage();
  const { isAuthenticated, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const { isDarkTheme } = useSelector((state) => state.theme);

  const navigate = useNavigate();

  // if user not authenticated redirect him to the home page
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    } else {
      navigate("/Settings");
    }
  }, [isAuthenticated, user, message, isSuccess, navigate]);
  return (
    <section
      className={` ${
        isDarkTheme ? "bg-dark-theme-color text-white" : "bg-white  text-black "
      }`}
    >
      <Header />
      <ReuSableLink secondLink="Settings" />
      {isSuccess === true ? (
        <div
          className={` mt-[-5px] pt-2 pb-2 pl-2 ${
            isDarkTheme ? "bg-[#454545]   text-white" : "bg-gray-400 "
          }w-full mt-[83px] `}
        >
          {message}
        </div>
      ) : null}

      <section className="w-full h-[100vh] mt-[5%]">
        <div className=" w-[80%] border-b pb-6 pl-6 flex justiyf-start  ml-[5%]">
          <>
            <div className="">
              <Avatar
                className={
                  "W-[80px]  h-[70px] border-3 mr-12 mt-2  border rounded-full border-gray-300"
                }
                imageUser={avatar}
              />
            </div>
            <div>
              <p className="text-2xl mt-4  uppercase   font-bold">
                {user && user.fullname}
              </p>
            </div>
          </>
        </div>
        {/* user settings */}
        <div>
          <p className="font-bold mt-12 ml-[6%] uppercase  text-2xl">
            User Settings
          </p>
        </div>
        <div className="">
          <SettingsForm />
        </div>
      </section>
    </section>
  );
};

export default SettingPage;
