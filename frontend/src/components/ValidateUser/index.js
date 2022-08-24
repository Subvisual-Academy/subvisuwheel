import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ValidateUser = ({ children }) => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      setLoading(true);
    } else {
      navigator("/");
    }
  }, [navigator]);

  return loading ? children : null;
};

ValidateUser.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidateUser;
