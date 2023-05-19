import { React, useState } from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import AuthForm from "./AuthForm/AuthForm";
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
      <Box className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <Box className="signin-signup">
          <AuthForm type="signin" />
          <AuthForm type="signup" />
        </Box>
        <Box className="panels-container">
          <Panel onClick={handleSignUpClick} type="signup" />

          <Panel onClick={handleSignInClick} type="signin" />
        </Box>
      </Box>
    </>
  );
};
export default Login;
