import styles from "./index.module.css";
import { PropTypes } from "prop-types";

const FormField = ({ hint, input, label }) => {
  return (
    <div className={styles.root}>
      {label}
      {input}
      {hint && hint}
    </div>
  );
};

FormField.propTypes = {
  hint: PropTypes.element,
  input: PropTypes.element.isRequired,
  label: PropTypes.element.isRequired,
};

export default FormField;
