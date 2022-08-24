import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormInput = ({
  disabled,
  id,
  maxLength,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <input
      id={id}
      disabled={disabled}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
};

FormInput.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  disabled: false,
  maxLength: 50,
  type: "text",
};

export default FormInput;
