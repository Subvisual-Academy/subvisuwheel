import { ReactComponent as FacebookLogo } from "assets/svgs/social/facebook.svg";
import { ReactComponent as InstagramLogo } from "assets/svgs/social/instagram.svg";
import { ReactComponent as LinkedinLogo } from "assets/svgs/social/linkedin.svg";
import { ReactComponent as TwitterLogo } from "assets/svgs/social/twitter.svg";

import { useEffect, useState } from "react";

import Heading from "components/Typography/Heading";
import LayoutWithBackground from "components/LayoutWithBackground";
import SocialMediaLink from "components/SocialMediaLink";

import styles from "./index.module.css";

const LOGOS = {
  twitter: <TwitterLogo />,
  instagram: <InstagramLogo />,
  linkedin: <LinkedinLogo />,
  facebook: <FacebookLogo />,
};

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
    <LayoutWithBackground isInvertedTop={true}>
      <div className={styles.main}>
        <Heading>Thanks for playing!</Heading>
        <Heading level={3}>Find us on our social media:</Heading>
        <ul className={styles.links}>
          {Object.keys(LOGOS).map((channel) => {
            return (
              <li className={styles.link} key={channel}>
                <SocialMediaLink url={socials[channel]} logo={LOGOS[channel]} />
              </li>
            );
          })}
        </ul>
      </div>
    </LayoutWithBackground>
  );
};

export default SocialPage;
