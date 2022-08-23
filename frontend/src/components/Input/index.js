import { PropTypes } from "prop-types";
import styles from "./index.module.css";
import Body from "components/Typography/Body";

const Input = ({
  id,
  name,
  type,
  maxLength,
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  return (
    <>
      <div className={styles.labelWrapper}>
        <Body>{name}</Body>
      </div>
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
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  disabled: false,
  type: "text",
  maxLength: 50,
};

export default Input;
