import { PropTypes } from "prop-types";

import styles from "./index.module.scss";

const ContainerWithGradient = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default ContainerWithGradient;

ContainerWithGradient.propTypes = {
  children: PropTypes.node.isRequired,
};
