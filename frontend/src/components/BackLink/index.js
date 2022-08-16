import { PropTypes } from "prop-types";
import styles from "./index.module.scss";

import { ReactComponent as Chevron } from "assets/svgs/wheel-background/chevron.svg";

const BackLink = ({ handleGoBack }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={handleGoBack} className={styles.button}>
        <Chevron />
      </button>
    </div>
  );
};

BackLink.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
};

export default BackLink;
