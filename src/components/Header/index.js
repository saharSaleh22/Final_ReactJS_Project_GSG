import React from "react";
import logo from "../../images/Moderno_logo1.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./style.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter1 paddings  h-container">
        <img src={logo} alt="" width={120} />
        <div className="flexCenter h-menu">
          <a href="">item1</a>
          <a href="">our values</a>
          <a href="">contact us</a>
          <a href="">get started</a>
          <button onClick={""}>
            <PersonIcon sx={{ ml: 2 }} /> 
          </button>
         
          <button onClick={""}>
            <ShoppingCartIcon />
          </button>
          {/* <button className="button">
            <a href="">Contact</a>
          </button>{" "} */}
        </div>
      </div>
    </section>
  );
};
export default Header;
