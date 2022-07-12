import React from "react";

import "./button.css";

const button = () => {
  return (
    <div className="alignVertical">
      <span className="spinButton" onClick="">
        {" "}
        SPIN
      </span>
    </div>
  );
};

export default button;
