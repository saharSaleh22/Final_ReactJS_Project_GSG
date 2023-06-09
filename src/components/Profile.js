import { Box, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState,} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EmailContext } from "../EmailContext";

function Profile() {
    const [username, setUsername] = useState("");
    const { email } = useContext(EmailContext);

    const getUsers = useCallback(async () => {
        let result = await fetch("http://localhost:3006/users");
        result = await result.json();
        const user = result.find((user) => user.email === email);
        user ? setUsername(user.name) : setUsername("Dear Customer");
      }, [email]);
    
      useEffect(() => {
        getUsers();
      }, [getUsers]);
  return (
    <>
      <Header Inpage={"pages"} />
      {1 === 1 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            height: "90vh",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="subtitle1">
            hello {username}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ width: "100%", px: 10 }}></Box>
      )}
      <Footer />
    </>
  );
}
export default Profile;
