import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageHomePage from "../../ImageHomePage";

import background from "../../../assets/p1.jpg";
import background1 from "../../../assets/p2.jpg";
import background2 from "../../../assets/p3.jpg";
import background3 from "../../../assets/p4.jpg";

const HeroRight = () => {
  const [currentBackground, setCurrentBackground] = useState(background);
  const backgrounds = [background, background1, background2, background3];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % backgrounds.length;
      setCurrentBackground(backgrounds[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="flexCenter">
      <ImageHomePage background={currentBackground} />
    </Box>
  );
};

export default HeroRight;
