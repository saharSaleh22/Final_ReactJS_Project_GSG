import React from "react";
import "./styles.css";
import BigText from "../Texts/BigText";
import SmallText from "../Texts/smallText";
import Button from "./Button";
import sign from "../../assets/signnn.svg";
import { Box } from "@mui/material";

import login from "../../assets/loginBack.svg";
function Panel(props) {
  return (
    <Box
      className={
        props.type === "signin" ? "panel right-panel" : "panel left-panel"
      }
    >
      <Box className="content">
        <BigText
          text={props.type === "signin" ? "  one of us ?  " : " New here ? "}
        />
        <SmallText text={props.type === "signin" ? "  sign in now! " : " join us now! "} />
        <Button
          onClick={props.onClick}
          text={props.type === "signin" ? "Sign in" : "Sign up"}
          id={props.type === "signin" ? "sign-in-btn" : "sign-up-btn"}
        />
      </Box>
      <img
        src={props.type === "signin" ? login : sign}
        className="image"
        alt=""
      />
    </Box>
  );
}
export default Panel;
