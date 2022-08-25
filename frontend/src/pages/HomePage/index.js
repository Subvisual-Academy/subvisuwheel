import Logo from "components/Logo";
import Button from "components/Button";
import Heading from "components/Typography/Heading";
import LayoutWithBackground from "components/LayoutWithBackground";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <LayoutWithBackground isInvertedTop={true}>
      <div className={styles.root}>
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
    </LayoutWithBackground>
  );
};

export default HomePage;
