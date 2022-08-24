import Heading from "components/Typography/Heading";
import Body from "components/Typography/Body";
import Button from "components/Button";
import LayoutWithBackground from "components/LayoutWithBackground";

import { ReactComponent as WheelImageBottomRight } from "assets/svgs/wheel-background/bottom-right.svg";

import styles from "./index.module.css";

const PrizePage = () => {
  const prize = JSON.parse(localStorage.getItem("prizeWon"));

  return (
    <LayoutWithBackground>
      <div className={styles.main}>
        <div className={styles.titleWrapper}>
          <Heading>Congratulations!</Heading>
        </div>

        <div className={styles.headingWrapper}>
          <Heading level={2}>You won: {prize.name}</Heading>
        </div>

        <div className={styles.bodyWrapper}>
          <Body>
            {prize.type === "NFT"
              ? "Check your email to confirm and claim your prize."
              : "Check your email to claim your prize."}
          </Body>
        </div>
      </div>

      <div className={styles.svgWrapper}>
        <WheelImageBottomRight />
      </div>

      <div className={styles.buttonWrapper}>
        <Button href="/social">Finish</Button>
      </div>
    </LayoutWithBackground>
  );
};

export default PrizePage;
