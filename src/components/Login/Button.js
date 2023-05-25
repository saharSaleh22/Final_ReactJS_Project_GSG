import React from "react";
import "./styles.css";
import ButtonMUI from "@mui/material/Button";
import customTheme from "../../theme";

function Button(props) {
  return (
    <ButtonMUI
      sx={{
        color:
          props.class === "selected"
            ? customTheme.palette.primary.main
            : "#fff",
        borderRadius: 8,
        border: props.class === "selected" ? "2px solid #713A3A" : "none",
        background:
          props.class === "selected"
            ? customTheme.palette.custom.main
            : "#713a3a",
        m: props.m === "hero" ? 5 : 0,
        mt: props.m === "hero" ? 5 : 0,
      }}
      className={
        props.class === "hero-button"
          ? "hero-button"
          : props.class === "selected"
          ? "selected"
          : "btn transparent"
      }
      onClick={props.onClick}
      id={props.id}
    >
      {props.text}
    </ButtonMUI>
  );
}
export default Button;
