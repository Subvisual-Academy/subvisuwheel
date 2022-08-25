import Heading from "components/Typography/Heading";
import Body from "components/Typography/Body";
import Button from "components/Button";
import LayoutWithBackground from "components/LayoutWithBackground";

import styles from "./index.module.css";

const PrizePage = () => {
  const prize = JSON.parse(localStorage.getItem("prizeWon"));

  return (
    <LayoutWithBackground isInvertedBottom={true}>
      <div className={styles.root}>
        <div className={styles.main}>
          <Heading>Congratulations!</Heading>
          <Heading level={2}>You won: {prize.name}</Heading>
          <Body>
            {prize.type === "NFT"
              ? "Check your email to confirm and claim your prize."
              : "Check your email to claim your prize."}
          </Body>
        </div>
        <Button href="/social">Finish</Button>
      </div>
    </LayoutWithBackground>
  );
};

export default PrizePage;
