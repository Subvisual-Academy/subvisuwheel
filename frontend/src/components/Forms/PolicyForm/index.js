import Checkbox from "components/Checkbox";
import Body from "components/Typography/Body";
import Heading2 from "components/Typography/Heading2";

import { PropTypes } from "prop-types";

import styles from "./index.module.css";

const PolicyForm = ({ handleChange }) => {
  return (
    <>
      <div className={styles.headingWrapper}>
        <Heading2>Your privacy matters.</Heading2>
      </div>
      <div className={styles.bodyWrapper}>
        <Body>
          Playing the Wheel of Fortune means your data will be stored only for
          hiring prospects, with the guarantee that it will remain confidential
          within the Universe Companies. Besides, it can be deleted anytime you
          want.
        </Body>
      </div>
      <Checkbox
        id="jobs"
        label="I want to learn about upcoming job opportunities."
        onChange={handleChange("consent")}
      />
    </>
  );
};

PolicyForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PolicyForm;
