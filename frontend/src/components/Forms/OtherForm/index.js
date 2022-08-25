import { PropTypes } from "prop-types";

import FormField from "components/FormField";
import FormHint from "components/FormHint";
import FormInput from "components/FormInput";
import FormLabel from "components/FormLabel";
import FormLayout from "components/Forms/FormLayout";

const OtherForm = ({ extraInterest, handleChange }) => {
  return (
    <FormLayout
      headerText="Your interests."
      subtitleText="In case you want to learn about job opportunities"
    >
      <FormField
        hint={<FormHint>Enter 50 characters or less</FormHint>}
        label={<FormLabel id="other">Other interest</FormLabel>}
        input={
          <FormInput
            id="other"
            name="Other"
            type="text"
            placeholder="What are you interested in?"
            value={extraInterest}
            onChange={handleChange("extraInterest")}
          />
        }
      />
    </FormLayout>
  );
};

OtherForm.propTypes = {
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default OtherForm;
