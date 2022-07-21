import styles from "./index.module.css";

import Default from "assets/imgs/socialButtons/default.png";
import Github from "assets/imgs/socialButtons/github.png";
import LinkedIn from "assets/imgs/socialButtons/linkedin.png";
import Behance from "assets/imgs/socialButtons/behance.png";
import Facebook from "assets/imgs/socialButtons/facebook.png";
import Instagram from "assets/imgs/socialButtons/instagram.png";
import Dribbble from "assets/imgs/socialButtons/dribble.png";
import Medium from "assets/imgs/socialButtons/medium.png";
import Twitter from "assets/imgs/socialButtons/twitter.png";

const socialMediaButton = ({ name, username }) => {
  let i;

  const info = {
    0: { social_media: "", url: "#", logo: Default },
    1: { social_media: "github", url: `https://github.com/${username}`, logo: Github },
    2: { social_media: "linkedin", url: `https://www.linkedin.com/company/${username}`, logo: LinkedIn },
    3: { social_media: "behance", url: `https://www.behance.net/${username}`, logo: Behance },
    4: { social_media: "facebook", url: `https://www.facebook.com/${username}`, logo: Facebook },
    5: { social_media: "instagram", url: `https://www.instagram.com/${username}`, logo: Instagram },
    6: { social_media: "dribbble", url: `https://dribbble.com/${username}`, logo: Dribbble },
    7: { social_media: "medium", url: `https://medium.com/${username}`, logo: Medium },
    8: { social_media: "twitter", url: `https://twitter.com/${username}`, logo: Twitter },
  }

  if (name === "github") { i = 1 }
  else if (name === "linkedin") { i = 2 }
  else if (name === "behance") { i = 3 }
  else if (name === "facebook") { i = 4 }
  else if (name === "instagram") { i = 5 }
  else if (name === "dribbble") { i = 6 }
  else if (name === "medium") { i = 7 }
  else if (name === "twitter") { i = 8 }
  else { i = 0 }

  return (
    <div>
      <a href={info[i].url} target="_blank" rel="noopener noreferrer">
        <img className={styles.item} src={info[i].logo} alt={info[i].social_media} />
      </a>
    </div>
  );
};

export default socialMediaButton;
