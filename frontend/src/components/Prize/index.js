import { PropTypes } from "prop-types";
import "./Prize.css";

import Title from "../Typography/Title";
import Text from "../Typography/Text";
import Button from "../Button";

// Prizes
import Tshit from "../../assets/imgs/prizes/tshirt.png";
import NFT from "../../assets/imgs/prizes/nft.png";

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

      <div className="prize-container">
        <img className="prize-item" src={prizeImg} alt={prizeName} />
      </div>

      <Text
        content={
          props.name !== "nft"
            ? "Visit the Subvisual booth to claim your prize."
            : "Insert your address...."
        }
      />

      <Button content="Finish" />
    </div>
  );
};

Prize.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Prize;
