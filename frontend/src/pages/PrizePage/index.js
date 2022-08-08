import { PropTypes } from "prop-types";

import Logo from "components/Logo";
import Heading1 from "components/Typography/Heading1";
import Heading2 from "components/Typography/Heading2";
import Button from "components/Button";

import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";
import { ReactComponent as WheelImageBottom } from "assets/svgs/wheel-background/bottom.svg";

import styles from "./index.module.css";

const PrizePage = ({ prize }) => {
  return (
    <div className={styles.root}>
      <div className={styles.svgWrapperTop}>
        <WheelImageTopRight />
      </div>

      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.headingWrapper}>
          <Heading1>You won a {prize.name}!</Heading1>
        </div>

        <div className={styles.bodyWrapper}>
          <Heading2>
            {prize.prize_type === "NFT"
              ? "Check your email to confirm and claim your prize."
              : "Check your email, then see a staff member to claim."}
          </Heading2>
        </div>
      </div>

      <div className={styles.svgWrapperBottom}>
        <WheelImageBottom />
      </div>

      <div className={styles.buttonWrapper}>
        <Button href="/social-network">Finish</Button>
      </div>
    </div>
  );
};

export default PrizePage;

PrizePage.propTypes = {
  prize: PropTypes.string,
};
