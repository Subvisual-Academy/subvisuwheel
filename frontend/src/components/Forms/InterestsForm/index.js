import { PropTypes } from "prop-types";

import Checkbox from "components/Checkbox";
import FormLayout from "components/Forms/FormLayout";
import Input from "components/Input";

import styles from "./index.module.css";

const InterestsForm = ({ handleChange, extraInterest, error }) => {
  return (
    <FormLayout
      headerText="Last thing!"
      promptText="Pick one or more interests:"
    >
      <>
        <div className={styles.selectedInterestsWrapper}>
          <Checkbox
            id="development"
            label="Development"
            onChange={handleChange("selectedInterests")}
            error={error.hasError}
            errorMessage={error.message}
          />
          <Checkbox
            id="design"
            label="Design"
            onChange={handleChange("selectedInterests")}
          />
          <Checkbox
            id="product-management"
            label="Product Management"
            onChange={handleChange("selectedInterests")}
          />
          <Checkbox
            id="other"
            label="Other"
            onChange={handleChange("selectedInterests")}
          />
        </div>
        <Input
          id="interests"
          type="text"
          placeholder="Type something else"
          value={extraInterest}
          onChange={handleChange("extraInterest")}
        />
      </>
    </FormLayout>
  );
};
InterestsForm.propTypes = {
  error: PropTypes.object,
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InterestsForm;
