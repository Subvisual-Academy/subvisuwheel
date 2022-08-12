import { PropTypes } from "prop-types";
import Heading2 from "components/Typography/Heading2";
import Heading3 from "components/Typography/Heading3";

import styles from "./index.module.css";

const FormLayout = ({ children, headerText, promptText }) => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Heading2>{headerText}</Heading2>
      </div>
      <div className={styles.promptWrapper}>
        <Heading3>{promptText}</Heading3>
      </div>
      {children}
    </>
  );
};

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
  headerText: PropTypes.string.isRequired,
  promptText: PropTypes.string.isRequired,
};

export default FormLayout;
