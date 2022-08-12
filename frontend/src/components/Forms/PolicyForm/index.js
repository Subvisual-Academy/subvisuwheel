import BackLink from "components/BackLink";
import Checkbox from "components/Checkbox";
import Body from "components/Typography/Body";
import Heading2 from "components/Typography/Heading2";
import Button from "components/Button";

import { PropTypes } from "prop-types";

import styles from "./index.module.css";

const PolicyForm = ({ handleChange, submitData }) => {
  return (
    <div className={styles.root}>
      <BackLink href="/signup" />
      <div className={styles.main}>
        <div className={styles.headingWrapper}>
          <Heading2>Your privacy matters.</Heading2>
        </div>

        <div className={styles.bodyWrapper}>
          <Body>
            Playing the Wheel of Fortune means your data will be stored only for
            hiring prospects, with the guarantee that it will remain
            confidential within the Universe Companies. Besides, it can be
            deleted anytime you want.
          </Body>
        </div>
        <Checkbox
          id="jobs"
          label="I want to learn about upcoming job opportunities."
          onChange={handleChange("consent")}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button onClick={submitData}>I agree</Button>
      </div>
    </div>
  );
};

PolicyForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  submitData: PropTypes.func.isRequired,
};

export default PolicyForm;
