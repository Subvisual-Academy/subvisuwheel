import { PropTypes } from "prop-types";
import Input from "components/Input";

import FormLayout from "components/Forms/FormLayout";

const OtherForm = ({ extraInterest, handleChange }) => {
  return (
    <FormLayout
      headerText="Your interests."
      subtitleText="In case you want to learn about job opportunities"
      isOtherInterest={true}
    >
      <Input
        id="other"
        name="Other interest"
        type="text"
        caption="Enter 50 characters or less."
        placeholder="What are you interested in?"
        value={extraInterest}
        onChange={handleChange("extraInterest")}
      />
    </FormLayout>
  );
};

OtherForm.propTypes = {
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default OtherForm;
