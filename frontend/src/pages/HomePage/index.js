import Button from "components/Button";
import Header from "components/Header";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import ellipse1 from "assets/imgs/ellipses/Ellipse1.svg";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div>
      <Header>Subvisual</Header>
      <div>
        <div className={styles.container}>
          <Title>Welcome to Subvisual&apos;s Wheel of Fortune!</Title>
        </div>
        <div className={styles.flex}>
          <div className={styles.container2}>
            <Text>
              Spin the SubvisuWheel to win merch, experiences, NFTs and more.
            </Text>
            <Text>What are you waiting for? Let&apos;s get started!</Text>
          </div>
          <div className={styles.image}>
            <img src={ellipse1} alt="Ellipse" />
          </div>
        </div>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default HomePage;
