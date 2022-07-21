import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Button = (props) => {
  return (
    <div className={styles.vertical}>
      <span
        className={styles.spin}
        onClick=""
        style={{ border: `3px solid ${props.colors[0]}` }}
      >
        SPIN
      </span>
    </div>
  );
};

Button.propTypes = {
  colors: PropTypes.string.isRequired,
};

export default Button;
