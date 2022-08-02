import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Body = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

Body.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Body;
