import Button from "components/Button";
import Header from "components/Header";
import Title from "components/Typography/Title";

import styles from "./index.module.css";
import { COMPANY } from "constants/Subvisual.js";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Header>{COMPANY}</Header>
      <Title>Join us to start spinning</Title>

      <div className={styles.signup}></div>

      <Button>Join Us</Button>
    </div>
  );
};

export default SignupPage;
