import React from "react";
import "./styles_2.css";
import Typography from "@mui/material/Typography";

function SmallText(props) {
  return (
    <Typography variant="subtitle1" className={props.className} gutterBottom>
      {props.text}
    </Typography>
  );
}
export default SmallText;
