import { PropTypes } from "prop-types";
import "./button.css";

const Button = (props) => {
  return (
    <div className="btn-container">
      <button className="default-button">{props.children}</button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
