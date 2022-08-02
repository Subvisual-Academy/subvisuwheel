import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Head2 = ({ children }) => {
  return <div className={styles.head2}>{children}</div>;
};

Head2.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Head2;
