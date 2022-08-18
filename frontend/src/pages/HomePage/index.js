import Logo from "components/Logo";
import Button from "components/Button";
import Heading2 from "components/Typography/Heading2";
import { ReactComponent as WheelImageBottomRight } from "assets/svgs/wheel-background/bottom-right.svg";
import LayoutWithBackground from "components/LayoutWithBackground";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <LayoutWithBackground>
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
            <WheelImageBottomRight />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button href="/signup">Let&apos;s go</Button>
        </div>
      </div>
    </LayoutWithBackground>
  );
};

export default HomePage;
