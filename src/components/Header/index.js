import React from "react";
import logo from "../../assets/Moderno_logo1.png";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./style.module.css";
import MenuItem from "./MenuItem";
import Data from "./data";
import customTheme from "../../theme";

function Header(props) {
  return (
    <Box
      className={styles.hwrapper}
      sx={{
        background:
          props.Inpage === "pages"
            ? customTheme.palette.custom.light
            : customTheme.palette.secondary.light,
      }}
    >
      <Box className={`paddings ${styles.flexCenter1} ${styles.hcontainer}`}>
        <img src={logo} alt="" width={120} />
        <input className={styles.check} type="checkbox" id="toggle"></input>
        <label className={styles.toggler} for="toggle">
          <MenuIcon />
        </label>
        <Box className={`flexCenter ${styles.hmenu}`}>
          {Data.map((menu, i) => (
            <MenuItem href={menu.href} item={menu.item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
