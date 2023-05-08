import React from "react";
import logo from "../../images/logo.png";
import "./styles.css";
function Button(props) {
  return (
    <button
      className={props.class==="hero-button"?props.class:"btn transparent"}
      onClick={props.onClick}
      id={props.id}
    >
      {props.text}
    </button>
  );
}
export default Button;
