import { useState } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";

import { WHEEL_CONFIG } from "constants/Subvisual.js";
import Logo from "components/Logo";

import { ReactComponent as WheelImageBackground } from "assets/svgs/wheel-background/purple-circle.svg";
// import { ReactComponent as Pen } from "assets/svgs/prizes/pen.svg";
import { ReactComponent as Nft } from "assets/svgs/prizes/nft.svg";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

const Wheel = ({ prizes, email }) => {
  const { colors } = WHEEL_CONFIG;
  let navigator = useNavigate();

  const [isRotating, setIsRotating] = useState(false);

  async function startRotate() {
    setIsRotating((prev) => !prev);

    await fetch(`${process.env.REACT_APP_BACKEND_PATH}/win-prize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        localStorage.setItem("prizeWon", JSON.stringify(data));
      })
      .catch((error) => alert("Error during POST!", error));

    setTimeout(() => {
      navigator("/win-prize");
    }, 5000);
  }

  function wheelStyle(i) {
    let backgroundColor = i % 2 === 0 ? colors.main : colors.secondary;

    const style = {
      transform: `rotate(${(360 / prizes.length) * i - 15}deg) skewY(-60deg)`,
      backgroundColor: `${backgroundColor}`,
    };

    return style;
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.wheel}>
          <div className={styles.purpleCircle}>
            <WheelImageBackground />
          </div>

          <div
            className={classNames(styles.prizesCircle, {
              [styles.isRotating]: isRotating,
            })}
          >
            <ul>
              {prizes.map((prize, index) => {
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
                      {/* <Pen /> */}
                      <Nft />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.playButton}>
            <button className={styles.spinButton} onClick={startRotate}>
              SPIN!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Wheel.propTypes = {
  prizes: PropTypes.arrayOf,
  email: PropTypes.string,
};

export default Wheel;
