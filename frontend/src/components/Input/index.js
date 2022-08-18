import { PropTypes } from "prop-types";
import styles from "./index.module.css";
import classNames from "classnames";
import Body from "components/Typography/Body";

const Input = ({
  id,
  name,
  type,
  maxLength,
  placeholder,
  disabled,
  hidden,
  error,
  errorMessage,
  value,
  onChange,
}) => {
  const inputClassNames = classNames(styles.input, {
    [styles.hasError]: error,
    [styles.hidden]: hidden,
  });

  const errorMessageClassNames = classNames(styles.errorMessage, {
    [styles.invisibleError]: !error,
  });

  return (
    <>
      <p className={errorMessageClassNames}>{errorMessage || "No error"}</p>
      <div className={styles.labelWrapper}>
        <Body>{name}</Body>
      </div>
      <input
        id={id}
        disabled={disabled}
        type={type}
        maxLength={maxLength}
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
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  disabled: false,
  hidden: false,
  type: "text",
  maxLength: 50,
  errorMessage: "No error message",
};

export default Input;
