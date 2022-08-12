import { useEffect, useState } from "react";

import ContainerWithGradient from "components/ContainerWithGradient";
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
    <ContainerWithGradient>
      <Wheel prizes={prizesList} email={email} />
    </ContainerWithGradient>
  );
};

export default WheelPage;
