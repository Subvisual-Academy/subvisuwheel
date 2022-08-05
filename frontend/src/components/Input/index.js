import { PropTypes } from "prop-types";
import styles from "./index.module.css";
import classNames from "classnames";

const Input = ({
  id,
  type,
  placeholder,
  disabled,
  error,
  errorMessage,
  value,
  onChange,
}) => {
  const inputClassNames = classNames(styles.input, {
    [styles.hasError]: error,
  });

  return (
    <>
      {error ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={inputClassNames}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  disabled: false,
  type: "text",
};

export default Input;
