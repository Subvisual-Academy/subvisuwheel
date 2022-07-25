import Button from "components/Button";
import Header from "components/Header";
import SocialMediaButton from "components/SocialMediaButton";
import Title from "components/Typography/Title";

import styles from "./index.module.css";
import { COMPANY_NAME } from "constants/Subvisual.js";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Header>{COMPANY_NAME}</Header>
      <Title>Join us to start spinning</Title>

      <div className={styles.signup}>
        <SocialMediaButton name="github" />
        <SocialMediaButton name="linkedin" />
        <SocialMediaButton name="behance" />
      </div>

      <Button>Join Us</Button>
    </div>
  );
};

export default SignupPage;
