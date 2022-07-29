import { COMPANY } from "constants/Subvisual.js";
import { PropTypes } from "prop-types";

import Button from "components/Button";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const PrizePage = ({ prize }) => {
  return (
    <div className={styles.root}>
      <Title>{`Congrats, you won a ${prize.name}`}</Title>

      <div className={styles.prize}>
        <img src={prize.image} alt={prize.name} />
      </div>
      <Text>
        {prize.is_merch
          ? `Visit the ${COMPANY} booth to claim your prize`
          : "Check your email to claim the NFT"}
      </Text>

      <Button>Finish</Button>
    </div>
  );
};

export default PrizePage;

PrizePage.propTypes = {
  prize: PropTypes.isRequired,
};
