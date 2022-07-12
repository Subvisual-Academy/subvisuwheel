import React, { useState } from "react";
import Prize from "../components/Prize";

import "./WinPrize.css";

const WinPrize = () => {
  // let prizes = ["tshirt", "nft"];

  const [prize, setPrize] = useState("tshirt");

  const handleClick = (event) => {
    if (prize === "tshirt") setPrize("nft");
    if (prize === "nft") setPrize("tshirt");
  };

  return (
    <div className="center">
      <button onClick={handleClick}>Change Prize</button>
      <Prize name={prize} />
    </div>
  );
};

export default WinPrize;
