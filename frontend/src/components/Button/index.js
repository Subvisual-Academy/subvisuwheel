import { PropTypes } from "prop-types";
import "./button.css";

const Button = (props) => {
  return (
    <div className="btn-container">
      <button className="default-button">{props.content}</button>
    </div>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
