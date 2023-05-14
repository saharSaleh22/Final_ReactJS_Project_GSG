import React from "react";
import {Stack,Typography} from '@mui/material';

import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcons from "./SocialIcons";
import Input from "./Input";
import Title from "../Texts/Title";
import Submit from "./SubmitButton";
const AuthForm = (props) => {
  return (
    <form action="" className={props.type=="signin"?"sign-in-form":"sign-up-form"}>
      <h2 className="title">MODERNO</h2>
      <Title type={props.type} class={"title"} />
   
      <Input type="text" placeholder="Username" icon={faUser}/>
        {props.type=="signup"?  <Input type="password" placeholder="Email" icon={faEnvelope} />:<></>}
     <Input type="password" placeholder="Password" icon={faLock} />
     <Submit type="submit" value={props.type=="signin"?"login":"sign up"} class="btn solid"/>
      <Typography variant="subtitle1" gutterBottom>
      or Sign in with social platforms
      </Typography>
      <Stack direction="row" spacing={2}>
      <SocialIcons icon={faFacebook}/>
      <SocialIcons icon={faTwitter}/>
      <SocialIcons icon={faInstagram}/>
      <SocialIcons icon={faEnvelope}/>
      </Stack>
    
     
  
    </form>
  );
};
export default AuthForm;
