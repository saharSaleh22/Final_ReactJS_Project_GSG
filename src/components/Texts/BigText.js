import React from "react";
import Typography from "@mui/material/Typography";

function BigText(props) {
  return (
    <Typography variant="h5" gutterBottom>
      {props.text}
    </Typography>
  );
}
export default BigText;
