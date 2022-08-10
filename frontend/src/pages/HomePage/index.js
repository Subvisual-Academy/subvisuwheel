import Logo from "components/Logo";
import Button from "components/Button";
import Heading2 from "components/Typography/Heading2";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";
import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bottom-left.svg";

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
            <Heading2>
              Simply sign up to spin our exclusive fortune wheel!
            </Heading2>
          </div>

          <div className={styles.svgWrapperBottom}>
            <WheelImageBottomLeft />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button href="/signup">Let&apos;s go</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
