import { useState } from "react";
import Prize from "components/Prize";

import styles from "./index.module.css";

const PricePage = () => {
  const prizes = ["tshirt", "nft"];
  const [prize, setPrize] = useState(0);

  const handleClick = () => {
    prize === 0 ? setPrize(1) : setPrize(0);
  };

  return (
    <div className={styles.root}>
      <button onClick={handleClick}>Change Prize</button>
      <Prize name={prizes[prize]} />
    </div>
  );
};

export default PricePage;
