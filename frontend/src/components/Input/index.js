import { PropTypes } from "prop-types";
import styles from "./index.module.css";
import classNames from "classnames";

const Input = ({ type, placeholder, disabled, error, errorMessage }) => {
  const inputClassNames = classNames(styles.input, {
    [styles.hasError]: error,
  });

  return (
    <>
      {error ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={inputClassNames}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
  type: "text",
};

export default Input;
