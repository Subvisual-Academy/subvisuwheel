import { useState } from "react";

import NameForm from "components/Forms/NameForm";
import EmailForm from "components/Forms/EmailForm";
import InterestsForm from "components/Forms/InterestsForm";
import Logo from "components/Logo";
import Button from "components/Button";

import styles from "./index.module.css";

const STEP_1 = "STEP_1";
const STEP_2 = "STEP_2";
const STEP_3 = "STEP_3";

const SignupPage = () => {
  const [step, setStep] = useState(STEP_1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [addedInterest, setAddedInterest] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });

  const handleStep = () => {
    if (step === STEP_1 && !name) {
      setError({ hasError: true, message: "Insert your name" });
    } else if (step === STEP_2 && !email) {
      setError({ hasError: true, message: "Invalid email" });
    } else if (
      step === STEP_3 &&
      selectedInterests.length + addedInterest.length === 0
    ) {
      setError({ hasError: true, message: "Select at least one option" });
    } else {
      setStep((prev) => {
        switch (prev) {
          case STEP_1:
            return STEP_2;
          case STEP_2:
            return STEP_3;
          default: {
          }
        }
      });
      setError({ hasError: false, message: "" });
    }
  };

  const stepInfo = {
    STEP_1: {
      buttonText: "Let's go",
      component: <NameForm name={name} setName={setName} error={error} />,
    },
    STEP_2: {
      buttonText: "Continue",
      component: <EmailForm email={email} setEmail={setEmail} error={error} />,
    },
    STEP_3: {
      buttonText: "Next",
      component: (
        <InterestsForm
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
          addedInterest={addedInterest}
          setAddedInterest={setAddedInterest}
          error={error}
        />
      ),
    },
  };

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.main}>
        {stepInfo[step].component}
        <Button onClick={handleStep}>{stepInfo[step].buttonText}</Button>
      </div>
    </div>
  );
};

export default SignupPage;
