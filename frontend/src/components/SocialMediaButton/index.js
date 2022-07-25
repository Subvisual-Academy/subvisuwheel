import { PropTypes } from "prop-types";
import { SOCIAL } from "constants/Subvisual.js";

const SocialMediaButton = ({ name }) => {
  const link = SOCIAL[name].url;
  const logo = SOCIAL[name].logo;

  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {logo}
      </a>
    </div>
  );
};

SocialMediaButton.propTypes = {
  name: PropTypes.oneOf(Object.keys(SOCIAL)).isRequired,
};

export default SocialMediaButton;
