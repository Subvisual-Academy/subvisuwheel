import { PropTypes } from "prop-types";

import ContainerWithGradient from "components/ContainerWithGradient";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.scss";

const LayoutWithBackground = ({ children }) => {
  return (
    <ContainerWithGradient>
      <div className={styles.svgWrapper}>
        <WheelImageTopRight />
      </div>
      {children}
    </ContainerWithGradient>
  );
};

export default LayoutWithBackground;

LayoutWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
