import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";

export default  function SocialIcons  (props) {
  return (
    <Box href="#" className="socialIcon">
      <FontAwesomeIcon icon={props.icon} />
    </Box>
  );
};

