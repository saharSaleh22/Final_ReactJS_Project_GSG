import React, { useEffect, useState } from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import SingleOrderCard from "./SingleOrderCard";
import { Stack } from "@mui/material";
import Button from "../Login/Button";
import MyDialog from "./DialogForm";

function Orders() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/products");
    result = await result.json();
    setProducts(result);
  };

  return (
    <>
      <Header Inpage={"pages"} />

      <Stack
        spacing={4}
        sx={{
          width: "100%",
          px: { xs: 5, sm: 10, md: 20, lg: 40, xl: 50 }, // px value for mobile and tablet breakpoints
          py: 12,
        }}
      >
        {products.map((card, i) => (
          <SingleOrderCard card={card} key={i} />
        ))}
        <Stack sx={{ pl: { xs: 12, sm: 20, md: 30, lg: 30, xl: 30 } }}>
          <Button
            text={"Checkout"}
            class="hero-button"
            onClick={() => handleClickOpen()}
          />
        </Stack>{" "}
      </Stack>
      <MyDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default Orders;
