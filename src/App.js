import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./Router";
import customTheme from "./theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
