import { useEffect, useState } from "react";
import Wheel from "../components/Wheel";

const wheel = () => {
  const [WheelConfiguration, setWheelConfiguration] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/wheel`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setWheelConfiguration(data));
  }, []);

  return (
    <div>
      <Wheel configuration={WheelConfiguration} />
    </div>
  );
};

export default wheel;
