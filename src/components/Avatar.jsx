import PropTypes from "prop-types";

const Avatar = (props) => {
  const { imageUser, className } = props;
  return (
    <img
      className={`${className}`}
      src={imageUser}
      alt="user avatar"
    />
  );
};

Avatar.propTypes = {
  imageUser: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Avatar;
