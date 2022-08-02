import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Head3 = ({ children }) => {
  return <div className={styles.head3}>{children}</div>;
};

Head3.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Head3;
