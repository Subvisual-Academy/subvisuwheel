import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormLabel = ({ id, children }) => {
  return (
<<<<<<< HEAD
    <label htmlFor className={styles.root} id={id}>
=======
    <label htmlFor={id} className={styles.root}>
>>>>>>> 96c40d5999702bc2563d427c1b3adf65f7d040b5
      {children}
    </label>
  );
};

FormLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormLabel;
