import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as DetailsProgressBar } from "assets/svgs/progress-bar/details-step.svg";
import { ReactComponent as InterestsProgressBar } from "assets/svgs/progress-bar/interests-step.svg";
import { ReactComponent as PrivacyProgressBar } from "assets/svgs/progress-bar/privacy-step.svg";

import MainContainer from "components/MainContainer";
import DetailsForm from "components/Forms/DetailsForm";
import InterestsForm from "components/Forms/InterestsForm";
import OtherForm from "components/Forms/OtherForm";
import Button from "components/Button";
import PolicyForm from "components/Forms/PolicyForm";
import BackLink from "components/BackLink";

import styles from "./index.module.css";

const STEP_1 = "STEP_1";
const STEP_2 = "STEP_2";
const STEP_3 = "STEP_3";
const STEP_4 = "STEP_4";

export const JOBS = "jobs";
export const OTHER = "other";
export const TERMS = "terms";
export const SELECTED_INTERESTS = "selectedInterests";

const SignupPage = () => {
  const navigator = useNavigate();

  const [state, setState] = useState({
    step: STEP_1,
    name: "",
    email: "",
    selectedInterests: [],
    extraInterest: "",
    otherChecked: false,
    consent: false,
    termsChecked: false,
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
      if (input === SELECTED_INTERESTS) {
        setSelectedInterests(target.id);
      } else if (input === OTHER) {
        setState((prevState) => ({
          ...prevState,
          otherChecked: !prevState.otherChecked,
        }));
      } else if (input === JOBS) {
        setState((prevState) => ({
          ...prevState,
          consent: !prevState.consent,
        }));
      } else if (input === TERMS) {
        setState((prevState) => ({
          ...prevState,
          termsChecked: !prevState.termsChecked,
        }));
      } else {
        setState((prevState) => ({ ...prevState, [input]: target.value }));
      }
    };

  const validatesChecked = (id) => {
    if (id === OTHER) {
      return state.otherChecked;
    } else if (id === JOBS) {
      return state.consent;
    } else if (id === TERMS) {
      return state.termsChecked;
    } else {
      return state.selectedInterests.includes(id);
    }
  };

  const prevStep = () => {
    const { step, otherChecked } = state;
    const newStep = () => {
      switch (step) {
        case STEP_4:
          if (otherChecked) {
            return STEP_3;
          } else {
            return STEP_2;
          }
        case STEP_3:
          return STEP_2;
        case STEP_2:
          return STEP_1;
        default:
      }
    };
    setState((prevState) => ({ ...prevState, step: newStep() }));
  };

  const nextStep = () => {
    const { step, otherChecked } = state;
    const newStep = () => {
      switch (step) {
        case STEP_1:
          return STEP_2;
        case STEP_2:
          if (otherChecked) {
            return STEP_3;
          } else {
            return STEP_4;
          }
        case STEP_3:
          return STEP_4;
        default:
      }
    };
    setState((prevState) => ({ ...prevState, step: newStep() }));
  };

  const submitData = () => {
    if (state.otherChecked && state.extraInterest) {
      state.selectedInterests.push(state.extraInterest);
    }

    fetch(`${process.env.REACT_APP_BACKEND_PATH}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead: {
          name: state.name,
          email: state.email,
          interests: state.selectedInterests,
          job_consent: state.consent,
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

  const returnToPrevStep = () => {
    setError({ hasError: false, message: "" });
    prevStep();
  };

  const continueToNextStep = () => {
    const { step, name, email } = state;
    const AtIcon = "@";

    if (step === STEP_1 && !name) {
      setError({ hasError: true, message: "Insert your name" });
    } else if (
      step === STEP_2 &&
      (!email || email.includes(AtIcon) === false)
    ) {
      setError({ hasError: true, message: "Invalid email" });
    } else if (step === STEP_2) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          email,
        })
      );
      nextStep();
    } else {
      setError({ hasError: false, message: "" });
      nextStep();
    }
  };

  const stepInfo = {
    STEP_1: {
      buttonText: "Next",
      component: (
        <DetailsForm
          name={state.name}
          email={state.email}
          handleChange={handleChange}
          error={state.error}
        />
      ),
      progressBar: <DetailsProgressBar />,
    },
    STEP_2: {
      buttonText: "Next",
      component: (
        <InterestsForm
          handleChange={handleChange}
          validatesChecked={validatesChecked}
          error={state.error}
        />
      ),
      progressBar: <InterestsProgressBar />,
    },
    STEP_3: {
      buttonText: "Next",
      component: (
        <OtherForm
          extraInterest={state.extraInterest}
          handleChange={handleChange}
        />
      ),
      progressBar: <InterestsProgressBar />,
    },
    STEP_4: {
      buttonText: "I agree",
      component: (
        <PolicyForm
          handleChange={handleChange}
          validatesChecked={validatesChecked}
        />
      ),
      progressBar: <PrivacyProgressBar />,
    },
  };

  const missingName = state.step === STEP_1 && state.name === "";
  const missingEmail = state.step === STEP_1 && state.email === "";
  const missingAtInEmail = state.step === STEP_1 && !state.email.includes("@");
  const missingOther = state.step === STEP_3 && state.extraInterest === "";
  const missingTerms = state.step === STEP_4 && !state.termsChecked;

  const isDisabled =
    missingName ||
    missingEmail ||
    missingAtInEmail ||
    missingOther ||
    missingTerms;

  const buttonHandler = state.step === STEP_4 ? submitData : continueToNextStep;

  return (
    <MainContainer>
      <div className={state.step === STEP_1 ? styles.isHidden : null}>
        <BackLink handleGoBack={returnToPrevStep} />
      </div>
      <div className={styles.component}>{stepInfo[state.step].component}</div>
      <div className={styles.buttonWrapper}>
        <Button isDisabled={isDisabled} onClick={buttonHandler}>
          {stepInfo[state.step].buttonText}
        </Button>
      </div>
      <div className={styles.progressBarWrapper}>
        {stepInfo[state.step].progressBar}
      </div>
    </MainContainer>
  );
};

export default SignupPage;
