import { ReactComponent as FacebookLogo } from "assets/svgs/social/facebook.svg";
import { ReactComponent as InstagramLogo } from "assets/svgs/social/instagram.svg";
import { ReactComponent as LinkedinLogo } from "assets/svgs/social/linkedin.svg";

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
  instagram: {
    url: "https://instagram.com/wearesubvisual",
    logo: <InstagramLogo />,
  },
  linkedin: {
    url: "https://www.linkedin.com/company/wearesubvisual",
    logo: <LinkedinLogo />,
  },
  facebook: {
    url: "https://facebook.com/subvisual.co",
    logo: <FacebookLogo />,
  },
};
