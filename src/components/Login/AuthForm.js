import React, { useContext, useState } from "react";
import { Alert, Stack, Typography } from "@mui/material";
import { auth } from "./../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import Title from "../Texts/Title";
import Submit from "./SubmitButton";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcons from "./SocialIcons/SocialIcons";

import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../EmailContext";

const AuthForm = (props) => {
  const [name, setName] = useState("");
  const {email, setEmail} = useContext(EmailContext);
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  function logIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInEmail = userCredential.user.email;
        setEmail(loggedInEmail);
        navigate("/HomePage");
      })
      .catch((error) => {
        setFlag(false);
        setStatusMessage("Failed to log in");
      });
  }
  async function signUp() {
    let result = await fetch("http://localhost:3006/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password ,address:"",number:""}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setFlag(true);
        setStatusMessage("sign Up successfully");
          setEmail("");
      setName("");
      setPassword("");
      })
      .catch((error) => {
        setFlag(false);
        setStatusMessage("Failed to sign up");
      });
    
  }
  return (
    <form
      action=""
      className={props.type === "signin" ? "sign-in-form" : "sign-up-form"}
      onSubmit={(e) => {
        setStatusMessage("");
        e.preventDefault();
        props.type === "signin" ? logIn() : signUp();
      }}
    >
      <Typography variant="h4">MODERNO</Typography>
      <Title type={props.type} class={"title"} />
      {props.type === "signup" ? (
        <Input
          type="text"
          value={name}
          placeholder="Username"
          icon={faUser}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <></>
      )}
      <Input
        type="text"
        value={email}
        placeholder="Email"
        icon={faEnvelope}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="Password"
        icon={faLock}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Submit
        type="submit"
        value={props.type === "signin" ? "login" : "sign up"}
        class="btn solid"
      />
      {statusMessage && (
        <Alert severity={flag ? "success" : "error"}>{statusMessage}</Alert>
      )}
      <Typography variant="subtitle1" gutterBottom>
        or Sign in with social platforms
      </Typography>
      <Stack direction="row" spacing={2}>
        <SocialIcons icon={faFacebook} />
        <SocialIcons icon={faTwitter} />
        <SocialIcons icon={faInstagram} />
        <SocialIcons icon={faEnvelope} />
      </Stack>
    </form>
  );
};
export default AuthForm;
