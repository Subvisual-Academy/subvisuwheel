import { PropTypes } from "prop-types";

import MainContainer from "components/MainContainer";
import { ReactComponent as WheelImageTopLeft } from "assets/svgs/wheel-background/top-left.svg";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.scss";
import classNames from "classnames";

const LayoutWithBackground = ({ children, isInverted }) => {
  const svgClassName = classNames(styles.svgWrapper, {
    [styles.svgWrapperTopRight]: isInverted,
  });

  return (
    <MainContainer hasGradient={true}>
      <div className={svgClassName}>
        {isInverted ? <WheelImageTopRight /> : <WheelImageTopLeft />}
      </div>
      {children}
    </MainContainer>
  );
};

export default LayoutWithBackground;

LayoutWithBackground.defaultProps = {
  isInverted: false,
};

LayoutWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
  isInverted: PropTypes.bool,
};
