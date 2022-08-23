import { PropTypes } from "prop-types";
import Heading1 from "components/Typography/Heading1";
import Heading4 from "components/Typography/Heading4";

import styles from "./index.module.css";
import classNames from "classnames";

const FormLayout = ({
  children,
  headerText,
  subtitleText,
  isInterests,
  isOtherInterest,
}) => {
  const subtitleClassName = classNames(styles.subtitleWrapper, {
    [styles.subtitleInterests]: isInterests,
    [styles.subtitleOtherInterest]: isOtherInterest,
  });

  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>
        <Heading1>{headerText}</Heading1>
      </div>
      <div className={subtitleClassName}>
        <Heading4>{subtitleText}</Heading4>
      </div>
      {children}
    </div>
  );
};

FormLayout.defaultProps = {
  isInterests: false,
  isOtherInterest: false,
};

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
  headerText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  isInterests: PropTypes.bool,
  isOtherInterest: PropTypes.bool,
};

export default FormLayout;
