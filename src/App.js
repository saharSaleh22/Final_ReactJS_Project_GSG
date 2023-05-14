import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

import Hero from "./components/hero";
import ProductsHome from "./components/ProductsHomePage";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Poppins from "./components/Poppins/Poppins-Light.ttf";
import Router from "./Router";
const theme = createTheme({
  typography: {
    fontFamily: ["Crimson Text"].join(","),
    fontSize: 16,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header/>
      <Hero/>
      <ProductsHome/> */}
      <Router />
    </ThemeProvider>
  );
}

export default App;
