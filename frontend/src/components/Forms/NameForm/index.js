import { PropTypes } from "prop-types";

import FormLayout from "components/Forms/FormLayout";
import Input from "components/Input";

const NameForm = ({ error, handleChange, name }) => {
  return (
    <FormLayout
      headerText="Just a few questions..."
      promptText="What's your name?"
    >
      <Input
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange("name")}
        error={error.hasError}
        errorMessage={error.message}
      />
    </FormLayout>
  );
};

NameForm.propTypes = {
  error: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NameForm;
