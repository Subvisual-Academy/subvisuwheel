import { PropTypes } from "prop-types";
import styles from "./index.module.scss";

import { ReactComponent as Chevron } from "assets/svgs/wheel-background/chevron.svg";

const BackLink = ({ href }) => {
  return (
    <div className={styles.backLinkWrapper}>
      <a href={href} className={styles.backLink}>
        <Chevron />
      </a>
    </div>
  );
};

BackLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default BackLink;
