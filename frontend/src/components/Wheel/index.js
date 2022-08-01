import { useEffect, useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

import { WHEEL_CONFIG } from "constants/Subvisual.js";
import PrizePage from "pages/PrizePage";

const Wheel = () => {
  const { colors, name } = WHEEL_CONFIG;

  const [prizesInfo, setPrizesInfo] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [isPrizePage, setIsPrizePage] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState({});

  async function startRotate() {
    setIsRotating(!isRotating);

    await fetch(`${process.env.REACT_APP_BACKEND_PATH}/win-prize`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setSelectedPrize(data);
      });

    setTimeout(() => {
      setIsPrizePage(true);
    }, 5000);
  }

  function wheelStyle(i) {
    let backgroundColor = i % 2 === 0 ? colors.main : colors.secondary;

    const style = {
      transform: `rotate(${(360 / prizesInfo.length) * i}deg) skewY(-60deg)`,
      backgroundColor: `${backgroundColor}`,
    };
    return style;
  }

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
        setPrizesInfo(data);
      });
  }, []);

  return (
    <>
      {!isPrizePage ? (
        <div className={styles.root}>
          <h1 className={styles.wheelName}>{name}</h1>

          <div className={styles.arrow}></div>

          <ul
            className={classNames(styles.circle, {
              [styles.isRotating]: isRotating,
            })}
          >
            {prizesInfo.map((prize, index) => {
              return (
                <li
                  className={styles.prize}
                  key={prize.id}
                  style={wheelStyle(index)}
                >
                  <div
                    className={styles.prizeImageContainer}
                    contentEditable="true"
                    spellCheck="false"
                  >
                    <img
                      src={prize.image}
                      alt={prize.name}
                      className={styles.prizeImage}
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          <button className={styles.spinButton} onClick={startRotate}>
            SPIN
          </button>
        </div>
      ) : (
        <PrizePage prize={selectedPrize} />
      )}
    </>
  );
};
export default Wheel;
