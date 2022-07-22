import Button from "components/Button";
import Header from "components/Header";
import SocialMediaButton from "components/SocialMediaButton";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Title content="Join us to start spinning" />

      <div className={styles.signup}>
        <SocialMediaButton name="github" username="subvisual" />
        <SocialMediaButton name="linkedin" username="wearesubvisual" />
        <SocialMediaButton name="behance" username="subvisual" />
      </div>

      <Button content="Join Us" />
    </div>
  );
};

export default SignupPage;
