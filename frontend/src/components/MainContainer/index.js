import { PropTypes } from "prop-types";
import classNames from "classnames";

import styles from "./index.module.scss";

const MainContainer = ({ hasGradient, children }) => {
  const mainContainerClassName = classNames(styles.root, {
    [styles.withGradient]: hasGradient,
  });

  return <div className={mainContainerClassName}>{children}</div>;
};

MainContainer.defaultProps = {
  hasGradient: false,
};

MainContainer.propTypes = {
  hasGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MainContainer;
