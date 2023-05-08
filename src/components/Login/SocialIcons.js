import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default  function SocialIcons  (props) {
  return (
    <a href="#" className="socialIcon">
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

