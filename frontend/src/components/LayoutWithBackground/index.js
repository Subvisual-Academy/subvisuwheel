import { PropTypes } from "prop-types";

import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.scss";

const LayoutWithBackground = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.svgWrapper}>
        <WheelImageTopRight />
      </div>
      {children}
    </div>
  );
};

export default LayoutWithBackground;

LayoutWithBackground.propTypes = {
  children: PropTypes.elementType.isRequired,
};
