import { PropTypes } from "prop-types";

import { ReactComponent as DevelopmentIcon } from "assets/svgs/checkboxes/development.svg";
import { ReactComponent as DesignIcon } from "assets/svgs/checkboxes/design.svg";
import { ReactComponent as PMIcon } from "assets/svgs/checkboxes/pm.svg";
import { ReactComponent as OtherIcon } from "assets/svgs/checkboxes/other.svg";

import { OTHER, SELECTED_INTERESTS } from "pages/SignupPage";

import CheckboxWithIcon from "components/CheckboxWithIcon";
import FormLayout from "components/Forms/FormLayout";

import styles from "./index.module.css";

const InterestsForm = ({ handleChange, validatesChecked }) => {
  const INTERESTS = {
    development: {
      handler: SELECTED_INTERESTS,
      icon: <DevelopmentIcon />,
      label: "Development",
    },
    design: {
      handler: SELECTED_INTERESTS,
      icon: <DesignIcon />,
      label: "Design",
    },
    pm: {
      handler: SELECTED_INTERESTS,
      icon: <PMIcon />,
      label: "PM",
    },
    other: {
      handler: OTHER,
      icon: <OtherIcon />,
      label: "Other",
    },
  };

  return (
    <FormLayout
      headerText="Your interests."
      subtitleText={"In case you want to learn about job opportunities"}
      isInterests={true}
    >
      <div className={styles.selectedInterestsWrapper}>
        {Object.keys(INTERESTS).map((interest) => {
          return (
            <div key={interest}>
              <CheckboxWithIcon
                id={interest}
                icon={INTERESTS[interest].icon}
                label={INTERESTS[interest].label}
                checked={validatesChecked(interest)}
                onChange={handleChange(INTERESTS[interest].handler)}
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
