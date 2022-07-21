import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Title = ({children}) => {
  return <h1 className={styles.title}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
