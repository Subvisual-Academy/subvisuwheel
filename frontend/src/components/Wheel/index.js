import { useEffect, useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { PropTypes } from "prop-types";

import { WHEEL_CONFIG } from "constants/Subvisual.js";
import PrizePage from "pages/PrizePage";

const Wheel = ({ userEmail }) => {
  const [prizesInfo, setPrizesInfo] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [isPrizePage, setIsPrizePage] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState({});

  async function startRotate() {
    setIsRotating(!isRotating);

    await fetch(`${process.env.REACT_APP_BACKEND_PATH}/win-prize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        setSelectedPrize(data);
      })
      .catch((error) => alert("Error during POST: ", error));

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

  const circleClassName = classNames(styles.circle, {
    [styles.isRotating]: isRotating,
  });

  return (
    <>
      {!isPrizePage ? (
        <div className={styles.root}>
          <h1 className={styles.wheelName}>{WHEEL_CONFIG.name}</h1>

          <div className={styles.arrow}></div>

          <ul className={circleClassName}>
            {prizesInfo.map((prize, index) => {
              return (
                <li
                  className={styles.prize}
                  key={prize?.id}
                  style={wheelStyle(index)}
                >
                  <div
                    className={styles.prizeImageContainer}
                    contentEditable="true"
                    spellCheck="false"
                  >
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
        </div>
      ) : (
        <PrizePage prize={selectedPrize} />
      )}
    </>
  );
};

Wheel.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default Wheel;
