import { PropTypes } from "prop-types";

import MainContainer from "components/MainContainer";
import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bottom-left-landing.svg";
import { ReactComponent as WheelImageBottomRight } from "assets/svgs/wheel-background/bottom-right.svg";
import { ReactComponent as WheelImageTopLeft } from "assets/svgs/wheel-background/top-left.svg";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.scss";
import classNames from "classnames";

const LayoutWithBackground = ({
  children,
  isInvertedTop,
  isInvertedBottom,
}) => {
  const svgTopClassName = classNames(styles.svgWrapperTop, {
    [styles.topRight]: isInvertedTop,
  });
  const svgBottomClassName = classNames(styles.svgWrapperBottom, {
    [styles.bottomRight]: isInvertedBottom,
  });

  return (
    <MainContainer hasGradient={true}>
      <div className={svgTopClassName}>
        {isInvertedTop ? <WheelImageTopRight /> : <WheelImageTopLeft />}
      </div>
      {children}
      <div className={svgBottomClassName}>
        {isInvertedBottom ? (
          <WheelImageBottomRight />
        ) : (
          <WheelImageBottomLeft />
        )}
      </div>
    </MainContainer>
  );
};

export default LayoutWithBackground;

LayoutWithBackground.defaultProps = {
  isInvertedTop: false,
  isInvertedBottom: false,
};

LayoutWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
  isInvertedTop: PropTypes.bool,
  isInvertedBottom: PropTypes.bool,
};
