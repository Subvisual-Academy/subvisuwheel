import styles from "./index.module.css";
import { PropTypes } from "prop-types";

function Heading({ children, level }) {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={styles[`h${level}`]}>{children}</HeadingTag>;
}

Heading.defaultProps = { level: 1 };

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
