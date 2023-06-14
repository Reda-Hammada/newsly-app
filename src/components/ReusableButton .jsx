import React from "react";
import PropTypes from "prop-types";

const ReusableButton = (props) => {
  const { text, className, disabled } = props;
  return (
    <button disabled={disabled} className={` ${className}`}>
      {text}
    </button>
  );
};

ReusableButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default ReusableButton;
