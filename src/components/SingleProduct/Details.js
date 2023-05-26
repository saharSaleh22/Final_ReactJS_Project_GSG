import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Button from "../Login/Button";
import CircleIcon from "@mui/icons-material/Circle";
import { DetailsItem } from "../../StyledComponents";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useState } from "react";
function Details(props) {
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  return (
    <DetailsItem sx={{ width: props.width }}>
      {" "}
      <Typography variant="h5" sx={{ pb: 2, textAlign: "center" }} gutterBottom>
        {props.product.title}
      </Typography>
      <hr width="80%" />
      <Typography
        variant="subtitle2"
        sx={{ width: "80%", pt: 2, pb: 2 }}
        gutterBottom
      >
        {props.product.description}
      </Typography>{" "}
      <hr width="80%" textAlign="center" />
      <Typography variant="h6" gutterBottom>
        Colors :
      </Typography>
      <Stack direction={"row"} spacing={4} sx={{ pb: 2 }}>
        <CircleIcon sx={{ color: "brown" }} />
        <CircleIcon sx={{ color: "#385D50" }} />
        <CircleIcon sx={{ color: "#FFB8B8" }} />
        <CircleIcon sx={{ color: "grey" }} />
      </Stack>
      <hr width="80%" />
      <Typography variant="h6" sx={{ pb: 2 }} gutterBottom>
        Price : {props.product.price}
      </Typography>
      <hr width="80%" />
      <Stack
        direction={"row"}
        spacing={4}
        sx={{ mt: 4, textAlign: "center", px: "37%" }}
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
        <Button text={"Order"} class={"hero-button"} />
      </Box>
    </DetailsItem>
  );
}
export default Details;
