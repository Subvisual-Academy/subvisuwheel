import { PropTypes } from "prop-types";
import { COMPANY, PRIZE } from "constants/Subvisual.js";

import Button from "components/Button";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";

import styles from "./index.module.css";

const Prize = ({ name }) => {
  return (
    <div className="center">
      <Title>{`Congrats, you won a ${name}`}</Title>

      <div className={styles.item}>{PRIZE[name]}</div>

      <Text>
        {name === "nft"
          ? "Insert your address...."
          : `Visit the ${COMPANY} booth to claim your} prize`}
      </Text>

      <Button>Finish</Button>
    </div>
  );
};

Prize.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Prize;
