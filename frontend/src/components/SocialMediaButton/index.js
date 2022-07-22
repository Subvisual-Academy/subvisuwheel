import styles from "./index.module.css";

import Github from "assets/imgs/socialButtons/github.png";
import LinkedIn from "assets/imgs/socialButtons/linkedin.png";
import Behance from "assets/imgs/socialButtons/behance.png";
import Facebook from "assets/imgs/socialButtons/facebook.png";
import Instagram from "assets/imgs/socialButtons/instagram.png";
import Dribbble from "assets/imgs/socialButtons/dribble.png";
import Medium from "assets/imgs/socialButtons/medium.png";
import Twitter from "assets/imgs/socialButtons/twitter.png";

const socialMediaButton = (props) => {
  const name = props.name;
  const username = props.username;

  let logo = "";
  let link = "";
  const links = {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/company/", // if its an user: "https://www.linkedin.com/in/",
    behance: "https://www.behance.net/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    dribbble: "https://dribbble.com/",
    medium: "https://medium.com/",
    twitter: "https://twitter.com/",
  };

  if (name === "github") {
    logo = Github;
    link = links.github + username;
  }
  if (name === "linkedin") {
    logo = LinkedIn;
    link = links.linkedin + username;
  }
  if (name === "behance") {
    logo = Behance;
    link = links.behance + username;
  }
  if (name === "facebook") {
    logo = Facebook;
    link = links.facebook + username;
  }
  if (name === "instagram") {
    logo = Instagram;
    link = links.instagram + username;
  }
  if (name === "dribbble") {
    logo = Dribbble;
    link = links.dribbble + username;
  }
  if (name === "medium") {
    logo = Medium;
    link = links.medium + username;
  }
  if (name === "twitter") {
    logo = Twitter;
    link = links.twitter + username;
  }

  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={styles.item} src={logo} alt={name} />
      </a>
    </div>
  );
};

export default socialMediaButton;
