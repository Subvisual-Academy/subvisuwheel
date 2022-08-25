import { PropTypes } from "prop-types";

import FormField from "components/FormField";
import FormLabel from "components/FormLabel";
import FormHint from "components/FormHint";
import FormLayout from "components/Forms/FormLayout";
import Input from "components/Input";

const OtherForm = ({ extraInterest, handleChange }) => {
  return (
    <FormLayout
      headerText="Your interests."
      subtitleText="In case you want to learn about job opportunities"
      isOtherInterest={true}
    >
      <FormField
        hint={<FormHint>Enter 50 characters or less</FormHint>}
        label={<FormLabel id="other">Other interest</FormLabel>}
        input={
          <Input
            id="other"
            name="Other"
            type="text"
            placeholder="What are you interested in?"
            value={extraInterest}
            onChange={handleChange("extraInterest")}
          />
        }
      ></FormField>
    </FormLayout>
  );
};

OtherForm.propTypes = {
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default OtherForm;
