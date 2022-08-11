import { PropTypes } from "prop-types";

import Heading2 from "components/Typography/Heading2";
import Heading3 from "components/Typography/Heading3";
import Input from "components/Input";
import Checkbox from "components/Checkbox";

import styles from "./index.module.css";

const InterestsForm = ({ handleChange, addedInterest, error }) => {
  return (
    <>
      <div className={styles.prompt}>
        <Heading3>What are your interests?</Heading3>
      </div>
      <div className={styles.suggestion}>
        <Heading2>Pick one or more!</Heading2>
      </div>
      <div className={styles.checkbox}>
        <Checkbox
          id="Development"
          label="Development"
          onChange={handleChange("selectedInterests")}
          error={error.hasError}
          errorMessage={error.message}
        />
        <Checkbox
          id="Design"
          label="Design"
          onChange={handleChange("selectedInterests")}
        />
        <Checkbox
          id="Product Management"
          label="Product Management"
          onChange={handleChange("selectedInterests")}
        />
      </div>
      <Input
        id="interests"
        type="text"
        placeholder="Type something else"
        value={addedInterest}
        onChange={handleChange("addedInterest")}
      />
    </>
  );
};
InterestsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  addedInterest: PropTypes.string.isRequired,
  error: PropTypes.object,
};

export default InterestsForm;
