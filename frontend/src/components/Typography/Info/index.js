import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Info = ({ children }) => {
  return <p className={styles.info}>{children}</p>;
};

Info.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Info;
