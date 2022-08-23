import { PropTypes } from "prop-types";
import Heading from "components/Typography/Heading";

import styles from "./index.module.css";

const FormLayout = ({ children, headerText, subtitleText }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>
        <Heading>{headerText}</Heading>
      </div>
      <div className={styles.subtitleWrapper}>
        <Heading level={4}>{subtitleText}</Heading>
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
