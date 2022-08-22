import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Heading4 = ({ children }) => {
  return <h3 className={styles.heading3}>{children}</h3>;
};

Heading4.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading4;
