import { PropTypes } from "prop-types";

import styles from "./index.module.scss";

import { ReactComponent as Chevron } from "assets/svgs/wheel-background/chevron.svg";

const BackLink = ({ handleGoBack }) => {
  return (
    <button onClick={handleGoBack} className={styles.button}>
      <Chevron />
    </button>
  );
};

BackLink.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
};

export default BackLink;
