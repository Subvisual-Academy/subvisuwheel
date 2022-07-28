import { useEffect, useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

import { WHEEL_CONFIG } from "constants/Subvisual.js";
import PrizePage from "pages/PrizePage";

const Wheel = () => {
  const [prizesInfo, setPrizesInfo] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [isPrizePage, setIsPrizePage] = useState(false);

  function startRotate() {
    setIsRotating(!isRotating);

    setTimeout(() => {
      setIsPrizePage(true);
    }, 5000);
  }

  function wheelStyle(i) {
    let backgroundColor;

    if (i % 2 === 0) {
      backgroundColor = WHEEL_CONFIG.colors.main;
    } else {
      backgroundColor = WHEEL_CONFIG.colors.secondary;
    }

    const style = {
      transform: `rotate(${(360 / prizesInfo?.length) * i}deg) skewY(-60deg)`,
      background: `${backgroundColor}`,
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

  const circleClassName = classNames({
    circle: true,
    rotation: isRotating,
  });

  return (
    <>
      {!isPrizePage ? (
        <>
          <h1 className={styles.root}>Wheel</h1>
          <div className={styles.arrow}></div>

          <ul className={circleClassName}>
            {prizesInfo.map((prize, index) => {
              return (
                <li
                  className={styles.prize}
                  key={prize?.id}
                  style={wheelStyle(index)}
                >
                  <div contentEditable="true" spellCheck="false">
                    <span className={styles.text}>{prize?.name}</span>
                    <img
                      src={prize?.image}
                      alt={prize?.name}
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
        </>
      ) : (
        <PrizePage />
      )}
    </>
  );
};
export default Wheel;
