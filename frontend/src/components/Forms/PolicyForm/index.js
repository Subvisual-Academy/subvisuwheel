import Checkbox from "components/Checkbox";
import Heading1 from "components/Typography/Heading1";

import { PropTypes } from "prop-types";
import { TERMS, JOBS } from "pages/SignupPage";

import styles from "./index.module.scss";

const PolicyForm = ({ handleChange, validatesChecked }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headingWrapper}>
        <Heading1>Privacy is important to us.</Heading1>
      </div>
      <div className={styles.checkboxWrapper}>
        <div className={styles.termsAndConditions}>
          <Checkbox
            id={TERMS}
            label="By continuing to the wheel, I agree to the"
            checked={validatesChecked(TERMS)}
            onChange={handleChange(TERMS)}
          >
            &nbsp;
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              Terms and Conditions*
            </a>
          </Checkbox>
        </div>
        <Checkbox
          id={JOBS}
          label="I want to learn about upcoming job opportunities."
          checked={validatesChecked(JOBS)}
          onChange={handleChange(JOBS)}
        />
      </div>
    </div>
  );
};

PolicyForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  validatesChecked: PropTypes.func.isRequired,
};

export default PolicyForm;
