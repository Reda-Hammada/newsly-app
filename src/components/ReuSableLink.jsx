import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const ReuSableLink = (props) => {
  const { secondLink, title } = props;
  const { isDarkTheme } = useSelector((state) => state.theme);

  return (
    <section
      className={` ${
        isDarkTheme ? "bg-[#454545]  text-white" : "bg-gray-400 "
      }w-full mt-[83px]  pt-5 pb-4`}
    >
      <p className="  text-xl uppercase pl-6">
        <Link to="/">Home / </Link>
        <Link to={secondLink}>{secondLink}</Link>
        <p className="inline">{title}</p>
      </p>
    </section>
  );
};

ReuSableLink.propTypes = {
  secondLink: PropTypes.string,
  title: PropTypes.string,
};

export default ReuSableLink;
