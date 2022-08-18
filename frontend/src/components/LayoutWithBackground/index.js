import { PropTypes } from "prop-types";

import MainContainer from "components/MainContainer";
import { ReactComponent as WheelImageTopLeft } from "assets/svgs/wheel-background/top-left.svg";

import styles from "./index.module.scss";

const LayoutWithBackground = ({ children }) => {
  return (
    <MainContainer hasGradient={true}>
      <div className={styles.svgWrapperTop}>
        <WheelImageTopLeft />
      </div>
      {children}
    </MainContainer>
  );
};

export default LayoutWithBackground;

LayoutWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
