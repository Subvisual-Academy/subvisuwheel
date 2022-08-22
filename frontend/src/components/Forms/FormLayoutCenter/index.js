import { PropTypes } from "prop-types";

import styles from "./index.module.css";

const FormLayoutCenter = ({ children }) => {
  return <div className={styles.centerLayout}>{children}</div>;
};

FormLayoutCenter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FormLayoutCenter;
