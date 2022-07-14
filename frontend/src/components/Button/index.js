import "./button.css";

const Button = (props) => {
  return (
    <div className="btn-container">
      <button className="default-button">{props.content}</button>
    </div>
  );
};

export default Button;
