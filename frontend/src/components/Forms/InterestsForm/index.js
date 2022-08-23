import { PropTypes } from "prop-types";
import { ICON } from "constants/Subvisual.js";
import { OTHER, SELECTED_INTERESTS } from "pages/SignupPage";

import CheckboxWithIcon from "components/CheckboxWithIcon";
import FormLayout from "components/Forms/FormLayout";

import styles from "./index.module.css";

const InterestsForm = ({ handleChange, validatesChecked }) => {
  const interestsInfo = {
    development: {
      label: "Development",
      handler: SELECTED_INTERESTS,
    },
    design: {
      label: "Design",
      handler: SELECTED_INTERESTS,
    },
    pm: {
      label: "PM",
      handler: SELECTED_INTERESTS,
    },
    other: {
      label: "Other",
      handler: OTHER,
    },
  };

  return (
    <FormLayout
      headerText="What are you interested in?"
      subtitleText="In case you want to know job opportunities"
    >
      <div className={styles.selectedInterestsWrapper}>
        {Object.keys(ICON).map((interest) => {
          return (
            <div className={styles.interest} key={interest}>
              <CheckboxWithIcon
                id={interest}
                icon={ICON[interest]}
                label={interestsInfo[interest].label}
                checked={validatesChecked(interest)}
                onChange={handleChange(interestsInfo[interest].handler)}
              />
            </div>
          );
        })}
      </div>
    </FormLayout>
  );
};
InterestsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  validatesChecked: PropTypes.func.isRequired,
};

export default InterestsForm;
