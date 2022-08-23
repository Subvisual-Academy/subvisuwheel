import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Caption = ({ children }) => {
  return <div className={styles.caption}>{children}</div>;
};

Caption.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Caption;
