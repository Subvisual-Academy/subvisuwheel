import { useEffect, useState } from "react";

import Wheel from "components/Wheel";

import styles from "./index.module.css";

const WheelPage = () => {
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
    <div className={styles.root}>
      <Wheel prizes={prizesList} email="test@subvisual.com" />
    </div>
  );
};

export default WheelPage;
