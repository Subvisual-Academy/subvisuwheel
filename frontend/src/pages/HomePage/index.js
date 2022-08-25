import Logo from "components/Logo";
import Button from "components/Button";
import Heading from "components/Typography/Heading";

import { ReactComponent as WheelImageBottomLeft } from "assets/svgs/wheel-background/bottom-left-landing.svg";
import { ReactComponent as WheelImageTopRight } from "assets/svgs/wheel-background/top-right.svg";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wheelTop}>
        <WheelImageTopRight />
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <div className={styles.headingWrapper}>
            <Heading level={2}>
              Register to play and<br></br> win a prize!
            </Heading>
          </div>
        </div>
        <Button href="/signup">Next</Button>
      </div>
      <div className={styles.wheelBottom}>
        <WheelImageBottomLeft />
      </div>
    </div>
  );
};

export default HomePage;
