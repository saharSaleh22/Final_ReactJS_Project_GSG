import React from "react";
import logo from '../../images/logo.png';
function Submit  (props)  {
  return (
    <input type={props.type} value={props.value} className={props.class}></input>

  );
};
export default Submit;
