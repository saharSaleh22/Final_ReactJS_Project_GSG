import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcons from "./SocialIcons/SocialIcons";
import Input from "./Input";
import Title from "../Texts/Title";
import Submit from "./SubmitButton";
const AuthForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function logIn() {
    console.log("inside login ");
  }
  async function signUp() {
    let result = await fetch("http://localhost:3006/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.JSON();
    console.log("inside signup ");
  }
  return (
    <form
      action=""
      className={props.type === "signin" ? "sign-in-form" : "sign-up-form"}
      onSubmit={(e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        // Call your submit logic here
        props.type === "signin" ? logIn() : signUp();
      }}
    >
      <Typography variant="h4">MODERNO</Typography>
      <Title type={props.type} class={"title"} />

      <Input
        type="text"
        value={name}
        placeholder="Username"
        icon={faUser}
        onChange={(e) => setName(e.target.value)}
      />
      {props.type === "signup" ? (
        <Input
          type="text"
          value={email}
          placeholder="Email"
          icon={faEnvelope}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <></>
      )}
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
