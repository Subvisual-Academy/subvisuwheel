import { PropTypes } from "prop-types";
import Heading from "components/Typography/Heading";
import Body from "components/Typography/Body";

import styles from "./index.module.css";

const FormLayout = ({ children, headerText, secondaryText }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>
        <Heading>{headerText}</Heading>
      </div>
      <div className={styles.subtitleWrapper}>
        <Body>{secondaryText}</Body>
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
  secondaryText: PropTypes.string.isRequired,
  isInterests: PropTypes.bool,
  isOtherInterest: PropTypes.bool,
};

export default FormLayout;
