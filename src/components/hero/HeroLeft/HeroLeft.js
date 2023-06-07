import React from "react";
import { Box } from "@mui/material";
import SmallText from "../../Texts/smallText";
import Button from "../../Login/Button";
import styles from "./style.module.css";
import { HeroTitle, HeroTypography } from "../../../StyledComponents";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const HeroLeft = () => {
  const [words] = useTypewriter({
    words: [
      "Comfortable Furniture",
      "Modern Kitchens",
      "High-quality Furniture",
      "Stylish Decoration",
      "Elegant Rooms",
    ],
    loop: {},
  });

  return (
    <Box className={styles.heroLeft}>
      <HeroTitle>
        <HeroTypography variant="h3">
          Find the Most
          <br />
          {words}
          <Cursor /> <br />
          for your home
        </HeroTypography>
      </HeroTitle>

      <SmallText text="Transform your home with our exquisite furniture collections" />
      <SmallText text=" to bring both style and comfort to your living spaces. " />
      <Button text={"Order"} class={"hero-button"} m={"hero"} />

      <Button text={"buy"} class={"hero-button"} />
    </Box>
  );
};
export default HeroLeft;
