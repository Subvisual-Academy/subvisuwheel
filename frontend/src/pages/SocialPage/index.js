import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";
import { COMPANY_NAME, WEBSITE } from "constants/Subvisual.js";

const SocialPage = () => {
  const socialText = (
    <span>
      Find us at{" "}
      <a href={WEBSITE} target="_blank" rel="noreferrer">
        subvisual.com
      </a>{" "}
      and on our social media:
    </span>
  );

  return (
    <div>
      <Header>{COMPANY_NAME}</Header>
      <Title>Thanks for playing!</Title>

      <div className={styles.subtitle}>
        <Text>{socialText}</Text>
      </div>

<<<<<<< HEAD
      <div className={styles.item}></div>
=======
      <div className={styles.item}>
        <SocialMediaButton name="github" />
        <SocialMediaButton name="linkedin" />
        <SocialMediaButton name="behance" />
        <SocialMediaButton name="facebook" />
        <SocialMediaButton name="instagram" />
        <SocialMediaButton name="dribbble" />
        <SocialMediaButton name="medium" />
        <SocialMediaButton name="twitter" />
      </div>
>>>>>>> 9adc263 (Add constants file and generalize code)
    </div>
  );
};

export default SocialPage;
