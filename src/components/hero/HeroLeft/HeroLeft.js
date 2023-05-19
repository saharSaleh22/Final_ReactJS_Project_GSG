import React from "react";
import { Box } from "@mui/material";
import SmallText from "../../Texts/smallText";
import Button from "../../Login/Button/Button";
import styles from "./style.module.css";
import { HeroTitle } from "../../../StyledComponents";

const HeroLeft = () => {
  return (
    <Box className={styles.heroLeft}>
      <HeroTitle>
        Find the Most
        <br />
        Comfortable Furniture <br />
        for your home
      </HeroTitle>

      <SmallText text="Transform your home with our exquisite furniture collections" />
      <SmallText text=" to bring both style and comfort to your living spaces. " />
      <Button text={"Order"} class={"hero-button"} />

      <Button text={"buy"} class={"hero-button"} />
    </Box>
  );
};
export default HeroLeft;
