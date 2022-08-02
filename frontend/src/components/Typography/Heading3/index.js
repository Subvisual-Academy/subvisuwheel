import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Heading3 = ({ children }) => {
  return <h3 className={styles.heading3}>{children}</h3>;
};

Heading3.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading3;
