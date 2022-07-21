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
      <Title>Join us to start spinning</Title>

      <div className="Signup-option-1">
        <SocialMediaButton name="github" username="subvisual" />
        <SocialMediaButton name="linkedin" username="wearesubvisual" />
        <SocialMediaButton name="behance" username="subvisual" />
        {/* <SocialMediaButton name="facebook" username="subvisual.co" />
        <SocialMediaButton name="instagram" username="wearesubvisual" /> */}
      </div>

      <div className="Signup-option-2">
        <InputText />
        <InputText />
        <DropdownBox />
      </div>

      <div className="Checkbox">
        <CheckBox />
        <CheckBox />
      </div>

      <Button>Join Us</Button>
    </div>
  );
};

export default Signup;
