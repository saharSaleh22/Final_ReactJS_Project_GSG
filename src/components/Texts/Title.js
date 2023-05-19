import React from "react";
import Typography from "@mui/material/Typography";

function Title(props) {
  return (
    <Typography variant="h4" sx={{ fontSize: 30 }} gutterBottom>
      {props.type === "signin" ? "Sign In" : "Sign Up"}
    </Typography>
  );
}
export default Title;
