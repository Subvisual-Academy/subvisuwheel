import { PropTypes } from "prop-types";

import styles from "./index.module.scss";

function CheckboxWithIcon({ id, icon, label, checked, disabled, onChange }) {
  return (
    <div className={styles.root}>
      <input
        id={id}
        className={styles.input}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />

      <div className={styles.control}>
        <img alt="icon" src={icon} className={styles.icon}></img>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
    </div>
  );
}

CheckboxWithIcon.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

CheckboxWithIcon.defaultProps = {
  disabled: false,
};

export default CheckboxWithIcon;
