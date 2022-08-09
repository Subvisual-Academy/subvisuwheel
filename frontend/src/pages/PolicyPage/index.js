import Checkbox from "components/Checkbox";
import Logo from "components/Logo";
import Body from "components/Typography/Body";
import Heading2 from "components/Typography/Heading2";
import Button from "components/Button";

import { useState } from "react";

import styles from "./index.module.css";

const PolicyPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    const { name, email, interests } = JSON.parse(
      localStorage.getItem("userData")
    );

    fetch(`${process.env.REACT_APP_BACKEND_PATH}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead: {
          name,
          email,
          interests,
          data_proc_consent: isChecked,
        },
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response;
      }
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.headingWrapper}>
          <Heading2>Your privacy matters.</Heading2>
        </div>

        <div className={styles.bodyWrapper}>
          <Body>
            Playing the Wheel of Fortune means your data will be stored only for
            hiring prospects, with the guarantee that it will remain
            confidential within the Universe Companies. Besides, it can be
            deleted anytime you want.
          </Body>
        </div>
        <Checkbox
          id="jobs"
          label="I want to learn about upcoming job opportunities."
          onChange={() => setIsChecked((prevCheck) => !prevCheck)}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button href="/wheel" onClick={handleSubmit}>
          I agree
        </Button>
      </div>
    </div>
  );
};

export default PolicyPage;
