import { PropTypes } from "prop-types";
import Heading1 from "components/Typography/Heading1";

import styles from "./index.module.css";

const FormLayout = ({ children, headerText }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Heading1>{headerText}</Heading1>
      </div>
      {children}
    </>
  );
};

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default FormLayout;
