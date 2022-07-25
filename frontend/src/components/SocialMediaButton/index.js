import { PropTypes } from "prop-types";
import styles from "./index.module.css";
import { SOCIALS } from "constants/Subvisual.js";

const SocialMediaButton = ({ name }) => {
  let logo = "";
  let link = "";

  if (name === "github") {
    logo = "";
    link = SOCIALS.github;
  }
  if (name === "linkedin") {
    logo = "";
    link = SOCIALS.linkedin;
  }
  if (name === "behance") {
    logo = "";
    link = SOCIALS.behance;
  }
  if (name === "facebook") {
    logo = "";
    link = SOCIALS.facebook;
  }
  if (name === "instagram") {
    logo = "";
    link = SOCIALS.instagram;
  }
  if (name === "dribbble") {
    logo = "";
    link = SOCIALS.dribbble;
  }
  if (name === "medium") {
    logo = "";
    link = SOCIALS.medium;
  }
  if (name === "twitter") {
    logo = "";
    link = SOCIALS.twitter;
  }

  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={styles.item} src={logo} alt={name} />
      </a>
    </div>
  );
};

SocialMediaButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SocialMediaButton;
