import React from "react";
import Data from "./data.js";
import styles from "./style.module.css";
import customTheme from "../../theme";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProductButton from "./ProductButton.js";
import MyCarousel from "../Carousel/Carousel.js";

const ProductsHome = (props) => {
  return (
    <section>
      <div className="paddings innerWidth">
        <div className={styles.rHead}>
          <Typography variant="h5" gutterBottom>
            Products
          </Typography>
        </div>
        <MyCarousel items={4}>
          {Data.map((card, i) => (
            <Card
              sx={{
                maxWidth: 280,
                borderRadius: 4,
                background: customTheme.palette.secondary.light,

                ":hover": { background: "#efe3dd" },
              }}
            >
              <CardMedia
                sx={{ maxWidth: 260, borderRadius: 4, m: 1 }}
                component="img"
                alt={card.title}
                height="200"
                image={card.image}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  $ {card.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title.substring(0, 20)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <ProductButton value={"shop now!"} />
              </CardActions>
            </Card>
          ))}
        </MyCarousel>
      </div>
    </section>
  );
};
export default ProductsHome;
