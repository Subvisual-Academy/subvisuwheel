import Logo from "components/Logo";
import Button from "components/Button";
import Body from "components/Typography/Body";
import Heading3 from "components/Typography/Heading3";
import { ReactComponent as TopRight } from "assets/svgs/background/top-right.svg";
import { ReactComponent as BotLeft } from "assets/svgs/background/bot-left.svg";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.svgWrapperTop}>
        <TopRight />
      </div>

      <div className={styles.root}>
        <div>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div className={styles.heading}>
            <Heading3>
              An exclusive fortune wheel with prizes ranging from Subvisual
              merch to NFTs*
            </Heading3>
          </div>

          <div className={styles.info}>
            <Body>
              *Token-based prizes will require a digital wallet to claim.
            </Body>
          </div>

          <div className={styles.svgWrapperBottom}>
            <BotLeft />
          </div>
        </div>

        <div className={styles.btn}>
          <Button>Let&apos;s go</Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
