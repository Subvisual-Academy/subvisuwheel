// Components
import Header from "../../components/Header";
import Title from "../../components/Typography/Title";
import Text from "../../components/Typography/Text";
import Button from "../../components/Button";
import ellipse1 from "../../assets/imgs/ellipses/Ellipse1.svg";

import styles from "./index.module.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.container}>
          <Title content="Welcome to Subvisual's Wheel of Fortune!" />
        </div>
        <div className={styles.flex}>
          <div className={styles.container2}>
            <Text content="Spin the SubvisuWheel to win merch, experiences, NFTs and more." />
            <Text content="What are you waiting for? Let's get started!" />
          </div>
          <div className={styles.image}>
            <img src={ellipse1} alt="Ellipse" />
          </div>
        </div>
      </div>
      <Button content="Get Started" />
    </div>
  );
};

export default HomePage;
