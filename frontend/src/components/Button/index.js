import { PropTypes } from "prop-types";
import styles from "./index.module.scss";

import classNames from "classnames";

const Button = ({ children, href, isDisabled, onClick }) => {
  const buttonClassName = classNames(styles.button, {
    [styles.button.disabled]: isDisabled,
  });

  return href ? (
    <a href={href} className={buttonClassName}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
