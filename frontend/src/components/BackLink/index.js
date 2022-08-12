import { PropTypes } from "prop-types";
import styles from "./index.module.scss";

import { ReactComponent as Chevron } from "assets/svgs/wheel-background/chevron.svg";

const BackLink = ({ handleReturn }) => {
  return (
    <div className={styles.backLinkWrapper}>
      <button onClick={handleReturn} className={styles.backLink}>
        <Chevron />
      </button>
    </div>
  );
};

BackLink.propTypes = {
  handleReturn: PropTypes.func.isRequired,
};

export default BackLink;
