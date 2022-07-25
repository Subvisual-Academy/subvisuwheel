import { ReactComponent as BehanceLogo } from "assets/svgs/social/behance.svg";
import { ReactComponent as DribbbleLogo } from "assets/svgs/social/dribbble.svg";
import { ReactComponent as FacebookLogo } from "assets/svgs/social/facebook.svg";
import { ReactComponent as InstagramLogo } from "assets/svgs/social/instagram.svg";
import { ReactComponent as MediumLogo } from "assets/svgs/social/medium.svg";
import { ReactComponent as LinkedinLogo } from "assets/svgs/social/linkedin.svg";
import { ReactComponent as TwitterLogo } from "assets/svgs/social/twitter.svg";
import { ReactComponent as GithubLogo } from "assets/svgs/social/github.svg";

import styles from "./index.module.css";

export const COMPANY = "Subvisual";
export const WEBSITE = "https://subvisual.com";

export const WHEEL_CONFIG = {
  name: "Subvisuwheel",
  colors: {
    main: "#0000FF",
    secondary: "#FFFFFF",
  },
};

export const SOCIAL = {
  facebook: {
    url: "https://facebook.com/subvisual.co",
    logo: <FacebookLogo className={styles.item} />,
  },
  instagram: {
    url: "https://instagram.com/wearesubvisual",
    logo: <InstagramLogo className={styles.item} />,
  },
  github: {
    url: "https://github.com/subvisual",
    logo: <GithubLogo className={styles.item} />,
  },
  behance: {
    url: "https://www.behance.net/subvisual",
    logo: <BehanceLogo className={styles.item} />,
  },
  linkedin: {
    url: "https://www.linkedin.com/company/wearesubvisual",
    logo: <LinkedinLogo className={styles.item} />,
  },
  dribbble: {
    url: "https://dribbble.com/subvisual",
    logo: <DribbbleLogo className={styles.item} />,
  },
  medium: {
    url: "https://medium.com/subvisual",
    logo: <MediumLogo className={styles.item} />,
  },
  twitter: {
    url: "https://twitter.com/subvisual",
    logo: <TwitterLogo className={styles.item} />,
  },
};
