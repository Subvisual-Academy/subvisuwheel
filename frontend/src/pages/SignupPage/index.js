import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NameForm from "components/Forms/NameForm";
import EmailForm from "components/Forms/EmailForm";
import InterestsForm from "components/Forms/InterestsForm";
import Logo from "components/Logo";
import Button from "components/Button";
import PolicyForm from "components/Forms/PolicyForm";

import styles from "./index.module.css";

const STEP_1 = "STEP_1";
const STEP_2 = "STEP_2";
const STEP_3 = "STEP_3";
const STEP_4 = "STEP_4";

const SignupPage = () => {
  const navigator = useNavigate();

  const [state, setState] = useState({
    step: STEP_1,
    name: "",
    email: "",
    selectedInterests: [],
    extraInterest: "",
    consent: false,
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
      } else if (input === "consent") {
        setState((prevState) => ({
          ...prevState,
          consent: !prevState.consent,
        }));
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
        case STEP_3:
          return STEP_4;
        default:
      }
    };
    setState((prevState) => ({ ...prevState, step: newStep() }));
  };

  const submitData = () => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead: {
          name: state.name,
          email: state.email,
          interests: state.selectedInterests,
          data_proc_consent: state.consent,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(() => {
        navigator("/wheel");
      });
  };

  const continueToNextStep = () => {
    const { step, name, email, selectedInterests, extraInterest } = state;
    if (step === STEP_1 && !name) {
      setError({ hasError: true, message: "Insert your name" });
    } else if (step === STEP_2 && !email) {
      setError({ hasError: true, message: "Invalid email" });
    } else if (step === STEP_3) {
      if (extraInterest) {
        selectedInterests.push(extraInterest);
      }
      nextStep();
    } else if (step === STEP_4) {
      submitData();
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
    STEP_4: {
      component: (
        <PolicyForm handleChange={handleChange} submitData={submitData} />
      ),
    },
  };

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.main}>{stepInfo[state.step].component}</div>
      {(() => {
        if (state.step !== STEP_4) {
          return (
            <Button onClick={continueToNextStep}>
              {stepInfo[state.step].buttonText}
            </Button>
          );
        }
      })()}
    </div>
  );
};

export default SignupPage;
