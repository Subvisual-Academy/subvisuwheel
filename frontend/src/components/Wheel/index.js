import { useEffect, useState } from "react";
import styles from "./index.module.css";
import "./index.css";

import { WHEEL_CONFIG } from "constants/Subvisual.js";

const Wheel = () => {
  const [prizesInfo, setPrizesInfo] = useState([]);
  const [rotate, setRotate] = useState("circle");

  async function startRotate() {
    setRotate("circle start-rotate");
    setTimeout(() => {
      setRotate("circle start-rotate stop-rotate");
    }, Math.floor(Math.random() * 10000) + 1);
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
  return (
    <>
      <h1 className={styles.center}>Prizes</h1>
      <div className={styles.arrow}></div>

      <ul className={rotate}>
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
                  className={styles.img_prizes}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <button className={styles.spin_button} onClick={startRotate}>
        SPIN
      </button>
    </>
  );
};
export default Wheel;
