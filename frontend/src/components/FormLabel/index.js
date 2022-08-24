import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormLabel = ({ id, children }) => {
  return (
    <label htmlFor className={styles.root} id={id}>
      {children}
    </label>
  );
};

FormLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormLabel;
