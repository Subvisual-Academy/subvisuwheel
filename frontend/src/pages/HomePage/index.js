import Logo from "components/Logo";
import Button from "components/Button";
import Heading3 from "components/Typography/Heading3";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";
import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bot-left.svg";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.svgWrapperTop}>
        <WheelImageTopRight />
      </div>

      <div className={styles.main}>
        <div>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div className={styles.headingWrapper}>
            <Heading3>
              An exclusive fortune wheel with prizes ranging from Subvisual
              merch to NFTs*
            </Heading3>
          </div>

          <div className={styles.infoWrapper}>
            <p className={styles.info}>
              *Token-based prizes will require a digital wallet to claim.
            </p>
          </div>

          <div className={styles.svgWrapperBottom}>
            <WheelImageBottomLeft />
          </div>
        </div>

        <div className={styles.btn}>
          <Button href="/signup">Let&apos;s go</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
