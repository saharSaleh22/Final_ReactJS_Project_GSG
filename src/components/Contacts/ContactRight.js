import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import SingleContactItem from "./SingleContactItem";
import Data from "./data";
import ValueContactTexts from "../VlaueContactTexts";
function ContactRight() {
  return (
    <Box>
      <ValueContactTexts
        title=" Contact Us"
        subtitle="Easy to contact Us"
        description1="We always ready to help by providing the best services for you."
        description2=" we beleive a good place to live can make your life better"
      />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columnSpacing={{ sm: 2, md: 4 }}>
          {Data.map((item, i) => (
            <SingleContactItem
              title={item.title}
              description={item.description}
              icon={item.icon}
              buttonValue={item.buttonValue}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default ContactRight;
