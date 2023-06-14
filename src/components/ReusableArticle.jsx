import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const ReusableArticle = (props) => {
  const { image, title, author } = props;
  const { isDarkTheme } = useSelector((state) => state.theme);

  return (
    <div
      className={`  ${
        isDarkTheme
          ? "bg-dark-theme-color text-white border-gray-600"
          : "bg-white text-main-text-color  border-gray-200"
      } cursor-pointer h-fit pb-16 w-[370px] rounded-lg border-2 mb-6  border border-solid rounded`}
    >
      <div className="w-[100%]   ml-auto mr-auto text-center">
        <img src={image} alt="article image" className=" w-[100%] h-[320px]" />
      </div>
      <div className="w-[90%]">
        <p className="ml-5  text-[20px]  mt-3">{title}</p>
      </div>
      <div className="w-[100%">
        <p className="ml-5 mt-2  ">{author}</p>
      </div>
    </div>
  );
};

ReusableArticle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ReusableArticle;
