import React from "react";
import logo from "../../images/logo.png";
import "./styles.css";
import BigText from "../Texts/BigText";
import SmallText from "../Texts/smallText";
import Button from "./Button";
import sign from "./signnn.svg";
import login from "./innn.svg";
function Panel(props) {
  return (
   
    <div className={props.type=="signin"?"panel right-panel":"panel left-panel"}>
    <div className="content">
      <BigText text={props.type=="signin"?"  one of us ?  ":" New here ? "} />
      <SmallText text="anything to be written here " />
      <Button
        onClick={props.onClick}
        text={props.type=="signin"?"Sign in":"Sign up"}
        id={props.type=="signin"?"sign-in-btn":"sign-up-btn"}
      />
    </div>
    <img src={props.type=="signin"?login:sign} className="image" alt=""></img>
  </div>

  
  );
}
export default Panel;
