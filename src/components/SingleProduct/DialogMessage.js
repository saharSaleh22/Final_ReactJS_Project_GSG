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
        <Typography variant="subtitle1">{props.text}</Typography>
        {props.order === "final" && (
          <>
            <Typography
              variant="subtitle2"
              sx={{ pt: 2, textAlign: "center" }}
              gutterBottom
            >
              total price :${props.totalPrice.toFixed(0)}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ py: 1, textAlign: "center" }}
              gutterBottom
            >
              after discount :$
              {(props.totalPrice - props.totalPrice * 0.2).toFixed(0)}
            </Typography>
          </>
        )}
        {props.order === "final" && (
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            Note that Cash on Delivery
          </Typography>
        )}
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
