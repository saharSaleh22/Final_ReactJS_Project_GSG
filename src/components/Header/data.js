import PersonIcon from "@mui/icons-material/Person";
import FavIcon from "./Fav";
import CartIcon from "./orders";




const Data = [
  {
    href: "/HomePage",
    item: "Home Page",
  },
  {
    href: "/allproducts",
    item: "products",
  },
  {
    href: "/allUserProducts",
    item: "pre-owned",
  },
  {
    href: "/orders",
    item: "orders",
  },
  {
    href: "/profile",
    item: <PersonIcon sx={{ ml: 1 }} />,
  },
  {
    href: "/orders",
    item: <CartIcon/>
  },       

  {
    href: "/favorites",
    item: <FavIcon/>
  },
];

export default Data;
