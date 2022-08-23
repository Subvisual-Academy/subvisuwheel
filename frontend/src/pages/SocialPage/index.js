import { LOGO } from "constants/Subvisual.js";
import { useEffect, useState } from "react";

import Heading from "components/Heading";
import Heading3 from "components/Typography/Heading3";
import LayoutWithBackground from "components/LayoutWithBackground";
import SocialMediaLink from "components/SocialMediaLink";

import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bottom-left-social.svg";

import styles from "./index.module.css";

const SocialPage = () => {
  const [socials, setSocials] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/socials`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setSocials(data);
      });
  }, []);

  return (
    <LayoutWithBackground isInverted={true}>
      <div className={styles.main}>
        <div className={styles.headingWrapper}>
          <Heading>Thanks for playing!</Heading>
        </div>

        <div className={styles.bodyWrapper}>
          <Heading3>Find us on our social media:</Heading3>
        </div>

        <ul className={styles.linkWrapper}>
          {Object.keys(LOGO).map((channel) => {
            if (socials[channel]) {
              return (
                <li className={styles.link} key={channel}>
                  <SocialMediaLink
                    url={socials[channel]}
                    logo={LOGO[channel]}
                  />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>

      <div className={styles.svgWrapper}>
        <WheelImageBottomLeft />
      </div>
    </LayoutWithBackground>
  );
};

export default SocialPage;
