import React from "react";
import PropTypes from "prop-types";

const ReusableArticle = (props) => {
  const { image, title, author } = props;
  return (
    <div className="bg-white   cursor-pointer h-fit pb-16 w-[370px] rounded-lg border-2 mb-6  border border-gray-200 border-solid rounded">
      <div className="w-[100%]   ml-auto mr-auto text-center">
        <img src={image} alt="article image" className=" w-[100%] h-[320px]" />
      </div>
      <div className="w-[90%]">
        <p className="ml-5  text-main-text-color text-[20px]  mt-3">
          / {title}
        </p>
      </div>
      <div className="w-[100%">
        <p className="ml-6 text-gray-400">{author}</p>
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
