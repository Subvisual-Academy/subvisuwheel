import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Heading1 = ({ children }) => {
  return <h1 className={styles.heading1}>{children}</h1>;
};

Heading1.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading1;
