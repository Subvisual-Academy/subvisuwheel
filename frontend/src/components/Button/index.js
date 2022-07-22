import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Button = ({children}) => {
  return (
      <button className={styles.button}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
