import { PropTypes } from "prop-types";

import FormLayout from "components/Forms/FormLayout";
import Input from "components/Input";

const DetailsForm = ({ error, handleChange, name, email }) => {
  return (
    <FormLayout headerText="A little bit about you">
      <Input
        id="name"
        name="Name"
        type="text"
        placeholder="Type in your name"
        value={name}
        onChange={handleChange("name")}
        error={error.hasError}
        errorMessage={error.message}
      />
      <Input
        id="email"
        name="Email"
        type="email"
        placeholder="name@fortunemail.com"
        value={email}
        onChange={handleChange("email")}
        error={error.hasError}
        errorMessage={error.message}
      />
    </FormLayout>
  );
};

DetailsForm.propTypes = {
  error: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DetailsForm;
