import Box from "@mui/material/Box";
import {

  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Button from "../Login/Button";
import CircleIcon from "@mui/icons-material/Circle";
import { DetailsItem } from "../../StyledComponents";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useCallback, useContext, useEffect, useState } from "react";
import { EmailContext } from "../../EmailContext";
import DialogMessage from "./DialogMessage";

import OwnerDetails from "./OwnerDetails";

function Details(props) {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { email } = useContext(EmailContext);
  const [username, setUsername] = useState("");


  const getUsers = useCallback(async () => {
    let result = await fetch("http://localhost:3006/users");
    result = await result.json();
    const user = result.find((user) => user.email === email);
    user ? setUsername(user.name) : setUsername("Dear Customer");
  }, [email]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleIncrease = useCallback(() => {
    setQuantity((prevQuantity) =>
      prevQuantity === 10 ? 10 : prevQuantity + 1
    );
  }, []);

  const handleClickOpen = useCallback(async () => {
    let result = await fetch("http://localhost:3006/order", {
      method: "post",
      body: JSON.stringify({
        description: props.product.description,
        image: props.product.image,
        title: props.product.title,
        price: props.product.price,
        quantity,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    setOpen(true);
  }, [email, props.product]);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleDecrease = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
  }, []);
  const [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
    const ratingValue = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
    setDefaultValue(ratingValue);
  }, []);

  if (defaultValue === null) {
    return <div>Loading...</div>;
  }
  return (
    <DetailsItem sx={{ width: props.width }}>
      {" "}
      <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>
        {props.product.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ pb: 1, textAlign: "center" }}
        gutterBottom
      >
        {" "}
        {defaultValue}
        <Rating
          name="half-rating"
          defaultValue={defaultValue}
          precision={0.1}
          sx={{ fontSize: "20px" }}
        />
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
      {props.type === "user" && (
        <OwnerDetails mobile={props.product.mobile} email={props.product.email} address={props.product.address} />
      )}
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
          text={"Add To Cart"}
          class={"hero-button"}
          onClick={handleClickOpen}
        />
      </Box>
      <DialogMessage open={open} onClose={handleClose} username={username} />
    </DetailsItem>
  );
}
export default Details;
