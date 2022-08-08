import { PropTypes } from "prop-types";

import Heading2 from "components/Typography/Heading2";
import Heading3 from "components/Typography/Heading3";
import Input from "components/Input";

import styles from "./index.module.css";

const NameForm = ({ name, setName, error }) => {
  return (
    <>
      <div className={styles.header}>
        <Heading2>Just a few questions...</Heading2>
      </div>
      <div className={styles.prompt}>
        <Heading3>What&apos;s your name?</Heading3>
      </div>
      <div className={styles.input}>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          error={error.hasError}
          errorMessage={error.message}
        />
      </div>
    </>
  );
};
NameForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default NameForm;
