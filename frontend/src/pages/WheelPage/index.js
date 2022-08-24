import MainContainer from "components/MainContainer";
import Wheel from "components/Wheel";

const WheelPage = () => {
  const { id } = JSON.parse(localStorage.getItem("userID"));

  return (
    <MainContainer hasGradient={true}>
      <Wheel id={id} />
    </MainContainer>
  );
};

export default WheelPage;
