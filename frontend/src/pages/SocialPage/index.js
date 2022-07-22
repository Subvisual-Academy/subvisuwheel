import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";
import SocialMediaLink from "components/SocialMediaLink";

import styles from "./index.module.css";

const SocialPage = () => {
  const site = "https://subvisual.com";

  const socialText = (
    <span>
      {" "}
      Find us at{" "}
      <a href={site} target="_blank" rel="noreferrer">
        {" "}
        subvisual.com
      </a>{" "}
      and on our social media:{" "}
    </span>
  );

  return (
    <>
      <Header>Subvisual</Header>
      <Title>Thanks for playing!</Title>

      <div className={styles.subtitle}>
        <Text>{socialText}</Text>
      </div>

      <div className={styles.item}>
        <SocialMediaLink name="github" username="subvisual" />
        <SocialMediaLink name="linkedin" username="wearesubvisual" />
        <SocialMediaLink name="behance" username="subvisual" />
        <SocialMediaLink name="facebook" username="subvisual.co" />
        <SocialMediaLink name="instagram" username="wearesubvisual" />
        <SocialMediaLink name="dribbble" username="subvisual" />
        <SocialMediaLink name="medium" username="subvisual" />
        <SocialMediaLink name="twitter" username="subvisual" />
      </div>
    </>
  );
};

export default SocialPage;
