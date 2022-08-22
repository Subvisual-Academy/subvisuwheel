import { PropTypes } from "prop-types";
import { OTHER, SELECTED_INTERESTS } from "pages/SignupPage";

import CheckboxWithIcon from "components/CheckboxWithIcon";
import FormLayout from "components/Forms/FormLayout";
import Input from "components/Input";

import development from "assets/svgs/checkboxes/development.svg";
import design from "assets/svgs/checkboxes/design.svg";
import pm from "assets/svgs/checkboxes/pm.svg";
import other from "assets/svgs/checkboxes/other.svg";

import styles from "./index.module.css";

const InterestsForm = ({
  handleChange,
  validatesChecked,
  inputHidden,
  extraInterest,
}) => {
  return (
    <FormLayout
      headerText="What are you interested in?"
      subtitleText="In case you want to know job opportunities"
    >
      <>
        <div className={styles.selectedInterestsWrapper}>
          <CheckboxWithIcon
            id="development"
            icon={development}
            label="Development"
            checked={validatesChecked("development")}
            onChange={handleChange(SELECTED_INTERESTS)}
          />
          <CheckboxWithIcon
            id="design"
            icon={design}
            label="Design"
            checked={validatesChecked("design")}
            onChange={handleChange(SELECTED_INTERESTS)}
          />
          <CheckboxWithIcon
            id="product-management"
            icon={pm}
            label="PM"
            checked={validatesChecked("product-management")}
            onChange={handleChange(SELECTED_INTERESTS)}
          />
          <CheckboxWithIcon
            id={OTHER}
            icon={other}
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
