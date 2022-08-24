import { PropTypes } from "prop-types";

import FormLayout from "components/Forms/FormLayout";
import FormField from "components/FormField";
import Input from "components/Input";
import FormLabel from "components/FormLabel";

const OtherForm = ({ extraInterest, handleChange }) => {
  return (
    <FormLayout
      headerText="Your interests."
      subtitleText="In case you want to learn about job opportunities"
      isOtherInterest={true}
    >
      <FormField
        label={<FormLabel id="other">Other interest</FormLabel>}
        input={
          <Input
            id="other"
            name="Other"
            type="text"
            placeholder="What are you interested in?"
            caption="Enter 50 characters or less"
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
