import React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import slide_image_4 from "../../images/p5.jpg";
import Details from "./Details";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
function SingleProduct() {
  const theme = useTheme();
  theme.breakpoints.customTablet = "@media (min-width: 900px)"; // Adjust the breakpoint value according to your needs

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.customTablet);

  const flexDirection = isMobile ? "column" : isTablet ? "row" : "column";
  const width = isMobile ? "100%" : isTablet ? "50%" : "90%";
  console.log(width);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Header Inpage={"pages"} />
      <Box
        sx={{
          width: "100%",
          py: 6,
          px: isMobile ? 2 : 10,
          justifyContent: "center",
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={0} direction={flexDirection}>
          <Item sx={{ width: width }}>
            <img
              src={slide_image_4}
              width="100%"
              height={isMobile ? "" : "500px"}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Item>
          <Details width={width} />
        </Stack>
      </Box>
    </>
  );
}
export default SingleProduct;
