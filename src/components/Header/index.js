import React from "react";
import logo from "../../images/Moderno_logo1.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <section className="h-wrapper">
      <Box className="flexCenter1 paddings  h-container">

        <img src={logo} alt="" width={120} />
        <input className="check" type="checkbox" id="toggle"></input>
        <label className="toggler" for="toggle">
          <MenuIcon />
        </label>
        <Box className="flexCenter h-menu">
          <MenuItem href={"any/link"} item={"Home Page"} />
          <MenuItem href={"any/link"} item={"shipping"} />
          <MenuItem href={"any/link"} item={"products"} />
          <MenuItem href={"any/link"} item={"orders "} />
          <MenuItem href={"any/link"} item={<PersonIcon sx={{ ml: 2 }} /> }/>
          <MenuItem href={"any/link"} item={<ShoppingCartIcon sx={{ ml: 2 }} /> }/>


        </Box>
      </Box>
    </section>
  );
};
export default Header;
