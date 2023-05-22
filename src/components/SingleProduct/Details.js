import React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Button from "../Login/Button/Button";
import CircleIcon from "@mui/icons-material/Circle";
import { DetailsItem } from "../../StyledComponents";
function Details(props) {
  return (
    <DetailsItem sx={{ width: props.width }}>
      {" "}
      <Typography variant="h5" sx={{ pb: 2, textAlign: "center" }} gutterBottom>
        this is product title
      </Typography>
      <hr width="80%" />
      <Typography
        variant="subtitle2"
        sx={{ width: "80%", pt: 2, pb: 2 }}
        gutterBottom
      >
        We always ready to help by providing the best services for you.We always
        ready to help by providing the best services for you.
      </Typography>{" "}
      <hr width="80%" textAlign="center" />
      <Typography variant="h6" gutterBottom>
        Colors :
      </Typography>
      <Stack direction={"row"} spacing={4} sx={{ pb: 2 }}>
        <CircleIcon sx={{ color: "brown" }} />
        <CircleIcon sx={{ color: "#385D50" }} />
        <CircleIcon sx={{ color: "#FFB8B8" }} />
        <CircleIcon sx={{ color: "grey" }} />
      </Stack>
      <hr width="80%" />
      <Typography variant="h6" sx={{ pb: 2 }} gutterBottom>
        Price : $2000.0
      </Typography>
      <hr width="80%" />
      <Box sx={{ textAlign: "center" }}>
        <Button text={"Order"} class={"hero-button"} />
      </Box>
    </DetailsItem>
  );
}
export default Details;
