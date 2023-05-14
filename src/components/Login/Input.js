import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";

function Input(props) {
  return (
    <Box className="inputField">
      <FontAwesomeIcon className="icon" icon={props.icon} />
      <input type={props.type} placeholder={props.placeholder}></input>
    </Box>
  );
}
export default Input;
