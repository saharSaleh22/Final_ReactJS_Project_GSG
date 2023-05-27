import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import "react-multi-carousel/lib/styles.css";
import Typography from "@mui/material/Typography";
import MyCarousel from "../Carousel/Carousel.js";
import { ButtonForProduct } from "../../StyledComponents.js";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const ProductsHome = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/products");
    result = await result.json();
    setProducts(result);
  };
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomItems(products, 10);
  return (
    <section>
      <div className="paddings innerWidth">
        <div className={styles.rHead}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", mb: 3 }}
          >
            <Typography variant="h5" gutterBottom>
              Products
            </Typography>
            <Link to="/allProducts">
              <ButtonForProduct size="small" width={"30%"}>
                view all 
              </ButtonForProduct>
            </Link>
          </Stack>
        </div>
        <MyCarousel items={4}>
          {randomProducts.map((card, i) => (
            <SingleCard card={card} />
          ))}
        </MyCarousel>
      </div>
    </section>
  );
};
export default ProductsHome;
