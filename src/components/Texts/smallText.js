import React from "react";
import Typography from "@mui/material/Typography";

function SmallText(props) {
  return (
    <Typography variant="subtitle1" gutterBottom>
      {props.text}
    </Typography>
  );
}
export default SmallText;
