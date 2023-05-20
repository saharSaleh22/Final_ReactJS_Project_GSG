import React from "react";
import background from "../../../assets/background.jpg";
import Box from "@mui/material/Box";

import ImageHomePage from "../../ImageHomePage";
const HeroRight = () => {
  return (
    <Box className="flexCenter">
      <ImageHomePage background={background} />
    </Box>
  );
};
export default HeroRight;
