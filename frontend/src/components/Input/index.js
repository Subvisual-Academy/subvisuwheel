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
  value,
  onChange,
}) => {
  const inputClassNames = classNames(styles.input, {
    [styles.hidden]: hidden,
  });

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
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  disabled: false,
  hidden: false,
  type: "text",
  maxLength: 50,
};

export default Input;
