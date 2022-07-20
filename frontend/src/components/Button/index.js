import { PropTypes } from "prop-types";
import "./button.css";

const Button = (props) => {
  return <button className="default-button">{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
