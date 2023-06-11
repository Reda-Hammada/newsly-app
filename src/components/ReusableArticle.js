import React from "react";
import PropTypes from "prop-types";

const ReusableArticle = (props) => {
  const { image, title } = props;
  return (
    <div className="bg-white  cursor-pointer h-fit pb-16 w-[430px] rounded-lg border-2 mb-6  border border-gray-200 border-solid rounded">
      <div className="w-[90%]   ml-auto mr-auto mt-3 rounde-lg text-center">
        <img
          src={image}
          alt="article image"
          className="rounded rounded-lg w-[100%] h-[300px]"
        />
      </div>
      <div className="w-[90%]">
        <p className="ml-5 text-main-text-color text-[1rem]  mt-3">{title}</p>
      </div>
    </div>
  );
};

ReusableArticle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReusableArticle;
