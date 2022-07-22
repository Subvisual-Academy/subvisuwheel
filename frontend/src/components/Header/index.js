import styles from "./index.module.css";
import { PropTypes } from "prop-types";

function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
