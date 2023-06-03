import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../Header";
import SingleOrderCard from "./SingleOrderCard";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../Login/Button";
import MyDialog from "./DialogForm";
import Footer from "../Footer";
import { EmailContext } from "../../EmailContext";
import DialogMessage from "../SingleProduct/DialogMessage";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openData, setOpenData] = useState(false);
  const { email } = useContext(EmailContext);
  const [username, setUsername] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

 async function handleClickOpen() {
    const userIdentifier = email;
    let updatedUserData = await fetch(
      `http://localhost:3006/signup/${userIdentifier}`
    );
    updatedUserData = await updatedUserData.json();
    if (updatedUserData.address !== "") {
      setOpenAdd(true);
      setOpenData(false);
      console.log("addres is not null");
    } else {
      setOpenAdd(false);
      setOpenData(true);
      console.log("addres is  null");
    }

  }

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
    let totalPrice = 0;
    filteredOrders.forEach((order) => {
      const orderTotal = order.price * order.quantity;
      totalPrice += orderTotal;
      setTotalPrice(totalPrice);

    });

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
      <DialogMessage open={openAdd} onClose={()=>setOpenAdd(false)}order={"final"} totalPrice={totalPrice}text={"🎉 Thank you for your order! Your order has been successfully received and is now being processed 📦"} username={username}/>
      <MyDialog open={openData} setOpen={setOpenData} username={username} />
      <Footer />
    </>
  );
}

export default Orders;
