// Components
import Header from "../components/Header";
import Title from "../components/Typography/Title";
import Text from "../components/Typography/Text";
import Button from "../components/Button";
import ellipse1 from "../assets/imgs/ellipses/Ellipse1.svg";

import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <Header>Subvisual</Header>
      <div className="text-section">
        <div className="home-title-container">
          <Title>Welcome to Subvisual&apos;s Wheel of Fortune!</Title>
        </div>
        <div className="home-flex">
          <div className="home-text-container">
            <Text>Spin the SubvisuWheel to win merch, experiences, NFTs and more.</Text>
            <Text>What are you waiting for? Let&apos;s get started!</Text>
          </div>
          <div className="image-section">
            <img src={ellipse1} alt="Ellipse" />
          </div>
        </div>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Home;
