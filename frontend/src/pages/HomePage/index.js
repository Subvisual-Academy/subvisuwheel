import Logo from "components/Logo";
import Button from "components/Button";
import Heading2 from "components/Typography/Heading2";
import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bottom-left-landing.svg";
import LayoutWithBackground from "components/LayoutWithBackground";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <LayoutWithBackground isInverted={true}>
      <div className={styles.main}>
        <div>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div className={styles.headingWrapper}>
            <Heading2>
              Register to play and<br></br> win a prize!
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
    </LayoutWithBackground>
  );
};

export default HomePage;
