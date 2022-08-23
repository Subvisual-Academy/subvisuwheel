import Checkbox from "components/Checkbox";
import Heading from "components/Typography/Heading";

import { PropTypes } from "prop-types";
import { TERMS, JOBS } from "pages/SignupPage";
import { useEffect, useState } from "react";

import styles from "./index.module.scss";

const PolicyForm = ({ handleChange, validatesChecked }) => {
  const [terms, setTerms] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/terms`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setTerms(data.link);
      });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.headingWrapper}>
        <Heading>Privacy is important to us.</Heading>
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
            <a href={terms} target="_blank" rel="noreferrer">
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
