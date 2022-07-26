import { COMPANY, WEBSITE, SOCIAL } from "constants/Subvisual.js";

import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";
import SocialMediaLink from "components/SocialMediaLink";

import styles from "./index.module.css";

const SocialPage = () => {
  return (
    <>
      <Header>{COMPANY}</Header>
      <Title>Thanks for playing!</Title>

      <div className={styles.subtitle}>
        <Text>
          Find us at{" "}
          <a href={WEBSITE} target="_blank" rel="noreferrer">
            {WEBSITE.substring(8)}
          </a>{" "}
          and on our social media:
        </Text>
      </div>

      <ul className={styles.items}>
        {Object.keys(SOCIAL).map((channel) => {
          return (
            <li className={styles.item} key={SOCIAL[channel]}>
              <SocialMediaLink
                url={SOCIAL[channel].url}
                logo={SOCIAL[channel].logo}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SocialPage;
