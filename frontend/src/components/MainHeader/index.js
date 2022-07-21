import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/signup">
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/wheel">
              Wheel
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/social-network">
              Social Network
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/win-prize">
              Win Prize
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
