import React from "react";
import logo from '../../images/logo.png';
import './styles_2.css'
function SmallText  (props)  {
  return (
    <p className={props.className}>{props.text} </p>
  );
};
export default SmallText;
