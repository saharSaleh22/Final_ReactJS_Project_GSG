import customTheme from "../../theme";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProductButton from "./ProductButton.js";

const SingleCard = (props) => {
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
          {props.card.description.substring(0, 45)}...
        </Typography>
      </CardContent>
      <CardActions>
        <ProductButton
          productId={props.card._id}
          value={"shop now!"}
          ml={"70%"}
        />
      </CardActions>
    </Card>
  );
};
export default SingleCard;
