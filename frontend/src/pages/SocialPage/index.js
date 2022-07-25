import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";
import { COMPANY, WEBSITE } from "constants/Subvisual.js";

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
      <Header>{COMPANY}</Header>
      <Title>Thanks for playing!</Title>

      <div className={styles.subtitle}>
        <Text>{socialText}</Text>
      </div>

      <div className={styles.item}></div>
    </div>
  );
};

export default SocialPage;
