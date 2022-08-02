import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Heading2 = ({ children }) => {
  return <h2 className={styles.heading2}>{children}</h2>;
};

Heading2.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading2;
