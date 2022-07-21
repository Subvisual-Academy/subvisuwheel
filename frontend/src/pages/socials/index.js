import styles from "./index.module.css";

// Components
import Header from "../../components/Header";
import Title from "../../components/Typography/Title";
import Text from "../../components/Typography/Text";
import SocialMediaButton from "../../components/SocialMediaButton";

const SocialNetworks = () => {
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
      <Header />
      <Title content="Thanks for playing!" />

      <div className={styles.subtitle}>
        <Text content={socialText} />
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
    </div>
  );
};

export default SocialNetworks;
