import React from "react";
import {Stack,Box} from '@mui/material';

function ImageHomePage(props) {
  return (

    <Box className="image-container">
            <img src={props.background} alt="" />
          </Box>
  );
}
export default ImageHomePage;
