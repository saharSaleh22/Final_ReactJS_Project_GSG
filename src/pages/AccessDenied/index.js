import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EmailContext } from "../../EmailContext";

export const AuthGuard = ({ children }) => {
  const {email} = useContext(EmailContext);

  if (email==="") {
    return <Navigate to="/login" />;
  }

  return children;
};