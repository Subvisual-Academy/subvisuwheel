import Heading1 from "components/Typography/Heading1";
import Heading2 from "components/Typography/Heading2";
import Button from "components/Button";

import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";
import { ReactComponent as WheelImageBottom } from "assets/svgs/wheel-background/bottom-prize-page.svg";

import styles from "./index.module.css";

const PrizePage = () => {
  const prize = JSON.parse(localStorage.getItem("prizeWon"));

  return (
    <div className={styles.root}>
      <div className={styles.svgWrapperTop}>
        <WheelImageTopRight />
      </div>

      <div className={styles.main}>
        <div className={styles.headingWrapper}>
          <Heading1>Your prize: {prize.name}!</Heading1>
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
