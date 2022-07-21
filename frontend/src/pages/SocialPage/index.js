import Header from "components/Header";
import SocialMediaButton from "components/SocialMediaButton";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const SocialPage = () => {
  const site = "https://subvisual.com";

  const socialText = <span> Find us at <a href={site} target="_blank" rel="noreferrer"> subvisual.com</a> and on our social media: </span>

  return (
    <>
      <Header>Subvisual</Header>
      <Title>Thanks for playing!</Title>

      <div className={styles.subtitle}>
        <Text>{socialText}</Text>
      </div>

      <div className={styles.item}>
        <SocialMediaButton name="github" username="subvisual" />
        <SocialMediaButton name="linkedin" username="wearesubvisual" />
        <SocialMediaButton name="behance" username="subvisual" />
        <SocialMediaButton name="facebook" username="subvisual.co" />
        <SocialMediaButton name="instagram" username="wearesubvisual" />
        <SocialMediaButton name="dribbble" username="subvisual" />
        <SocialMediaButton name="medium" username="subvisual" />
        <SocialMediaButton name="twitter" username="subvisual" />
      </div>
    </>
  );
};

export default SocialPage;
