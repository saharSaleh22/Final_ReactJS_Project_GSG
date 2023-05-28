import React, { useEffect, useState } from "react";
import Header from "../Header";
import SingleCard from "../ProductsHomePage/SingleCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Footer from "../Footer";
import Button from "../Login/Button";
import { Stack, Typography } from "@mui/material";
import AddProductDialog from "./AddProductDialog";
function UserProducts() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/userproducts");
    result = await result.json();

    setProducts(result);
  };
  function handleButtonClick(){
   setOpen(true);
  }
  return (
    <>
      <Header Inpage={"pages"} />

      <Box sx={{ width: "100%", px: 10,py:2 }}>
        <Stack direction={"row"} spacing={110} sx={{my:7,ml:5}}>
            <Typography variant="h6">
                Products added by users 
            </Typography>
       <Button
          text={"Add yours"}
          class={"hero-button"}
          onClick={() => handleButtonClick()}
        />     
        </Stack>
      
        <Grid container spacing={4}>
          {products.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={3}>
              <SingleCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <AddProductDialog open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
}
export default UserProducts;
