import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ValidatePrize = ({ children }) => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("prizeWon")) {
      setLoading(true);
    } else {
      navigator("/");
    }
  }, [navigator]);

  return loading ? children : null;
};

ValidatePrize.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidatePrize;
