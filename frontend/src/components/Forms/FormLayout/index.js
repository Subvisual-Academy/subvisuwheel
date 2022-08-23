import { PropTypes } from "prop-types";
import Heading from "components/Heading";
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
        <Heading>{headerText}</Heading>
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
  children: PropTypes.node.isRequired,
  headerText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  isInterests: PropTypes.bool,
  isOtherInterest: PropTypes.bool,
};

export default FormLayout;
