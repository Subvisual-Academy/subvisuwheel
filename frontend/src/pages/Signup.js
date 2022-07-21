import "./signup.css";

// Components
import Header from "../components/Header";
import Title from "../components/Typography/Title";
import SocialMediaLink from "../components/SocialMediaLink";
import InputText from "../components/InputText";
import DropdownBox from "../components/DropdownBox";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="Signup">
      <Header />
      <Title content="Join us to start spinning" />

      <div className="Signup-option-1">
        <SocialMediaLink name="github" username="subvisual" />
        <SocialMediaLink name="linkedin" username="wearesubvisual" />
        <SocialMediaLink name="behance" username="subvisual" />
        {/* <SocialMediaLink name="facebook" username="subvisual.co" />
        <SocialMediaLink name="instagram" username="wearesubvisual" /> */}
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

      <Button content="Join Us" />
    </div>
  );
};

export default Signup;
