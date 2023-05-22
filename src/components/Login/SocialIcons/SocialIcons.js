import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
export default function SocialIcons(props) {
  return (
    <Box
      href="#"
      className={props.class === "footer" ? styles.footer : styles.socialIcon}
    >
      <FontAwesomeIcon icon={props.icon} />
    </Box>
  );
}
