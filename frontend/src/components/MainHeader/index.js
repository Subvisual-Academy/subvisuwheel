import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/signup">
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/wheel">
              Wheel
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/social-network">
              Social Network
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/win-prize">
              Win Prize
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/articles">
              Articles
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
