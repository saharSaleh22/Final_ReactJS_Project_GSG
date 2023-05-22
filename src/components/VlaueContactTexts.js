import React from "react";
import { Typography } from "@mui/material";

function ValueContactTexts(props) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {props.subtitle}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {props.description1}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {props.description2}
      </Typography>
    </>
  );
}
export default ValueContactTexts;
