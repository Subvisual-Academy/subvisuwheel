import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const FormFieldLayout = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

FormFieldLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormFieldLayout;
