import { useState } from "react";

import Button from "components/Button";
import Heading2 from "components/Typography/Heading2";
import Heading3 from "components/Typography/Heading3";
import Logo from "components/Logo";
import Input from "components/Input";
import Checkbox from "components/Checkbox";

import styles from "./index.module.css";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [addedInterest, setAddedInterest] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });

  const buttonText = ["Let's go", "Continue", "Next"];
  const topHeading = [
    "Just a few questions...",
    "You're almost there...",
    "What are your interests?",
  ];
  const bottomHeading = [
    "What's your name?",
    "How can we reach you?",
    "Pick one or more...",
  ];

  const handleStep = () => {
    if (step === 1 && !name) {
      setError({ hasError: true, message: "Insert your name" });
    } else if (step === 2 && !email) {
      setError({ hasError: true, message: "Invalid email" });
    } else if (
      step === 3 &&
      selectedInterests.length + addedInterest.length === 0
    ) {
      setError({ hasError: true, message: "Select at least one option" });
    } else {
      setStep((prev) => prev + 1);
      setError({ hasError: false, message: "" });
    }
  };

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

  const renderInputForm = (step) => {
    switch (step) {
      case 1: {
        return (
          <div className={`${styles.element} ${styles.input}`}>
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
        );
      }
      case 2: {
        return (
          <div className={`${styles.element} ${styles.input}`}>
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
        );
      }
      case 3: {
        return (
          <>
            <div className={styles.checkbox}>
              <Checkbox
                id="Development"
                label="Development"
                onChange={handleInterest}
                error={error.hasError}
                errorMessage={error.message}
              />
            </div>
            <Checkbox id="Design" label="Design" onChange={handleInterest} />
            <Checkbox
              id="Product Management"
              label="Product Management"
              onChange={handleInterest}
            />
            <div className={`${styles.element} ${styles.input}`}>
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
      }
      default: {
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.element} ${styles.logo}`}>
        <Logo />
      </div>
      <div className={`${styles.element} ${styles.heading2}`}>
        <Heading3>{topHeading[step - 1]}</Heading3>
      </div>
      <div className={`${styles.element} ${styles.heading3}`}>
        <Heading2>{bottomHeading[step - 1]}</Heading2>
      </div>
      <div className={styles.main}>
        {renderInputForm(step)}
        <div className={styles.button}>
          <Button onClick={handleStep}>{buttonText[step - 1]}</Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
