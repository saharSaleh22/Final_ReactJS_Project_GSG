import customTheme from "../../theme";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProductButton from "./ProductButton.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { EmailContext } from "../../EmailContext";
const SingleCard = (props) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);
  const { email } = useContext(EmailContext);

  async function AddToFav() {
    console.log("inside add to fave");
    let result = await fetch("http://localhost:3006/likes", {
      method: "post",
      body: JSON.stringify({
        _id: props.card._id,
        email,
        description: props.card.description,
        image: props.card.image,
        title: props.card.title,
        price: props.card.price,

        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    const userIdentifier = props.card._id; // Replace this with the unique identifier of the user you want to update
    const updatedUser = {
      like: 1,
    };
    console.log(updatedUser);

    let result2 = await fetch(
      `http://localhost:3006/products/${userIdentifier}`,
      {
        method: "put",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result2 = await result2;
    setIsFavorite(true);
  }
  const ReomveFromFav = async (id) => {
    try {
      const response = await fetch(`http://localhost:3006/likes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // window.location.reload();

        console.log("unlike deleted successfully");
      } else {
        console.log("Failed to delete like");
      }
    } catch (error) {
      console.error("An error occurred while deleting the like:", error);
    }
    const userIdentifier = props.card._id; // Replace this with the unique identifier of the user you want to update
    const updatedUser = {
      like: 0,
    };
    console.log(updatedUser);

    let result2 = await fetch(
      `http://localhost:3006/products/${userIdentifier}`,
      {
        method: "put",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result2 = await result2;
    setIsFavorite(false);
  };
  const handleOrder = useCallback(async (card) => {
    // console.log("my id is "+id)
    let result = await fetch("http://localhost:3006/order", {
      method: "post",
      body: JSON.stringify({
        description:card.description,
        image: card.image,
        title: card.title,
        price: card.price,
        quantity: 1,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result;
    setIsOrderPlaced(true);
    setTimeout(() => {
      setIsOrderPlaced(false);
    }, 1000);
  }, [email, props.product]);
  return (
    <Card
      sx={{
        maxWidth: 280,
        borderRadius: 4,
        background: customTheme.palette.secondary.light,

        ":hover": { background: "#efe3dd" },
      }}
    >
      <CardMedia
        sx={{ maxWidth: 260, borderRadius: 4, m: 1 }}
        component="img"
        alt={props.card.title}
        height="200"
        image={props.card.image}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          $ {props.card.price}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.card.title.substring(0, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.description.substring(0, 45)}
          {props.card.like}...
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={"row"} spacing={5} sx={{ pt: 1.5, ml: 1, mb: 1.2 }}>
          {isOrderPlaced ? (
            <TaskAltIcon sx={{ color: "#A75D5D", transition: "ease 0.5s" }} />
          ) : (
            <ShoppingCartIcon
              sx={{ color: "#A75D5D", transition: "ease 0.5s" }}
              onClick={() => handleOrder(props.card)}
            />
          )}
          <ProductButton
            type={props.type}
            productId={props.card._id}
            value={"shop now!"}
            ml={"70%"}
          />
          {props.like === "yes" ? (
            <FavoriteIcon
              sx={{ color: "#A75D5D" }}
              onClick={() => ReomveFromFav(props.card._id)}
            />
          ) : isFavorite ? (
            <FavoriteIcon
              sx={{ color: "#A75D5D" }}
              onClick={() => ReomveFromFav(props.card._id)}
            />
          ) : (
            <FavoriteBorderIcon sx={{ color: "#A75D5D" }} onClick={AddToFav} />
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};
export default SingleCard;
