import Wheel from "components/Wheel";

import styles from "./index.module.css";

const WheelPage = () => {
  const { email } = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className={styles.root}>
      <Wheel email={email} />
    </div>
  );
};

export default WheelPage;
