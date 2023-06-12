import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReuSableLink = (props) => {
  const { secondLink, title } = props;

  return (
    <section className="w-full mt-[83px] pb-3 pt-5 bg-gray-400">
      <p className="text-white  text-xl uppercase pl-6">
        <Link to="/">Home </Link>
        <Link to={secondLink}>{secondLink}</Link>
        <p className="inline">/ {title}</p>
      </p>
    </section>
  );
};

ReuSableLink.propTypes = {
  secondLink: PropTypes.string,
  title: PropTypes.string,
};

export default ReuSableLink;
