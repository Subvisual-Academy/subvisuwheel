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
      <Header />
      <div className="text-section">
        <div className="home-title-container">
          <Title content="Welcome to Subvisual's Wheel of Fortune!" />
        </div>
        <div className="home-flex">
          <div className="home-text-container">
            <Text content="Spin the SubvisuWheel to win merch, experiences, NFTs and more." />
            <Text content="What are you waiting for? Let's get started!" />
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
