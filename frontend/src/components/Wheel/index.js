import { PropTypes } from "prop-types";
import SpinButton from "./button";
import "./wheel.css";

const Wheel = (props) => {

  return (
    <div>
      {props.configuration}

      <div className="sideBySide">
        <SpinButton />
      </div>
    </div>
  );
};

Wheel.propTypes = {
  configuration: PropTypes.string.isRequired,
};

export default Wheel;

