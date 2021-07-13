import "./Button.scss";

const Button = (props) => {
  const { type, value, isHidden, onClick } = props;
  return (
    <div onClick={onClick}>
      <button type={type} className={isHidden && "hidden"}>
        {value}
      </button>
    </div>
  );
};

export default Button;
