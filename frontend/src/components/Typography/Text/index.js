import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Text = ({ children }) => {
  return <div className={styles.text}>{children}</div>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
