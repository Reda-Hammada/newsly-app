const SettingDropDown = () => {
  return (
    <div className="bg-gray-200 text-main-text-color  text-start right-0 absolute h-[200px] w-[200px]">
      <div className="w-full text-[18px]">
        {/** Setting */}
        <div className="border-b cursor-pointer border-gray-300 pl-3 pt-5 pb-5">
          <p>Settings</p>
        </div>
        {/** theme */}
        <div className="border-b cursor-pointer border-gray-300 pl-3 pt-5 pb-5">
          <p>Dark mode</p>
        </div>
        {/** log out */}
        <div className="pl-3 cursor-pointer border-gray-300 pt-5 pb-6">
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SettingDropDown;
