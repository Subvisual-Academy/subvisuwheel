import { PropTypes } from "prop-types";
import styles from "./index.module.css";

const Text = (props) => {
  if (props.link === "") {
    return <div className={styles.text}>{props.content}</div>;
  }

  if (props.link !== "") {
    return <div className={styles.text}>{props.content}</div>;
  }
};

Text.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Text;
