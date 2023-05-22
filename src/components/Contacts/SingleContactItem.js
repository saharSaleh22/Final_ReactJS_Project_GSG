import React from "react";

import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import {ContactItem} from "../../StyledComponents";
import ProductButton from "../ProductsHomePage/ProductButton";
function SingleContactItem(props) {
  return (
    <Grid item xs={6} sx={{ mt: 3, md: 3 }}>
      <ContactItem>
        <Stack direction={"column"}>
          <Stack direction={"row"} spacing={2} justifyContent={"space-around"}>
            {props.icon}
            <Stack direction={"column"} sx={{ mr: 3 }}>
              <Typography variant="h6" sx={{ textAlign: "left" }} gutterBottom>
                {props.title}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="subtitle2" gutterBottom>
            {props.description}
          </Typography>
          <ProductButton value={props.buttonValue} />
        </Stack>
      </ContactItem>
    </Grid>
  );
}
export default SingleContactItem;
