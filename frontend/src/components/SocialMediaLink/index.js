import { PropTypes } from "prop-types";

import styles from "./index.module.css";

const SocialMediaLink = ({ url, logo }) => {
  return (
    <a
      className={styles.root}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {logo}
    </a>
  );
};

SocialMediaLink.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
};

export default SocialMediaLink;
