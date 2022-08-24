import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormField = ({ label, input }) => {
  return (
    <div className={styles.root}>
      {label}
      {input}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.element.isRequired,
  input: PropTypes.element.isRequired,
};

export default FormField;
