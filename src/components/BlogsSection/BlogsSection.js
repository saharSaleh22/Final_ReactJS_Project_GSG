import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MyCarousel from "../Carousel/Carousel.js";
import { Box, Stack } from "@mui/material";
import { ButtonForProduct, StyledCard } from "../../StyledComponents.js";
import { Link } from "react-router-dom";

const BlogsSection = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/userproducts");
    result = await result.json();
    setProducts(result);
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Box className="paddings innerWidth" sx={{ pb: 9 }}>
      <Stack direction={"row"} sx={{ justifyContent: "space-between", mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Recent Blogs
        </Typography>
        <Link to="/allUserProducts">
          <ButtonForProduct size="small" width={"10%"}>
            view all Blogs
          </ButtonForProduct>
        </Link>
      </Stack>

      <MyCarousel items={3}>
        {products.map((card, i) => (
          <StyledCard key={i}>
            <CardMedia
              sx={{ maxWidth: 360, borderRadius: 4, m: 1 }}
              component="img"
              alt={card.title}
              height="250"
              image={card.image}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description.substring(0, 90)}...
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </MyCarousel>
    </Box>
  );
};
export default BlogsSection;
