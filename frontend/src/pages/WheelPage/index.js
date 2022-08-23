import { useEffect, useState } from "react";
import MainContainer from "components/MainContainer";
import Wheel from "components/Wheel";

const WheelPage = () => {
  const { email } = JSON.parse(localStorage.getItem("userData"));
  const [prizesList, setPrizesList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/prizes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setPrizesList(data);
      });
  }, []);

  return (
    <MainContainer hasGradient={true}>
      <Wheel prizes={prizesList} email={email} />
    </MainContainer>
  );
};

export default WheelPage;
