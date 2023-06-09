import React, { useCallback, useContext, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { EmailContext } from "../EmailContext";
import SingleOrderCard from "./Orders/SingleOrderCard";
import Footer from "./Footer";
import Header from "./Header";

function ConfirmedOrders() {
    const [orders, setOrders] = useState([]);
    const [username, setUsername] = useState('');
    const { email } = useContext(EmailContext);



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
    const filteredOrders = result.filter((order) => {
        if (order.email === email && order.confirm === 1) {
          return true; // Add order to filteredOrders
        }
        return false; // Exclude order from filteredOrders
      });    

    setOrders(filteredOrders);
  }, [email, orders]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <>
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
            there are no orders yet
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
          <Typography variant="subtitle1">{username}, expect your orders to arrive within three days or less.</Typography>
          {orders.map((card, i) => (
            <SingleOrderCard card={card} key={i} type="confirm" />
          ))}
          
        </Stack>
      )}

    </>
  );
}

export default ConfirmedOrders;
