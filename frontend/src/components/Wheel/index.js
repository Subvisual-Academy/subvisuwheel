import React from "react";
import SpinButton from "./button";
import "./wheel.css";
import WheelComponent from "react-wheel-of-prizes";

const CreateSVG = () => {
  return (
    <PieCircle
      slices={[
        { percentage: "0.10", color: "blue" },
        { percentage: "0.20", color: "green" },
        { percentage: "0.25", color: "red" },
        { percentage: "0.30", color: "yellow" },
      ]}
    />
  );
};

export const PieCircle = (props) => {
  let totalPercentage = 0;

  const getCoordinatesForPercent = () => {
    const x = Math.cos(2 * Math.PI * totalPercentage);
    const y = Math.sin(2 * Math.PI * totalPercentage);
    return [x, y];
  };

  const _renderSlice = ({ percentage, color }) => {
    const [startX, startY] = getCoordinatesForPercent();
    totalPercentage += percentage;
    const [endX, endY] = getCoordinatesForPercent();

    const largeArcFlag = percentage > 0.5 ? 1 : 0;
    const pathData = [
      `M ${startX} ${startY}`, // Move
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      "L 0 0", // Line
    ].join(" ");

    return <path d={pathData} fill={color} key={pathData} />;
  };

  return (
    <svg
      viewBox="-1 -1 2 2"
      style={{ transform: [{ rotate: "-90deg" }] }}
      height="100"
      width="100"
    >
      {props.slices.map((slice) => _renderSlice(slice))}
    </svg>
  );
};

const wheel = () => {
  const name = "Wheel";

  const prizes = ["Prize1", "Prize2", "Prize3", "Prize4"];

  const colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0"];

  const ended = (winner) => {
    alert(winner);
  };

  return (
    <div>
      <CreateSVG />

      {name}
      <div className="sideBySide">
        <WheelComponent
          segments={prizes}
          segColors={colors}
          winningSegment="won 60"
          onFinished={(winner) => ended(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="hello"
        />
        <SpinButton />
      </div>
    </div>
  );
};

export default wheel;
