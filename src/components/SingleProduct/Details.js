import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Button from "../Login/Button";
import CircleIcon from "@mui/icons-material/Circle";
import { DetailsItem } from "../../StyledComponents";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useContext, useEffect, useState } from "react";
import { EmailContext } from "../../EmailContext";
import DialogMessage from "./DialogMessage";
function Details(props) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { email } = useContext(EmailContext);
  const [username, setUsername] = useState("");
  useEffect(() => {
    getUsers();

  }, []);
  const { description, image, title, price, _id } = props.product;

  const getUsers = async () => {
    let result = await fetch("http://localhost:3006/users");
    result = await result.json();
    const user = result.find((user) => user.email === email);

    user ? setUsername(user.name) : setUsername("Dear Customer");
    console.log(username);
  };
  const handleIncrease = () => {
    quantity === 10
      ? setQuantity(10)
      : setQuantity((prevQuantity) => prevQuantity + 1);
  };
  async function handleClickOpen() {
    let result = await fetch("http://localhost:3006/order", {
      method: "post",
      body: JSON.stringify({
        description,
        image,
        title,
        price,
        quantity,
        email,
        _id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleDecrease = () => {
    quantity === 1
      ? setQuantity(1)
      : setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <DetailsItem sx={{ width: props.width }}>
      {" "}
      <Typography variant="h5" sx={{ pb: 2, textAlign: "center" }} gutterBottom>
        {props.product.title}
      </Typography>
      <hr width="95%" />
      <Typography
        variant="subtitle2"
        sx={{ width: "80%", pt: 2, pb: 2 }}
        gutterBottom
      >
        {props.product.description}
      </Typography>{" "}
      <hr width="95%" />
      <Typography variant="h6" gutterBottom>
        Colors :
      </Typography>
      <Stack direction={"row"} spacing={4} sx={{ pb: 2 }}>
        <CircleIcon sx={{ color: "brown" }} />
        <CircleIcon sx={{ color: "#385D50" }} />
        <CircleIcon sx={{ color: "#FFB8B8" }} />
        <CircleIcon sx={{ color: "grey" }} />
      </Stack>
      <hr width="95%" />
      <Typography variant="h6" sx={{ pb: 2 }} gutterBottom>
        Price : {props.product.price}
      </Typography>
      <hr width="95%" />
      <Stack
        direction={"row"}
        spacing={4}
        sx={{ mt: 4, justifyContent: "center", alignItems: "center" }}
      >
        <Box onClick={handleIncrease}>
          <AddCircleIcon sx={{ color: "#713A3A" }} />
        </Box>

        <Typography variant="h6" sx={{ px: 2 }} gutterBottom>
          {quantity}
        </Typography>
        <Box onClick={handleDecrease}>
          <RemoveCircleIcon sx={{ textAlign: "center", color: "#713A3A" }} />
        </Box>
      </Stack>
      <Box sx={{ textAlign: "center", pt: 4 }}>
        <Button
          text={"Order"}
          class={"hero-button"}
          onClick={handleClickOpen}
        />
      </Box>
      <DialogMessage open={open} onClose={handleClose} username={username} />
    </DetailsItem>
  );
}export default Details;

