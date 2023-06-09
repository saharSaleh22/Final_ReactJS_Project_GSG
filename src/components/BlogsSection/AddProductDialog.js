import React, { useCallback, useContext, useEffect, useState } from "react";

import Button from "../Login/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Input from "../Login/Input";
import {
  faChair,
  faLocationPin,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { EmailContext } from "../../EmailContext";
import DialogMessage from "../SingleProduct/DialogMessage";

function AddProductDialog(props) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [address, setAddress] = useState(null);
  const [openMessage, setOpenMessage] = useState(false);
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
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleCloseMessage = () => {
   setOpenMessage(false);
  };


  async function AddToUserProducts() {
    let result = await fetch("http://localhost:3006/adduserproduct", {
      method: "post",
      body: JSON.stringify({
        description,
        title,
        price,
        image,
        email: email,
        mobile: "545",
        rating: 3.5,
        address,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    props.setOpen(false);
    setOpenMessage(true);
  }
  function handleOpenFile(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(+URL.createObjectURL(file));
      setImage("../../assets/" + file.name);
    }
  }
  const dialogStyle = {
    width: 430,
    ml: 500,
  };
  return (
    <>
      <Dialog
        sx={{ position: "absolute" }}
        open={props.open}
        onClose={handleClose}
        PaperProps={{
          style: dialogStyle,
        }}
      >
        <DialogTitle>
          Fill in the fields
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack direction={"column"} spacing={1}>
            <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
              Product Name
            </Typography>
            <Input
              type="text"
              placeholder="Product Name"
              icon={faDotCircle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
              Description
            </Typography>
            <Input
              type="text"
              placeholder="Product Description"
              icon={faChair}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
              Price
            </Typography>
            <Input
              type="text"
              placeholder="Price"
              icon={faUser}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
              Your Address
            </Typography>
            <Input
              type="text"
              placeholder="street & city"
              icon={faLocationPin}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Stack>

          <Typography variant="subtitle2" sx={{ mb: -4, mt: 2 }} gutterBottom>
            Upload Image
          </Typography>
          <TextField
            type="file"
            accept="image/*"
            onChange={handleOpenFile}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              color: "#713A3A",
              borderColor: "#713A3A",
              borderRadius: "30%",
              pt: 5,
              pl: 2,
            }}
          />

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              text={"Add Product"}
              class="hero-button"
              onClick={AddToUserProducts}
            />
          </Box>
        </DialogContent>
      </Dialog>
      <DialogMessage open={openMessage} onClose={handleCloseMessage} username={username}  text={"🎉 you added your products succefully 🛒"} />
    </>
  );
}

export default AddProductDialog;
