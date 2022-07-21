import styles from "./index.module.css";

const socialMediaLink = ({ name, username }) => {
  const imagePath = "./imgs/socialNetworks/"

  const socialMediaList = {
    github: { url: `https://github.com/${username}` },
    linkedin: { url: `https://www.linkedin.com/company/${username}` },
    behance: { url: `https://www.behance.net/${username}` },
    facebook: { url: `https://www.facebook.com/${username}` },
    instagram: { url: `https://www.instagram.com/${username}` },
    dribbble: { url: `https://dribbble.com/${username}` },
    medium: { url: `https://medium.com/${username}` },
    twitter: { url: `https://twitter.com/${username}` },
  }

  return (
    <a href={socialMediaList[name].url} target="_blank" rel="noopener noreferrer">
      <img className={styles.item} src={imagePath+name+".png"} alt={name} />
    </a>
  );
};

export default socialMediaLink;
