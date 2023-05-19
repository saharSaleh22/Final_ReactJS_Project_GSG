import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import customTheme from "./theme";
import { Box, Button, Divider, Link } from "@mui/material";

const ContactItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));
export default ContactItem;

const HeroTitle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  variant: "h3",
  background: customTheme.palette.secondary.main,
  fontSize: 60,
  border: "none",
  fontWeight: 600,
  position: "relative",
  textAlign: "start",
  mt: "12%",
  color: customTheme.palette.primary.main,
  mb: "5%",
}));
export { HeroTitle };

const MenuItemLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  fontSize: 20,
  textDecoration: "none",
  borderBottom: "2px solid transparent",
  "&:hover": {
    borderBottomColor: customTheme.palette.custom.light,
  },
  "@media (max-width:675px)": {
    color: customTheme.palette.primary.main,
    justifyContent: "center",
    "&:hover": {
      borderBottomColor: customTheme.palette.primary.main,
    },
  },
}));
export { MenuItemLink };

const ButtonForProduct = styled(Button)(({ theme }) => ({
  background: customTheme.palette.primary.main,
  color: customTheme.palette.custom.light,
  paddingTop: 1.4,
  paddingBottom: 1.4,
  paddingLeft: 4,
  paddingRight: 2,
  marginBottom: 2,
  marginLeft: "15%",
  width: "70%",
  textTransform: "lowercase",
  fontSize: 16,
  ":hover": { background: customTheme.palette.custom.dark },
}));
export { ButtonForProduct };
const DetailsItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: customTheme.palette.custom.main,
}));

export { DetailsItem };

const MyDivider = styled(Divider)(({ theme }) => ({
 

  borderWidth: "1px",
  width: "200%",
  backgroundColor: customTheme.palette.custom.light,
}));

export { MyDivider };
