import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Logo = ({ children }) => {
  return <p className={styles.logo}>{children}</p>;
};

Logo.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Logo;
