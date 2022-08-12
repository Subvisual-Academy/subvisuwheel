import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigator = useNavigate();

  const [state, setState] = useState({
    step: STEP_1,
    name: "",
    email: "",
    selectedInterests: [],
    extraInterest: "",
    error: { hasError: false, message: "" },
  });

  const setError = ({ hasError, message }) => {
    setState((prevState) => ({
      ...prevState,
      error: { hasError, message },
    }));
  };

  const setSelectedInterests = (id) => {
    if (state.selectedInterests.includes(id)) {
      setState((prevState) => ({
        ...prevState,
        selectedInterests: prevState.selectedInterests.filter(
          (item) => item !== id
        ),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        selectedInterests: [...prevState.selectedInterests, id],
      }));
    }
  };

  const handleChange =
    (input) =>
    ({ target }) => {
      if (input === "selectedInterests") {
        setSelectedInterests(target.id);
      } else {
        setState((prevState) => ({ ...prevState, [input]: target.value }));
      }
    };

  const nextStep = () => {
    const { step } = state;
    const newStep = () => {
      switch (step) {
        case STEP_1:
          return STEP_2;
        case STEP_2:
          return STEP_3;
        default:
      }
    };
    setState((prevState) => ({ ...prevState, step: newStep() }));
  };

  const continueToNextStep = () => {
    const { step, name, email, selectedInterests, extraInterest } = state;
    const AtIcon = "@";

    if (step === STEP_1 && !name) {
      setError({ hasError: true, message: "Insert your name" });
    } else if (
      step === STEP_2 &&
      (!email || email.includes(AtIcon) === false)
    ) {
      setError({ hasError: true, message: "Invalid email" });
    } else if (step === STEP_3) {
      if (extraInterest) {
        selectedInterests.push(extraInterest);
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name,
          email,
          interests: selectedInterests,
        })
      );
      navigator("/policy");
    } else {
      setError({ hasError: false, message: "" });
      nextStep();
    }
  };

  const stepInfo = {
    STEP_1: {
      buttonText: "Let's go",
      component: (
        <NameForm
          name={state.name}
          handleChange={handleChange}
          error={state.error}
        />
      ),
    },
    STEP_2: {
      buttonText: "Continue",
      component: (
        <EmailForm
          email={state.email}
          handleChange={handleChange}
          error={state.error}
        />
      ),
    },
    STEP_3: {
      buttonText: "Next",
      component: (
        <InterestsForm
          handleChange={handleChange}
          extraInterest={state.extraInterest}
          error={state.error}
        />
      ),
    },
  };

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.main}>{stepInfo[state.step].component}</div>
      <Button onClick={continueToNextStep}>
        {stepInfo[state.step].buttonText}
      </Button>
    </div>
  );
};

export default SignupPage;
