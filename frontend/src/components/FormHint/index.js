import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormHint = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

FormHint.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormHint;
