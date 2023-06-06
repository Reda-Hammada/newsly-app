function Button(props) {
  const { bgColor, textColor, text, bgColorHover } = props;
  return (
    <button
      className={`bg-${bgColor} ${textColor}  font-bold hover:bg-${bgColorHover} w-[110px] h-[50px] rounded`}
    >
      {text}
    </button>
  );
}
export default Button;
