import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input (props)  {
  return (
    <div className="inputField">
    <FontAwesomeIcon className="icon" icon={props.icon} />
    <input type={props.type} placeholder={props.placeholder}></input>
  </div>
  );
};
export default Input;
