import React from "react";
import "./styles.css";
import ButtonMUI from '@mui/material/Button';

function Button(props) {
  return (

    <ButtonMUI
      sx={{ color: "#fff",borderRadius:8,background:"#713a3a",m:3,mt:5}}
      className={props.class==="hero-button"?props.class:"btn transparent"}
      onClick={props.onClick}
      id={props.id}
    >
      {props.text}
    </ButtonMUI>
  );
}
export default Button;
