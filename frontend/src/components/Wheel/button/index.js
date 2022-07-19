import { PropTypes } from "prop-types";
import "./button.css";

const Button = (props) => {

  return (
    <div className="alignVertical">
      <span className="spinButton" onClick="" style={{ "border": `3px solid ${props.colors[0]}` }}>
        SPIN
      </span>
    </div>
  );
};

Button.propTypes = {
  colors: PropTypes.string.isRequired,
};

export default Button;
