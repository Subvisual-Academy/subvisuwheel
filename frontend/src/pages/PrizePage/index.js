import { useState } from "react";
import Prize from "components/Prize";

import styles from "./index.module.css";

const PricePage = () => {
  const [prize, setPrize] = useState("tshirt");

  const handleClick = (event) => {
    if (prize === "tshirt") setPrize("nft");
    if (prize === "nft") setPrize("tshirt");
  };

  return (
    <div className={styles.center}>
      <button onClick={handleClick}>Change Prize</button>
      <Prize name={prize} />
    </div>
  );
};

export default PricePage;
