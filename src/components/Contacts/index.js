import { React } from "react";
import styles from "./styless.module.css";
import ImageHomePage from "../ImageHomePage";
import background from "../../assets/p4.jpg";
import ContactRight from "./ContactRight";
import { Box } from "@mui/material";

const Contacts = () => {
  return (
    <Box className=" innerWidth paddings flexCenter v-container">
      <ContactRight />
      <Box className={styles.cleft}>
        <ImageHomePage background={background} />
      </Box>
    </Box>
  );
};
export default Contacts;
