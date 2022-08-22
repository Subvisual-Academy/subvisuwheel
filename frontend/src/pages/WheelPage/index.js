import MainContainer from "components/MainContainer";
import Wheel from "components/Wheel";

const WheelPage = () => {
  const { email } = JSON.parse(localStorage.getItem("userData"));

  return (
    <MainContainer hasGradient={true}>
      <Wheel email={email} />
    </MainContainer>
  );
};

export default WheelPage;
