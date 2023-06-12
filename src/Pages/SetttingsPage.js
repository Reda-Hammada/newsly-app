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
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // if user not authenticated redirect him to the home page
  useEffect(() => {
    if (isAuthenticated === false && user === null) {
      navigate("/");
    } else {
      navigate("/Settings");
    }
  }, [isAuthenticated, user]);
  return (
    <section>
      <Header />
      <ReuSableLink secondLink="/Settings" />
      <section className="w-full mt-[5%]">
        <div className=" w-[80%] border-b pb-6 pl-6 flex justiyf-start  ml-[5%]">
          {user && user.imagePath === false ? (
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
                <p className="text-2xl mt-4  uppercase text-main-text-color  font-bold">
                  {user && user.fullname}
                </p>
              </div>
            </>
          ) : (
            <div className="w-[80%]">
              <Avatar imageUser={user && user.imagePath} />
              <p className="text-2xl uppercase text-main-text-color font-bold">
                {user && user.fullname}
              </p>
            </div>
          )}
        </div>
        {/* user settings */}
        <div>
          <p className="font-bold mt-12 ml-[6%] uppercase text-main-text-color text-2xl">
            User Settings
          </p>
        </div>
        <SettingsForm />
      </section>
    </section>
  );
};

export default SettingPage;
