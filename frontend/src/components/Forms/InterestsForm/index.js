import { PropTypes } from "prop-types";
import { OTHER, SELECTED_INTERESTS } from "pages/SignupPage";

import Checkbox from "components/Checkbox";
import FormLayout from "components/Forms/FormLayout";
import Input from "components/Input";

import styles from "./index.module.css";

const InterestsForm = ({
  handleChange,
  validatesChecked,
  inputHidden,
  extraInterest,
}) => {
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
            checked={validatesChecked("development")}
            onChange={handleChange(SELECTED_INTERESTS)}
          />
          <Checkbox
            id="design"
            label="Design"
            checked={validatesChecked("design")}
            onChange={handleChange(SELECTED_INTERESTS)}
          />
          <Checkbox
            id="product-management"
            label="Product Management"
            checked={validatesChecked("product-management")}
            onChange={handleChange(SELECTED_INTERESTS)}
          />
          <Checkbox
            id={OTHER}
            label="Other"
            checked={validatesChecked(OTHER)}
            onChange={handleChange(OTHER)}
          />
        </div>
        <Input
          id="interests"
          type="text"
          placeholder="Type something else"
          hidden={inputHidden}
          value={extraInterest}
          onChange={handleChange("extraInterest")}
        />
      </>
    </FormLayout>
  );
};
InterestsForm.propTypes = {
  inputHidden: PropTypes.bool,
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  validatesChecked: PropTypes.func.isRequired,
};

export default InterestsForm;
