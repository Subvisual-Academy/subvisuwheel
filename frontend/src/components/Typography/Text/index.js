import { PropTypes } from "prop-types";
import "./text.css";

const Text = (props) => {
  if (props.link === "") {
    return <div className="Text">{props.content}</div>;
  }

  if (props.link !== "") {
    return <div className="Text">{props.content}</div>;
  }
};

Text.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Text;
