import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";

function Input(props) {
  return (
    <Box className={styles.inputField}>
      <FontAwesomeIcon className={styles.icon} icon={props.icon} />
      <input type={props.type} placeholder={props.placeholder}></input>
    </Box>
  );
}
export default Input;
