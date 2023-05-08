import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcons from "./SocialIcons";
import Input from "./Input";
import Title from "../Texts/Title";
import SmallText from "../Texts/smallText";
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
      <SmallText text="or Sign in with social platforms" />
    
      <div className="socialMedia">
      <SocialIcons icon={faFacebook}/>
      <SocialIcons icon={faTwitter}/>
      <SocialIcons icon={faInstagram}/>
      <SocialIcons icon={faEnvelope}/>
     
      </div>
    </form>
  );
};
export default AuthForm;
