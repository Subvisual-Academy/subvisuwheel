import Heading from "components/Typography/Heading";
import Body from "components/Typography/Body";
import Button from "components/Button";
import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bottom-left-landing.svg";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.css";

const PrizePage = () => {
  const prize = JSON.parse(localStorage.getItem("prizeWon"));

  return (
    <div className={styles.root}>
      <div className={styles.wheelTop}>
        <WheelImageTopRight />
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            <Heading>Congratulations!</Heading>
            <Heading level={2}>You won: {prize.name}</Heading>
            <Body>
              {prize.type === "NFT"
                ? "Check your email to confirm and claim your prize."
                : "Check your email to claim your prize."}
            </Body>
          </div>
        </div>
        <Button href="/social">Finish</Button>
      </div>
      <div className={styles.wheelBottom}>
        <WheelImageBottomLeft />
      </div>
    </div>
  );
};

export default PrizePage;
