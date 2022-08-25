import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Subtitle = ({ children }) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Subtitle;
