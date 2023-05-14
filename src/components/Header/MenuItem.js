import React from "react";
import "./style.css";
import Link from "@mui/material/Link";
function MenuItem(props) {
  return (
    <Link
      sx={{
        color: "#fff",
        fontSize: 20,
        textDecoration: "none",
        borderBottom: "2px solid transparent",
        "&:hover": {
          borderBottomColor: "white",
        },
        "@media (max-width:675px)": {
          color: "#713A3A",
          justifyContent: "center",
          "&:hover": {
            borderBottomColor: "#713A3A",
          },
        },
      }}
      href={props.href}
    >
      {props.item}
    </Link>
  );
}
export default MenuItem;
