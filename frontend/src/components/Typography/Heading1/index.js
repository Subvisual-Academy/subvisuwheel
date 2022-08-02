import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Head1 = ({ children }) => {
  return <h1 className={styles.head1}>{children}</h1>;
};

Head1.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Head1;
