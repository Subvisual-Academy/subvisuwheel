import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Heading4 = ({ children }) => {
  return <h4 className={styles.heading4}>{children}</h4>;
};

Heading4.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading4;
