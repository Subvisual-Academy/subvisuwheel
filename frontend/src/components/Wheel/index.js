import { useState } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

const WHEEL_SIZE = 100;
const ICON_SIZE = WHEEL_SIZE / 8;

const getCoordinatesForPercent = (percent, radious) => [
  Math.cos(2 * Math.PI * percent) * radious,
  Math.sin(2 * Math.PI * percent) * radious,
];

const renderSlices = (slices, radious) => {
  let cumulativePercent = 0;

  return slices.map((slice, index) => {
    const [startX, startY] = getCoordinatesForPercent(
      cumulativePercent,
      radious
    );
    cumulativePercent += slice.percent;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent, radious);
    const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
    const pathData = [
      `M ${startX} ${startY}`, // Move
      `A ${radious} ${radious} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      `L 0 0`, // Line
    ].join(" ");

    return (
      <path key={index} d={pathData} fill={index % 2 ? "#9F18D9" : "#EA1889"} />
    );
  });
};

const renderIcons = (slices, radious) => {
  let cumulativePercent = 0;

  return slices.map((slice, index) => {
    const [x, y] = getCoordinatesForPercent(
      cumulativePercent + slice.percent / 2,
      radious * 0.8
    );
    cumulativePercent += slice.percent;

    return (
      <image
        key={index}
        alt="icon"
        x={x - ICON_SIZE / 2}
        y={y - ICON_SIZE / 2}
        width={ICON_SIZE}
        height={ICON_SIZE}
        href={`/assets/svgs/prizes/${slice.icon}.svg`}
      />
    );
  });
};

const renderCircle = (slices, radious) => (
  <svg viewBox={`${-radious} ${-radious} ${radious * 2} ${radious * 2}`}>
    <radialGradient
      id="background"
      cx="0"
      cy="0"
      r="1"
      gradientUnits="userSpaceOnUse"
      gradientTransform="rotate(26.595 11.59 -740.44) scale(580 400)"
    >
      <stop offset=".492" stopColor="#57F2B9" />
      <stop offset=".756" stopColor="#E7AFFF" />
    </radialGradient>
    <ellipse
      cx="0"
      cy="0"
      rx="100"
      ry="100"
      transform="rotate(19.391 0 0)"
      fill="url(#background)"
    />
    {renderSlices(slices, radious * 0.8)}
    {renderIcons(slices, radious * 0.8)}
    <image
      alt="button"
      x={-radious / 2}
      y={-radious / 2}
      width={radious}
      height={radious}
      href="/assets/spin-button.svg"
    />
  </svg>
);

const Wheel = ({ email }) => {
  const navigator = useNavigate();
  const { REACT_APP_BACKEND_PATH } = process.env;
  const [isRotating, setIsRotating] = useState(false);

  const slices = [
    { percent: 0.2, icon: "mug" },
    { percent: 0.2, icon: "nft" },
    { percent: 0.2, icon: "mug" },
    { percent: 0.2, icon: "pen" },
    { percent: 0.1, icon: "party" },
    { percent: 0.1, icon: "tshirt" },
  ];

  async function startRotate() {
    setIsRotating((prev) => !prev);

    const response = await fetch(`${REACT_APP_BACKEND_PATH}/win-prize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      const data = await response.text();
      localStorage.setItem("prizeWon", data);
      setTimeout(() => {
        navigator("/win-prize");
      }, 5000);
    } else {
      alert("Error during POST!", response);
    }
  }

  const wheelClassName = classNames(styles.wheel, {
    [styles.isRotating]: isRotating,
  });

  return (
    <div className={styles.main}>
      <button className={wheelClassName} onClick={startRotate}>
        {renderCircle(slices, WHEEL_SIZE)}
      </button>
    </div>
  );
};

Wheel.propTypes = {
  email: PropTypes.string,
};

export default Wheel;
