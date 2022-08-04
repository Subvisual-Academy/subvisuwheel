import { COMPANY } from "constants/Subvisual.js";

import Button from "components/Button";
import Header from "components/Header";
import Logo from "components/Logo";

import styles from "./index.module.css";

const SignupPage = () => {
  return (
    <div className={styles.root}>
      <Header>{COMPANY}</Header>
      <Logo>Join us to start spinning</Logo>

      <Button>Join Us</Button>
    </div>
  );
};

export default SignupPage;
