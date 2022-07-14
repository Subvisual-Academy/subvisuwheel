import "./text.css";

const Text = (props) => {
  if (props.link === "") {
    return <div className="Text">{props.content}</div>;
  }

  if (props.link !== "") {
    return <div className="Text">{props.content}</div>;
  }
};

export default Text;
