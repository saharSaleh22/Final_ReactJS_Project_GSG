import React from "react";
import Box from "@mui/material/Box";
import styles from "./style.module.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import customTheme from "../../theme";
import { Stack, Typography } from "@mui/material";
import SocialIcons from "../Login/SocialIcons/SocialIcons";
import { MyDivider } from "../../StyledComponents";

function Footer() {
  return (
    <Box
      className={styles.hwrapper}
      sx={{ background: customTheme.palette.custom.light }}
    >
      <Box className={`paddings ${styles.flexCenter1} ${styles.hcontainer}`}>
        <Stack direction="column" spacing={0.5} sx={{ pt: 1, zIndex: 9 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 5, zIndex: 9 }}>
            <SocialIcons icon={faFacebook} class={"footer"} />
            <SocialIcons icon={faTwitter} class={"footer"} />
            <SocialIcons icon={faInstagram} class={"footer"} />
            <SocialIcons icon={faEnvelope} class={"footer"} />
          </Stack>
          <MyDivider />
          <Typography variant="subtitle1" sx={{ pt: 1 }}>
            CopyRight 2023 MODERNO@Gmail.com All Rights Reserved .
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
export default Footer;
