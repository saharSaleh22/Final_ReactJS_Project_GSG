import React, { useContext, useState } from "react";
import Button from "../Login/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
import Input from "../Login/Input";
import { faLocationPin, faUser } from "@fortawesome/free-solid-svg-icons";
import { EmailContext } from "../../EmailContext";
function MyDialog(props) {
  const[address,setAddress]=useState("");
  const[number,setNumber]=useState("");

const {email}=useContext(EmailContext);
  async function signUp() {
    const userIdentifier = email; // Replace this with the unique identifier of the user you want to update
    const updatedUser = {
      address: address,
      number: number
    };
    console.log(updatedUser);
  
    let result = await fetch(`http://localhost:3006/signup/${userIdentifier}`, {
      method: "put",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    handleClose()
  }

  const handleClose = () => {
    props.setOpen(false);
  };
  const dialogStyle = {
    width: 430,
    ml: 500,
  };
  return (
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
            Name
          </Typography>
          <Input
            type="text"
            placeholder="Name"
            icon={faUser}
            onChange={(e) => e.target.value}
          />
          <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
            Number
          </Typography>
          <Input
            type="text"
            placeholder="Mobile Number"
            icon={faUser}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
            address
          </Typography>
          <Input
            type="text"
            placeholder="street & city"
            icon={faLocationPin}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Stack>
        <Typography
          variant="subtitle2"
          sx={{ pt: 2, textAlign: "center" }}
          gutterBottom
        >
          total price :$8000
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ py: 1, textAlign: "center" }}
          gutterBottom
        >
          after discount :$7200
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button text={"Done"} class="hero-button" onClick={signUp} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;
