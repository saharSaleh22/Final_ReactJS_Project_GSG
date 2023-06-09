import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Details from "./Details";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { StyledItem } from "../../StyledComponents";
import { useParams } from "react-router-dom";
function SingleProduct(props) {
  const theme = useTheme();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  });
  const getProducts = async () => {
    let result = null;
    if (props.type === "user") {
      const response = await fetch(`http://localhost:3006/userproducts/${id}`);
      result = await response.json();
    }

    if (props.type === "all") {
      const response = await fetch(`http://localhost:3006/products/${id}`);
      result = await response.json();
    }
    setProduct(result);
  };
  theme.breakpoints.customTablet = "@media (min-width: 900px)"; // Adjust the breakpoint value according to your needs

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.customTablet);

  const flexDirection = isMobile ? "column" : isTablet ? "row" : "column";
  const width = isMobile ? "100%" : isTablet ? "50%" : "90%";

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 6,
          px: isMobile ? 2 : 10,
          justifyContent: "center",
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={0} direction={flexDirection}>
          <StyledItem sx={{ width: width }}>
            <img
              src={product.image}
              width="100%"
              height={isMobile ? "" : "500px"}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </StyledItem>
          <Details product={product} width={width} type={props.type} />
        </Stack>
      </Box>
    </>
  );
}
export default SingleProduct;
