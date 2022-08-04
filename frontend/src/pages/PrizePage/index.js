import { COMPANY } from "constants/Subvisual.js";
import { PropTypes } from "prop-types";

import Button from "components/Button";
import Body from "components/Typography/Body";
import Logo from "components/Logo";

import styles from "./index.module.css";

const PrizePage = ({ prize }) => {
  return (
    <div className={styles.root}>
      <Logo>{`Congrats, you won a ${prize.name}`}</Logo>

      <div className={styles.prize}>
        <img src={prize.image} alt={prize.name} />
      </div>
      <Body>
        {prize.is_merch
          ? `Visit the ${COMPANY} booth to claim your prize`
          : "Check your email to claim the NFT"}
      </Body>

      <Button>Finish</Button>
    </div>
  );
};

export default PrizePage;

PrizePage.propTypes = {
  prize: PropTypes.isRequired,
};
