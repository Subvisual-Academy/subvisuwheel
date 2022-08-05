import { WEBSITE, SOCIAL } from "constants/Subvisual.js";

import Logo from "components/Logo";
import Heading2 from "components/Typography/Heading2";
import Body from "components/Typography/Body";
import SocialMediaLink from "components/SocialMediaLink";

import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";
import { ReactComponent as WheelImageBottom } from "assets/svgs/wheel-background/bottom.svg";

import styles from "./index.module.css";

const SocialPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.svgWrapperTop}>
        <WheelImageTopRight />
      </div>

      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.headingWrapper}>
          <Heading2>Thanks for playing!</Heading2>
        </div>

        <div className={styles.bodyWrapper}>
          <Body>
            Find us at{" "}
            <a href={WEBSITE} target="_blank" rel="noreferrer">
              {WEBSITE.substring(8)}
            </a>{" "}
            and on our social media:
          </Body>
        </div>

        <ul className={styles.linkWrapper}>
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
      </div>

      <div className={styles.svgWrapperBottom}>
        <WheelImageBottom />
      </div>
    </div>
  );
};

export default SocialPage;
