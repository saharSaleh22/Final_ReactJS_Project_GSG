import React from "react";
import Data from "./data.js";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../images/background.jpg";

const ProductsHome = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <div className="paddings innerWidth r-container">
        <div className="r-head">
          <span>Products</span>
        </div>
        <Carousel responsive={responsive}>
          {Data.map((card, i) => (
            // <div className="r-card">
            //   <img src={card.image} alt="home" />
            //   <span className="secondaryText r-price">
            //     <span>$</span>
            //     <span>{card.price}</span>
            //   </span>
            // </div>
            <Card
              sx={{ maxWidth: 280, borderRadius: 4, background: "#fbf3ef" ,":hover": { background: "#efe3dd" },}}
            >
              <CardMedia
                sx={{ maxWidth: 260, borderRadius: 4, m: 1 }}
                component="img"
                alt={card.title}
                height="200"
                image={image}
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
                <Button
                  size="small"
                  sx={{
                    background: "#A75D5D",
                    color: "white",
                    pt: 1.2,
                    pb: 1.2,
                    pl: 4,
                    pr: 4,
                    mb: 2,
                    ml: "25%",
                    width: "50%",
                    textTransform: "lowercase",
                    fontSize: 16,
                    ":hover": { background: "gray" },
                  }}
                >
                  shop now!
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default ProductsHome;
