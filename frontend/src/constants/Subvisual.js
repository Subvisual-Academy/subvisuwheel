import { ReactComponent as FacebookLogo } from "assets/svgs/social/facebook.svg";
import { ReactComponent as InstagramLogo } from "assets/svgs/social/instagram.svg";
import { ReactComponent as LinkedinLogo } from "assets/svgs/social/linkedin.svg";
import { ReactComponent as TwitterLogo } from "assets/svgs/social/twitter.svg";

export const WHEEL_CONFIG = {
  colors: {
    main: "var(--color-hot-pink)",
    secondary: "var(--color-purple)",
  },
};

export const LOGO = {
  twitter: <TwitterLogo />,
  instagram: <InstagramLogo />,
  linkedin: <LinkedinLogo />,
  facebook: <FacebookLogo />,
};
