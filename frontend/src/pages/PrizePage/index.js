import { useState } from "react";
import { COMPANY } from "constants/Subvisual.js";

import { ReactComponent as Tshirt } from "assets/svgs/prize/t-shirt.svg";
import { ReactComponent as NFT } from "assets/svgs/prize/nft.svg";

import Button from "components/Button";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const PrizePage = () => {
  const prizes = {
    tshirt: <Tshirt />,
    nft: <NFT />,
  };

  const [prize, setPrize] = useState("nft");

  const handleClick = () => {
    prize === "nft" ? setPrize("tshirt") : setPrize("nft");
  };

  return (
    <div className={styles.root}>
      <button onClick={handleClick}>Change Prize</button>

      <div className="center">
        <Title>{`Congrats, you won a ${prize}`}</Title>

        <div className={styles.item}>{prizes[prize]}</div>

        <Text>
          {prize === "nft"
            ? "Insert your address...."
            : `Visit the ${COMPANY} booth to claim your prize`}
        </Text>

        <Button>Finish</Button>
      </div>
    </div>
  );
};

export default PrizePage;
