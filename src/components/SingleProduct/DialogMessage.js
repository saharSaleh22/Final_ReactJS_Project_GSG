import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function DialogMessage(props) {
  const dialogStyle = {
    width: 430,
    ml: 500,
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      PaperProps={{
        style: dialogStyle,
      }}
    >
      <DialogTitle>Hey there, {props.username}</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">
          🎉 Thank you for your order! Your order has been successfully received
          and is now being processed. 📦
        </Typography>
      </DialogContent>
      <DialogActions>
        <IconButton onClick={props.onClose} color="inherit">
          <CloseIcon sx={{ color: "grey" }} />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}
export default DialogMessage;
