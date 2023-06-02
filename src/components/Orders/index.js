import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../Header";
import SingleOrderCard from "./SingleOrderCard";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../Login/Button";
import MyDialog from "./DialogForm";
import Footer from "../Footer";
import { EmailContext } from "../../EmailContext";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const { email } = useContext(EmailContext);
  const [username, setUsername] = useState("");

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      let result = await fetch("http://localhost:3006/users");
      result = await result.json();
      const user = result.find((user) => user.email === email);

      user ? setUsername(user.name) : setUsername("Dear Customer");
    };

    getUsers();
  }, [email]);

  const getOrders = useCallback(async () => {
    let result = await fetch("http://localhost:3006/orders");
    result = await result.json();
    const filteredOrders = result.filter((order) => order.email === email);
    setOrders(filteredOrders);
  }, [email, orders]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <>
      <Header Inpage={"pages"} />
      {orders.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="subtitle1">
            {" "}
            there are no products added to your Cart
          </Typography>
        </Box>
      ) : (
        <Stack
          spacing={4}
          sx={{
            width: "100%",
            px: { xs: 5, sm: 10, md: 20, lg: 40, xl: 50 },
            py: 12,
          }}
        >
          {orders.map((card, i) => (
            <SingleOrderCard card={card} key={i} />
          ))}
          <Stack sx={{ pl: { xs: 12, sm: 20, md: 30, lg: 30, xl: 30 } }}>
            <Button
              text={"Checkout"}
              class="hero-button"
              onClick={() => handleClickOpen()}
            />
          </Stack>
        </Stack>
      )}
      <MyDialog open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
}

export default Orders;
