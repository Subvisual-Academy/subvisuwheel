import { PropTypes } from "prop-types";

import MainContainer from "components/MainContainer";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.scss";

const LayoutWithBackground = ({ children }) => {
  return (
    <MainContainer hasGradient={true}>
      <div className={styles.svgWrapper}>
        <WheelImageTopRight />
      </div>
      {children}
    </MainContainer>
  );
};

export default LayoutWithBackground;

LayoutWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
