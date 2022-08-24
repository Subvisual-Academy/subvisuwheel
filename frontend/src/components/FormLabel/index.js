import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormLabel = ({ id, children }) => {
  return (
    <label htmlFor={id} className={styles.root}>
      {children}
    </label>
  );
};

FormLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormLabel;
