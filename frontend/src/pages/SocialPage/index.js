import { SOCIAL } from "constants/Subvisual.js";

import Heading1 from "components/Typography/Heading1";
import Heading3 from "components/Typography/Heading3";
import LayoutWithBackground from "components/LayoutWithBackground";
import SocialMediaLink from "components/SocialMediaLink";

import { ReactComponent as WheelImageBottom } from "assets/svgs/wheel-background/bottom.svg";

import styles from "./index.module.css";

const SocialPage = () => {
  return (
    <LayoutWithBackground>
      <div className={styles.main}>
        <div className={styles.headingWrapper}>
          <Heading1>Thanks for playing!</Heading1>
        </div>

        <div className={styles.bodyWrapper}>
          <Heading3>Find us on our social media:</Heading3>
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
    </LayoutWithBackground>
  );
};

export default SocialPage;
