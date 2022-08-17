import { PropTypes } from "prop-types";

import Input from "components/Input";
import FormLayout from "components/Forms/FormLayout";

function EmailForm({ email, error, handleChange }) {
  return (
    <FormLayout headerText="How can we reach you?">
      <Input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange("email")}
        error={error.hasError}
        errorMessage={error.message}
      />
    </FormLayout>
  );
}

EmailForm.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default EmailForm;
