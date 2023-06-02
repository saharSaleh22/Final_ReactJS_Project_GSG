import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import customTheme from "./theme";
import { Link } from "react-router-dom";
import { Box, Button, Card, Divider,  Typography } from "@mui/material";

export const ContactItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const HeroTitle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  background: theme.palette.secondary.main,
  border: "none",
  position: "relative",
  textAlign: "start",
  mt: "12%",
  mb: "5%",
}));

export const HeroTypography = styled(Typography)(({ theme }) => ({
  fontSize: 60,
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const MenuItemLink = styled(Link)(({ theme }) => ({
  color: theme.palette.custom.light,
  fontSize: 20,
  textDecoration: "none",
  borderBottom: "2px solid transparent",
  "&:hover": {
    borderBottomColor: theme.palette.custom.light,
  },
  [theme.breakpoints.down("sm")]: {
    color: theme.palette.primary.main,
    justifyContent: "center",
    "&:hover": {
      borderBottomColor: theme.palette.primary.main,
    },
  },
}));

export const ButtonForProduct = styled(Button)((props) => ({
  background: customTheme.palette.primary.main,
  color: customTheme.palette.custom.light,
  padding: "1.4px 2px 1.4px 4px",
  marginBottom: 2,
  marginLeft: props.ml === "70%" ? "0%" : "3%",
  marginBottom:5,
  height: "40px",
  
  width: props.width === "10%" ? props.width : "110px",
  textTransform: "lowercase",
  fontSize: 16,
  ":hover": { background: customTheme.palette.custom.dark },
}));
export const DetailsItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: customTheme.palette.custom.main,
}));

export const MyDivider = styled(Divider)(({ theme }) => ({
  borderWidth: "1px",
  width: "200%",
  backgroundColor: customTheme.palette.custom.light,
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 380,
  borderRadius: 4,
  background: customTheme.palette.secondary.light,

  ":hover": { background: customTheme.palette.custom.hover },
}));

export const StyledItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MyCard = styled(Card)(({ theme }) => ({
  display: "flex",

  borderRadius: 4,
  background: customTheme.palette.secondary.light,
  ":hover": { background: "#efe3dd" },
}));
