import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Button = ({ children, href, onClick }) => {
  return href ? (
    <a href={href} className={styles.button}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
