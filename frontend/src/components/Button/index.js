import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Button = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
