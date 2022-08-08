import { PropTypes } from "prop-types";

import Heading2 from "components/Typography/Heading2";
import Heading3 from "components/Typography/Heading3";
import Input from "components/Input";
import Checkbox from "components/Checkbox";

import styles from "./index.module.css";

const InterestsForm = ({
  selectedInterests,
  setSelectedInterests,
  addedInterest,
  setAddedInterest,
  error,
}) => {
  const handleInterest = ({ target }) => {
    if (selectedInterests.includes(target.id)) {
      setSelectedInterests((prevArray) =>
        prevArray.filter((item) => item !== target.id)
      );
    } else {
      setSelectedInterests(
        (prevArray) => (prevArray = [...prevArray, target.id])
      );
    }
  };

  return (
    <>
      <div className={styles.prompt}>
        <Heading3>What are your interests?</Heading3>
      </div>
      <div className={styles.suggestion}>
        <Heading2>Pick one or more!</Heading2>
      </div>
      <div className={styles.checkbox}>
        <Checkbox
          id="Development"
          label="Development"
          onChange={handleInterest}
          error={error.hasError}
          errorMessage={error.message}
        />
        <Checkbox id="Design" label="Design" onChange={handleInterest} />
        <Checkbox
          id="Product Management"
          label="Product Management"
          onChange={handleInterest}
        />
      </div>
      <div className={styles.input}>
        <Input
          id="interests"
          type="text"
          placeholder="Type something else"
          value={addedInterest}
          onChange={({ target }) => setAddedInterest(target.value)}
        />
      </div>
    </>
  );
};
InterestsForm.propTypes = {
  selectedInterests: PropTypes.array.isRequired,
  setSelectedInterests: PropTypes.func.isRequired,
  addedInterest: PropTypes.string.isRequired,
  setAddedInterest: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default InterestsForm;
