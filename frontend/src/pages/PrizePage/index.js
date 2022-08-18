import Heading1 from "components/Typography/Heading1";
import Heading2 from "components/Typography/Heading2";
import Body from "components/Typography/Body";
import Button from "components/Button";
import LayoutWithBackground from "components/LayoutWithBackground";

import { ReactComponent as WheelImageBottom } from "assets/svgs/wheel-background/bottom-prize-page.svg";

import styles from "./index.module.css";

const PrizePage = () => {
  const prize = JSON.parse(localStorage.getItem("prizeWon"));

  return (
    <LayoutWithBackground>
      <div className={styles.main}>
        <div className={styles.titleWrapper}>
          <Heading1>Congratulations!</Heading1>
        </div>

        <div className={styles.headingWrapper}>
          <Heading2>You won: {prize.name}</Heading2>
        </div>

        <div className={styles.bodyWrapper}>
          <Body>
            {prize.prize_type === "NFT"
              ? "Check your email to confirm and claim your prize."
              : "Check your email, then see a staff member to claim."}
          </Body>
        </div>
      </div>

      <div className={styles.svgWrapperBottom}>
        <WheelImageBottom />
      </div>

      <div className={styles.buttonWrapper}>
        <Button href="/social-network">Finish</Button>
      </div>
    </LayoutWithBackground>
  );
};

export default PrizePage;
