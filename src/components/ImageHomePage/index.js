import React from "react";
import { Box } from "@mui/material";

import styles from "./styles.module.css";

function ImageHomePage(props) {
  return (
    <Box className={styles.imageContainer}>
      <img src={props.background} alt="" />
    </Box>
  );
}
export default ImageHomePage;
