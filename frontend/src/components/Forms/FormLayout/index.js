import { PropTypes } from "prop-types";
import Heading1 from "components/Typography/Heading1";
import Heading4 from "components/Typography/Heading4";

import styles from "./index.module.css";

const FormLayout = ({ children, headerText, subtitleText }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Heading1>{headerText}</Heading1>
      </div>
      <div className={styles.subtitleWrapper}>
        <Heading4>{subtitleText}</Heading4>
      </div>
      {children}
    </>
  );
};

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
  headerText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
};

export default FormLayout;
