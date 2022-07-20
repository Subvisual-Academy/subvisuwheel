import { PropTypes } from "prop-types";
import "./button.css";

const Button = (props) => {
  return (
    <span
      className="spinButton"
      onClick=""
      style={{ borderColor: props.colors[0] }}
    >
      SPIN
    </span>
  );
};

Button.propTypes = {
  colors: PropTypes.string.isRequired,
};

export default Button;
