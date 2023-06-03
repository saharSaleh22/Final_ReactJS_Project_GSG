import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SingleCard from "../ProductsHomePage/SingleCard";
import Footer from "../Footer";
import Header from "../Header";
import { EmailContext } from "../../EmailContext";

function Likes() {
  const [products, setProducts] = useState([]);
  const { email } = useContext(EmailContext);
 
  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/likes");
    result = await result.json();
    const filteredProducts = result.filter(
      (product) => product.email === email
    );
    setProducts(filteredProducts);
  }; useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Header Inpage={"pages"} />{" "}
      
          {products.length === 0 ? (
            <Box  sx={{ display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"90vh" }}>
              <Typography sx={{textAlign:"center",  }}variant="subtitle1"> there are no products added to your wishlist </Typography>
            </Box>
          ) : (
<Box sx={{ width: "100%", px: 10 }}>
        <Grid container spacing={4}>
          { products.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={3}>
                <SingleCard card={card} like={"yes"} />
              </Grid>
            ))}

              </Grid>
      </Box> 
          )}
     
      <Footer />
    </>
  );
}
export default Likes;
