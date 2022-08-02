import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Head2 = ({ children }) => {
  return <h2 className={styles.head2}>{children}</h2>;
};

Head2.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Head2;
