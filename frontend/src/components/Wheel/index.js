import { useState } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import { ReactComponent as WheelImageBackground } from "assets/svgs/wheel-background/wheel-background.svg";
import { ReactComponent as WheelImagePrizes } from "assets/svgs/wheel-background/wheel-prizes.svg";
import { ReactComponent as WheelSpinButton } from "assets/svgs/wheel-background/spin-button.svg";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

const Wheel = ({ id }) => {
  let navigator = useNavigate();
  const [isRotating, setIsRotating] = useState(false);

  async function startRotate() {
    setIsRotating((prev) => !prev);

    await fetch(`${process.env.REACT_APP_BACKEND_PATH}/leads`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
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
      });
    setTimeout(() => {
      navigator("/prize");
    }, 5000);
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.wheel}>
          <div className={styles.wheelBackground}>
            <WheelImageBackground />
          </div>

          <div
            className={classNames(styles.prizesCircle, {
              [styles.isRotating]: isRotating,
            })}
          >
            <WheelImagePrizes width="100%" height="100%" />
          </div>

          <div className={styles.playButton}>
            <WheelSpinButton width="100%" height="100%" onClick={startRotate} />
          </div>
        </div>
      </div>
    </>
  );
};

Wheel.propTypes = {
  id: PropTypes.number,
};

export default Wheel;
