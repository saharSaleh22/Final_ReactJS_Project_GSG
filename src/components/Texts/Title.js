import React from "react";
import logo from '../../images/logo.png';
import './styles_2.css'
function Title  (props)  {
  return (
    <h2 className={props.class}>{props.type=="signin"?"Sign In":"Sign Up"}</h2>

  );
};
export default Title;