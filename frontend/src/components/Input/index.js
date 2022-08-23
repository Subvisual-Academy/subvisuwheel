import { PropTypes } from "prop-types";
import styles from "./index.module.css";
import Body from "components/Typography/Body";
import Caption from "components/Typography/Caption";

import classNames from "classnames";

const Input = ({
  id,
  name,
  type,
  caption,
  maxLength,
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  const captionClassName = classNames(styles.captionWrapper, {
    [styles.captionInvisible]: !caption,
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
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      <div className={captionClassName}>
        <Caption>{caption}</Caption>
      </div>
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
  caption: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  type: "text",
  maxLength: 50,
  caption: "",
};

export default Input;
