import { COMPANY } from "constants/Subvisual.js";

import Button from "components/Button";
import Header from "components/Header";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const SignupPage = () => {
  return (
    <div className={styles.root}>
      <Header>{COMPANY}</Header>
      <Title>Join us to start spinning</Title>

      <Button>Join Us</Button>
    </div>
  );
};

export default SignupPage;
