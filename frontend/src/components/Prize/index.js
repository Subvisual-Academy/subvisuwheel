import { PropTypes } from "prop-types";

import Button from "components/Button";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";
import { COMPANY_NAME } from "constants/Subvisual.js";

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
    <div className="center">
      <Title>{`Congrats, you won a ${prizeName}`}</Title>

      <div className={styles.container}>
        <img src={prizeImg} alt={prizeName} />
      </div>

      {name !== "nft" ? (
        <Text>Visit the {COMPANY_NAME} booth to claim your prize.</Text>
      ) : (
        <Text>Insert your address....</Text>
      )}

      <Button>Finish</Button>
    </div>
  );
};

Prize.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Prize;
