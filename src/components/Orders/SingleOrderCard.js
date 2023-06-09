import React from "react";
import "react-multi-carousel/lib/styles.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { MyCard } from "../../StyledComponents";
const SingleOrderCard = (props) => {
  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3006/order/${orderId}`, {
        method: "DELETE",
      });

     } catch (error) {
    }
  };
  return (
    <MyCard
      sx={{
        flexDirection: { xs: "column", sm: "row" }, // Set direction to column for xs (mobile) and row for sm (tablet) and larger screens
        maxWidth: { xs: 370, sm: 650 },
      }}
    >
      <CardMedia
        sx={{ maxWidth: { xs: 350, sm: 260 }, borderRadius: 4, m: 1 }}
        component="img"
        alt={props.card.title}
        height="220"
        image={props.card.image}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ mt: "5%" }}>
          {props.card.title.substring(0, 20)}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{ mt: "10%" }}
        >
          {props.card.description.substring(0, 25)}...
        </Typography>

        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{ mt: "10%" }}
        >
          $ {props.card.price} X {props.card.quantity}
        </Typography>
      </CardContent>
      <CardContent>
       {props.type==="confirm"?<></>:<DeleteIcon
          sx={{ mt: { xs: 2, sm: 9 }, ml: { xs: 18, sm: 4 } }}
          onClick={() => deleteOrder(props.card._id)}
        />} 
      </CardContent>
    </MyCard>
  );
};

export default SingleOrderCard;
