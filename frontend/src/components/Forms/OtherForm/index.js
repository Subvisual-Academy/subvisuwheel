import { PropTypes } from "prop-types";
import Input from "components/Input";

const OtherForm = ({ extraInterest, handleChange }) => {
  return (
    <Input
      id="other"
      name="Other interest"
      type="text"
      placeholder="What are you interested in?"
      value={extraInterest}
      onChange={handleChange("extraInterest")}
    />
  );
};

OtherForm.propTypes = {
  extraInterest: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default OtherForm;
