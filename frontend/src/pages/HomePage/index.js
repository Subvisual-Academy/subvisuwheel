import Title from "components/Typography/Logo";
import Heading3 from "components/Typography/Heading3";
import Body from "components/Typography/Body";
import Button from "components/Button";

import { ReactComponent as TopRight } from "assets/svgs/background/top-right.svg";
import { ReactComponent as BottomLeft } from "assets/svgs/background/bot-left.svg";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.topsvg}>
        <TopRight />
      </div>

      <div className={styles.title}>
        <Title>Wheel of Fortune</Title>
      </div>
      <div className={styles.container}>
        <div className={styles.heading3}>
          <Heading3>
            An exclusive fortune wheel with prizes ranging from Subvisual merch
            to NFTs*
          </Heading3>
        </div>

        <div className={styles.botsvg}>
          <BottomLeft />
        </div>
      </div>
      <div className={styles.info}>
        <Body>*Token-based prizes will require a digital wallet to claim.</Body>
      </div>
      <div className={styles.button}>
        <Button>Let&apos;s go</Button>
      </div>
    </>
  );
};

export default HomePage;
