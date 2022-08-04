import { PropTypes } from "prop-types";

import styles from "./index.module.css";

function Checkbox({ id, label, disabled, error, errorMessage }) {
  return (
    <>
      {error ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
      <div className="inputWrapper">
        <input
          id={id}
          className={styles.input}
          type="checkbox"
          disabled={disabled}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <span className={styles.control}>
          <svg
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4L4 6.66667L9 1.33333"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Checkbox.defaultProps = {
  disabled: false,
};

export default Checkbox;
