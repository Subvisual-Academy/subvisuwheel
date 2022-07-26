import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const SocialPage = () => {
  const site = "https://subvisual.com";

  const socialText = (
    <span>
      Find us at{" "}
      <a href={site} target="_blank" rel="noreferrer">
        subvisual.com
      </a>{" "}
      and on our social media:
    </span>
  );

  return (
    <div>
      <Header>Subvisual</Header>
      <Title>Thanks for playing!</Title>

      <div className={styles.subtitle}>
        <Text>{socialText}</Text>
      </div>

      <div className={styles.item}></div>
    </div>
  );
};

export default SocialPage;
