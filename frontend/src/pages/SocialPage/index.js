import { COMPANY, WEBSITE, SOCIAL } from "constants/Subvisual.js";

import Header from "components/Header";
import Body from "components/Typography/Body";
import Logo from "components/Logo";
import SocialMediaLink from "components/SocialMediaLink";

import styles from "./index.module.css";

const SocialPage = () => {
  return (
    <>
      <Header>{COMPANY}</Header>
      <Logo>Thanks for playing!</Logo>

      <div className={styles.subtitle}>
        <Body>
          Find us at{" "}
          <a href={WEBSITE} target="_blank" rel="noreferrer">
            {WEBSITE.substring(8)}
          </a>{" "}
          and on our social media:
        </Body>
      </div>

      <ul className={styles.links}>
        {Object.keys(SOCIAL).map((channel) => {
          return (
            <li className={styles.link} key={SOCIAL[channel]}>
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
