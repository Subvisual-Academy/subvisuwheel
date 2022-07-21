import "./signup.css";

// Components
import Header from "../components/Header";
import Title from "../components/Typography/Title";
import SocialMediaButton from "../components/SocialMediaButton";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="Signup">
      <Header />
      <Title content="Join us to start spinning" />

      <div className="Signup-option-1">
        <SocialMediaButton name="github" username="subvisual" />
        <SocialMediaButton name="linkedin" username="wearesubvisual" />
        <SocialMediaButton name="behance" username="subvisual" />
        {/* <SocialMediaButton name="facebook" username="subvisual.co" />
        <SocialMediaButton name="instagram" username="wearesubvisual" /> */}
      </div>

      <Button content="Join Us" />
    </div>
  );
};

export default Signup;
