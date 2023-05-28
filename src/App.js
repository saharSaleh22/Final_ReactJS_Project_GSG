import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./Router";
import customTheme from "./theme";
import { useState } from "react";
import { EmailContext } from "./EmailContext";

function App() {
  const [email, setEmail] = useState("sahar1@gmail.com");
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
    <ThemeProvider theme={customTheme}>
      <Router />
    </ThemeProvider>
    </EmailContext.Provider>
  );
}

export default App;
