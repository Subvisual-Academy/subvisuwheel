import { PropTypes } from "prop-types";

import FormLayout from "components/Forms/FormLayout";
import FormField from "components/FormField";
import Input from "components/Input";
import FormLabel from "components/FormLabel";

const DetailsForm = ({ error, handleChange, name, email }) => {
  return (
    <FormLayout
      headerText="A little bit about you."
      subtitleText="All prizes will be collected via email"
    >
      <FormField
        label={<FormLabel id="name">Name</FormLabel>}
        input={
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
        }
      ></FormField>

      <FormLabel id="email">Email</FormLabel>
      <Input
        id="email"
        name="Email"
        type="email"
        placeholder="Type in your email"
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
