import { PropTypes } from "prop-types";
import Input from "components/Input";

import FormLayoutCenter from "components/Forms/FormLayoutCenter";

const OtherForm = ({ extraInterest, handleChange }) => {
  return (
    <FormLayoutCenter>
      <Input
        id="other"
        name="Other interest"
        type="text"
        placeholder="What are you interested in?"
        value={extraInterest}
        onChange={handleChange("extraInterest")}
      />
    </FormLayoutCenter>
  );
};

OtherForm.propTypes = {
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default OtherForm;
