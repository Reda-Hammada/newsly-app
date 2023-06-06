import React from "react";
import PropTypes from "prop-types";

const AppButton = (props) => {
  const { text, className } = props;
  return <button className={` ${className}`}>{text}</button>;
};

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default AppButton;
