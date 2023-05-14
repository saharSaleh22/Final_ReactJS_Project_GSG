import React from "react";
import "./styles_2.css";
import Typography from "@mui/material/Typography";

function Title(props) {
  return (
    <Typography variant="h4" className={props.class} gutterBottom>
      {props.type == "signin" ? "Sign In" : "Sign Up"}
    </Typography>
  );
}
export default Title;
