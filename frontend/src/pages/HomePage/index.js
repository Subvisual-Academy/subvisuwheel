import { COMPANY, WHEEL_CONFIG } from "constants/Subvisual.js";

import Button from "components/Button";
import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import ellipse1 from "assets/imgs/ellipses/Ellipse1.svg";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <>
      <Header>{COMPANY}</Header>
      <div className={styles.title}>
        <Title>Welcome to {COMPANY}&apos;s Wheel of Fortune!</Title>
      </div>

      <div className={styles.container}>
        <div className={styles.informationBlock}>
          <Text>
            Spin the {WHEEL_CONFIG.name} to win merch, experiences, NFTs and
            more.
          </Text>
          <Text>What are you waiting for? Let&apos;s get started!</Text>
        </div>

        <div className={styles.image}>
          <img src={ellipse1} alt="Ellipse" />
        </div>
      </div>

      <Button>Get Started</Button>
    </>
  );
};

export default HomePage;
