import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Title = (props) => {
  return <h1 className={styles.title}>{props.content}</h1>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;
