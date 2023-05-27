import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Stack } from "@mui/material";
import Button from "../Login/Button";
import SingleCard from "../ProductsHomePage/SingleCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Footer from "../Footer";
function AllProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const [selectedButton, setSelectedButton] = useState("All");

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };
  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/products");
    result = await result.json();
    setProducts(result);
  };
  return (
    <>
      <Header Inpage={"pages"} />
      <Stack spacing={6} direction={"row"} sx={{ my: 10, mx: 25 }}>
        <Button
          text={"All"}
          class={selectedButton === "All" ? "selected" : "hero-button"}
          onClick={() => handleButtonClick("All")}
        />
        <Button
          text={"one Peice"}
          class={selectedButton === "one Peice" ? "selected" : "hero-button"}
          onClick={() => handleButtonClick("one Peice")}
        />
        <Button
          text={"Kitchen"}
          class={selectedButton === "Kitchen" ? "selected" : "hero-button"}
          onClick={() => handleButtonClick("Kitchen")}
        />
        <Button
          text={"salon"}
          class={selectedButton === "salon" ? "selected" : "hero-button"}
          onClick={() => handleButtonClick("salon")}
        />
        <Button
          text={"decoration"}
          class={selectedButton === "decoration" ? "selected" : "hero-button"}
          onClick={() => handleButtonClick("decoration")}
        />
      </Stack>
      <Box sx={{ width: "100%", px: 10 }}>
        <Grid container spacing={4}>
          {products.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={3}>
              <SingleCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>

    
    </>
  );
}
export default AllProductsPage;
