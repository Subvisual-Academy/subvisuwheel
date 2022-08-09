import { PropTypes } from "prop-types";

import Heading2 from "components/Typography/Heading2";
import Heading3 from "components/Typography/Heading3";
import Input from "components/Input";

import styles from "./index.module.css";

function EmailForm({ email, setEmail, error }) {
  return (
    <>
      <div className={styles.header}>
        <Heading3>You&apos;re almost there...</Heading3>
      </div>
      <div className={styles.prompt}>
        <Heading2>How can we reach you?</Heading2>
      </div>
      <div className={styles.input}>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={error.hasError}
          errorMessage={error.message}
        />
      </div>
    </>
  );
}

EmailForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default EmailForm;
