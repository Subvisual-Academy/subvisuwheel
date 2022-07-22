import { PropTypes } from "prop-types";

import Button from "components/Button";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

// Prizes
import Tshit from "assets/imgs/prizes/tshirt.png";
import NFT from "assets/imgs/prizes/nft.png";

const Prize = (props) => {
  let prizeName = "";
  let prizeImg = "";

  if (props.name === "tshirt") {
    prizeName = "T-shirt";
    prizeImg = Tshit;
  }
  if (props.name === "nft") {
    prizeName = "NFT";
    prizeImg = NFT;
  }

  return (
    <div className="center">
      <Title content={`Congrats, you won a ${prizeName}`} />

      <div className={styles.container}>
        <img src={prizeImg} alt={prizeName} />
      </div>

      {props.name !== "nft" ? (
        <Text content="Visit the Subvisual booth to claim your prize." />
      ) : (
        <Text content="Insert your address...." />
      )}

      <Button content="Finish" />
    </div>
  );
};

Prize.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Prize;
