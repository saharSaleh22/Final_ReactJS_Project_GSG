import React from "react";
import Button from "../Login/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
import Input from "../Login/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function MyDialog(props) {
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
            onChange={(e) => e.target.value}
          />
          <Typography variant="subtitle2" sx={{ mb: -1 }} gutterBottom>
            address
          </Typography>
          <Input
            type="text"
            placeholder="street & city"
            icon={LocationOnIcon}
            onChange={(e) => e.target.value}
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
          <Button text={"Checkout"} class="hero-button" />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;
