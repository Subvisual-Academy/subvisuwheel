import { PropTypes } from "prop-types";
import "./title.css";

const Title = (props) => {
  return <h1 className="Title">{props.content}</h1>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;
