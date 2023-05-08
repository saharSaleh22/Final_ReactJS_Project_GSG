import { React, useState } from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import sign from "./signnn.svg";
import login from "./innn.svg";
import AuthForm from "./AuthForm";
import BigText from "../Texts/BigText";
import SmallText from "../Texts/smallText";
import Button from "./Button";
import Panel from "./Panel";
const Login = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };
  return (
    <>
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <AuthForm type="signin" />
            <AuthForm type="signup" />
          </div>
          <div className="panels-container">
          <Panel onClick={handleSignUpClick} type="signup"/>
         
            <Panel onClick={handleSignInClick} type="signin"/>

           
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
