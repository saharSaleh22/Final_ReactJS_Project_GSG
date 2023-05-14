import React from "react";
import background from "../../images/background.jpg";
import "./style.css";
import Box from "@mui/material/Box";
import SmallText from "../Texts/smallText";
import Button from "../Login/Button";
import ImageHomePage from "../ImageHomePage";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <Box className="paddings innerWidth flexCenter hero-container">
        <Box className="hero-left">
          <Box className="hero-title">
            <h1>
              Find the Most
              <br />
              Comfortable Furniture <br />
              for your home
            </h1>
          </Box>
          <SmallText
            text="Transform your home with our exquisite furniture collections"
            className="hero-desc"
          />
          <SmallText
            text=" to bring both style and comfort to your living spaces. "
            className="hero-desc"
          />
          <Button text={"Order"} class={"hero-button"} />

          <Button text={"buy"} class={"hero-button"} />
        </Box>
        <Box className="flexCenter hero-right">
          <ImageHomePage background={background} />
        </Box>
      </Box>
    </section>
  );
};
export default Hero;
