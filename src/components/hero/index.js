import React from "react";

import styles from "./style.module.css";
import customTheme from "../../theme";

import Box from "@mui/material/Box";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";
const Hero = () => {
  return (
    <Box
      className={styles.heroWrapper}
      sx={{ background: customTheme.palette.secondary.light }}
    >
      <Box className={`paddings innerWidth flexCenter ${styles.heroContainer}`}>
        <HeroLeft />
        <HeroRight />
      </Box>
    </Box>
  );
};
export default Hero;
