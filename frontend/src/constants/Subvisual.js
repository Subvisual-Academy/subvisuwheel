import { ReactComponent as FacebookLogo } from "assets/svgs/social/facebook.svg";
import { ReactComponent as InstagramLogo } from "assets/svgs/social/instagram.svg";
import { ReactComponent as LinkedinLogo } from "assets/svgs/social/linkedin.svg";
import { ReactComponent as TwitterLogo } from "assets/svgs/social/twitter.svg";

import { ReactComponent as DevelopmentIcon } from "assets/svgs/checkboxes/development.svg";
import { ReactComponent as DesignIcon } from "assets/svgs/checkboxes/design.svg";
import { ReactComponent as PMIcon } from "assets/svgs/checkboxes/pm.svg";
import { ReactComponent as OtherIcon } from "assets/svgs/checkboxes/other.svg";

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

export const ICON = {
  development: <DevelopmentIcon />,
  design: <DesignIcon />,
  pm: <PMIcon />,
  other: <OtherIcon />,
};
