import React from "react";
import PropTypes from "prop-types";

const ReusableArticle = (props) => {
  const { image, title } = props;
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
    </div>
  );
};

ReusableArticle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReusableArticle;
