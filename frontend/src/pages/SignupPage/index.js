import Button from "components/Button";
import Header from "components/Header";
import SocialMediaLink from "components/SocialMediaLink";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Header>Subvisual</Header>
      <Title>Join us to start spinning</Title>

      <div className={styles.signup}>
        <SocialMediaLink name="github" username="subvisual" />
        <SocialMediaLink name="linkedin" username="wearesubvisual" />
        <SocialMediaLink name="behance" username="subvisual" />
      </div>

      <Button>Join Us</Button>
    </div>
  );
};

export default SignupPage;
