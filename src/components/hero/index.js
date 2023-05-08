import React from "react";
import background from "../../images/background.jpg";
import "./style.css";
import Title from "../Texts/Title";
import BigText from "../Texts/BigText";
import SmallText from "../Texts/smallText";
import Button from "../Login/Button";
import Submit from "../Login/SubmitButton";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Find the Most
              <br />
              Comfortable Furniture <br />
              for your home
            </h1>
          </div>
          <SmallText
            text="Transform your home with our exquisite furniture collections"
            className="hero-desc"
          />
          <SmallText
            text=" to bring both style and comfort to your living spaces. "
            className="hero-desc"
          />
          <Button text={"buy"} class={"hero-button"} />

          <Button text={"buy"} class={"hero-button"} />
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src={background} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
