import { PropTypes } from "prop-types";

import Button from "components/Button";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

// Prizes
import Tshit from "assets/imgs/prizes/tshirt.png";
import NFT from "assets/imgs/prizes/nft.png";

const Prize = ({ name }) => {
  let prizeName = "";
  let prizeImg = "";

  if (name === "tshirt") {
    prizeName = "T-shirt";
    prizeImg = Tshit;
  }
  if (name === "nft") {
    prizeName = "NFT";
    prizeImg = NFT;
  }

  return (
    <>
      <Title>{`Congrats, you won a ${name.toUpperCase()}`}</Title>

      <div className={styles.container}>
        <img src={prizeImg} alt={prizeName} />
      </div>

      <Text>
        {name !== "nft"
          ? "Visit the Subvisual booth to claim your prize."
          : "Insert your address...."}
      </Text>

      <Button>Finish</Button>
    </>
  );
};

Prize.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Prize;
