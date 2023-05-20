import React from "react";
import Data from "../ProductsHomePage/data.js";
import customTheme from "../../theme";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MyCarousel from "../Carousel/Carousel.js";
import { Box, Stack } from "@mui/material";
import { ButtonForProduct } from "../../StyledComponents.js";

const BlogsSection = (props) => {
  return (
    <Box className="paddings innerWidth" sx={{ pb: 9 }}>
      <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
        <Typography variant="h5" gutterBottom>
        Recent Blogs
      </Typography>
      <ButtonForProduct value={"view all products"}/>
      </Stack>
      

      <MyCarousel items={3}>
        {Data.map((card, i) => (
          <Card
            sx={{
              maxWidth: 380,
              borderRadius: 4,
              background: customTheme.palette.secondary.light,

              ":hover": { background: "#efe3dd" },
            }}
          >
            <CardMedia
              sx={{ maxWidth: 360, borderRadius: 4, m: 1 }}
              component="img"
              alt={card.title}
              height="250"
              image={card.image}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </MyCarousel>
    </Box>
  );
};
export default BlogsSection;
