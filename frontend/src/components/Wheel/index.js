import { useEffect, useState } from "react";
import styles from "./index.module.css";

const Wheel = () => {
  const [wheelInfo, setWheelInfo] = useState({});

  function wheelStyle(i) {
    let backgroundColor
    if (i % 2 === 0) backgroundColor = wheelInfo?.config?.main_color
    else backgroundColor = wheelInfo?.config?.secondary_color

    const style = {
      "transform": `rotate(${360 / wheelInfo.prizes.length * i}deg) skewY(-60deg)`,
      "background": `${backgroundColor}`
    }

    return style
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
      <h1 className="center">{wheelInfo.name}</h1>
      <div className="arrow"></div>
      <ul className="circle">
        {wheelInfo?.prizes?.map((prize, i) => {
          return (
            <li className="prize" key={prize.id} style={wheelStyle(i)}>
              <div contentEditable="true" spellCheck="false">
                <span className="text">{prize.name}</span>
                <img src={prize.image} alt={prize.name} className="img-prizes" />,
              </div>
            </li>
          );
        })}
      </ul>
      <button className={styles.align}>SPIN</button>
    </div>
  );
};

export default Wheel;
