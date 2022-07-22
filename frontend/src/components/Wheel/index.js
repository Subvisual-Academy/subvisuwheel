import { useEffect, useState } from "react";
import styles from "./index.module.css";
import "./index.css";

const Wheel = () => {
  const [wheelInfo, setWheelInfo] = useState({});
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
      backgroundColor = wheelInfo?.config?.main_color;
    } else {
      backgroundColor = wheelInfo?.config?.secondary_color;
    }

    const style = {
      transform: `rotate(${
        (360 / wheelInfo.prizes.length) * i
      }deg) skewY(-60deg)`,
      background: `${backgroundColor}`,
    };
    return style;
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/wheels`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setWheelInfo(data));
  }, []);
  return (
    <div>
      <h1 className={styles.center}>{wheelInfo.name}</h1>
      <div className={styles.arrow}></div>
      <ul className={rotate}>
        {wheelInfo?.prizes?.map((prize, i) => {
          return (
            <li className={styles.prize} key={prize.id} style={wheelStyle(i)}>
              <div contentEditable="true" spellCheck="false">
                <span className={styles.text}>{prize.name}</span>
                <img
                  src={prize.image}
                  alt={prize.name}
                  className={styles.img_prizes}
                />
                ,
              </div>
            </li>
          );
        })}
      </ul>
      <button className={styles.spin_button} onClick={startRotate}>
        SPIN
      </button>
    </div>
  );
};
export default Wheel;
