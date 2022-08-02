import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Head3 = ({ children }) => {
  return <h3 className={styles.head3}>{children}</h3>;
};

Head3.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Head3;
